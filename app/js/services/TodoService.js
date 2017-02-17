import AjaxService from './AjaxService';

export default class TodoService {

    constructor() {
        this.ajax = new AjaxService();
    }

    getTodos = (listId) => {
        return new Promise((resolve, reject) => {
            const url = 'http://localhost:8080/api/todo/' + listId;

            this.ajax.ajaxGet(url).then((res) => {
                resolve(res.json());
            });
        });
    }

    postTodo = (text, description, list_id) => {
        return new Promise((resolve, reject) => {
            const url = 'http://localhost:8080/api/todo';
            const body = {
                text,
                description,
                list_id
            };

            this.ajax.ajaxPost(url, body).then((res) => {
                resolve(res.json());
            });
        });
    }
}