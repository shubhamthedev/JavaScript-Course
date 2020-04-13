class EasyHTTP {
    //Make a get request
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    //Make a http post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    //make a put request
    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;

    }
    //make a delete request
    async delete(url) {

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = 'Resource Deleted';
        return resData;

    }
}