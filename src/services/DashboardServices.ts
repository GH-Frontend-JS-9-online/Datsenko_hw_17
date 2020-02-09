import Project from "./Project"
const request = require('request')

class DashboardApiServices {
    apiBase: string;
    constructor() {
        this.apiBase = `https://geekhub-frontend-js-9.herokuapp.com/api`;
    }

    getProjectsInfo(token: string, cb: (project: Project) => any) {
        let options: any = {
            headers: {
                "x-access-token": token
            },
            json: true
        };
        request.get(
            `${this.apiBase}/projects/`,
            options,
            (error: any, response: any, body: any) => {
                let project = new Project(body);
                cb(project)
            }
        );
    }
}

export default DashboardApiServices;
