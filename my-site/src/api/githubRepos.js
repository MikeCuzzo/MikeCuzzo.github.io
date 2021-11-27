import axios from 'axios';

export default class GithubRepos {
    url = "https://api.github.com/users/MikeCuzzo";

    getRepos() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/repos`)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    getOwner() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }
}