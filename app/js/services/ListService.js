import AjaxService from './AjaxService';

export default class ListService {

    constructor() {
        this.ajax = new AjaxService();
    }

    createNewList = (newListName) => {
        const body = {
            name: newListName
        }

        return new Promise((resolve, reject) => {
            var url = 'http://localhost:8080/api/list';

            this.ajax.ajaxPost(url, body).then((res) => {
                resolve(res.json());
            });
        });
    }

    getLists = () => {
        return new Promise((resolve, reject) => {
            var url = 'http://localhost:8080/api/list';

            this.ajax.ajaxGet(url).then((res) => {
                resolve(res.json());
            });
        });
    }
}