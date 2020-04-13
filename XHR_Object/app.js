document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //create xhr object
    const xhr = new XMLHttpRequest();
    //open
    xhr.open('GET', 'data.txt', true);
    xhr.onprogress = function () {
        console.log('Ready State', xhr.readyState);
    }
    //xhr.onload is actually pretty new
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
        }
    }
    //xhr.onReadyStateChange
    // xhr.onreadystatechange = function () {
    //     if (this.status === 200 && this.readyState === 4) {
    //         document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
    //     }
    // }
    xhr.onerror = function () {
        console.log('error occured');
    }
    xhr.send();
}