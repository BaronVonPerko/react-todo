import 'whatwg-fetch';



export default class AjaxService {

    ajaxPost = (body) => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/api/list', {
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

    createNewList = (newListName) => {

        const body = {
            name: newListName
        }

        return new Promise((resolve, reject) => {
            var svc = new AjaxService();

            svc.ajaxPost(body).then((res) => {
                resolve(res);
            });
        });
    }
}