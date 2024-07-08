
const list = document.getElementById('list');

function convertToLinks(list) {
    for (let i = 0; i < list.children.length; i++) {
        let item = list.children[i];
        if (item.textContent.startsWith('https://') || item.textContent.startsWith('http://')) {
            let link = document.createElement('a');
            link.href = item.textContent;
            link.textContent = item.textContent;
            item.textContent = '';
            item.appendChild(link);
        }
        if (item.children.length > 0) { // есть ли дочерние эл.
            convertToLinks(item.children[0]);
        }
    }
}

convertToLinks(list);