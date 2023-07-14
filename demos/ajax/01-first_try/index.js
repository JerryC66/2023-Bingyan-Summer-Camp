const p = document.querySelector('p')

let xhr = new XMLHttpRequest()

xhr.open('get','ajax_test.txt',true)

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            p.innerHTML = xhr.responseText;
        }
    }
}

xhr.send(null)