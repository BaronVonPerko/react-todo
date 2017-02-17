import 'whatwg-fetch';



export default class AjaxService {

    ajaxPost = (url, body) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then((res) => {
                resolve(res);
            }); 
        });        
    }

    ajaxGet = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                resolve(res);
            })
        });
    }
}