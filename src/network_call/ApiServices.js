const BASE_URL = 'http://localhost:3000';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export default class APIServices {
    static signIn(userCredential){
        let signInURL = `${BASE_URL}/signin`;
        return fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userCredential.userName,
                password: userCredential.password,
            })
        }).then(response => {
            return response.json();
        }).then(jsonData => {
            console.log(jsonData);
            if(jsonData.hasOwnProperty('error')){
                throw new Error(jsonData.error);
            } else {
                return jsonData;
            }
        });
    }

    static getListUser(){
        let getListUserURL = `${BASE_URL}/user`;
        return fetch(getListUserURL, {
            method: 'GET',
            headers: headers
        }).then(response => {
            //console.log(response.ok);
            return response.json();
        }).then(jsonData => {
            return jsonData.listUsers;
        });
    }
}