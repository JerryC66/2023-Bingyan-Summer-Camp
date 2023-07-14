const button = document.querySelector('button')
const img = document.querySelector('img')

function ajaxPromise () {
    let promise = new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('get','download.jpg',true)
        xhr.onreadystatechange = () => {
            console.log('Ready state change')
            if(xhr.readyState === 4) {
                if(xhr.status >=200 && xhr.status < 300 || xhr.status ===304) {
                    console.log('Resolve branch'); // 调试语句
                    resolve( xhr.responseURL)
                }
                else {
                    reject(new Error(xhr.statusText))
                }
            }
        }
        xhr.send(null)
    })
    return promise
    
}

button.addEventListener('click', ()=> {
    ajaxPromise()
        // 如果是resolve
        .then( responseURL => {
            img.src = responseURL
        })
        // 如果是reject
        .catch( statusText => {
            console.log( statusText)
        })
})