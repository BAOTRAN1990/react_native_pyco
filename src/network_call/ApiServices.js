const BASE_URL = 'http://localhost:3000';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export default class APIServices {
    static signIn(userCredential){
        let signInURL = `${BASE_URL}/signin`;
        return fetch(signInURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: userCredential.userName,
                password: userCredential.password,
            })
        }).then(response => {
            return response.json();
        }).then(jsonData => {
            //console.log(jsonData);
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

    static getUserDtl(userID){
        let getUserDtlURL = `${BASE_URL}/user/${userID}`;
        return fetch(getUserDtlURL, {
            method: 'GET',
            headers: headers
        }).then(response => {
            return response.json();
        }).then(jsonData => {
            //console.log(jsonData);
            if(jsonData.hasOwnProperty('error')){
                throw new Error(jsonData.error);
            } else {
                return jsonData;
            }
        });
    }

    static addUser(userInfo){
        let signInURL = `${BASE_URL}/user`;
        return fetch(signInURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userInfo)
        }).then(response => {
            return response.json();
        }).then(jsonData => {
            //console.log(jsonData);
            if(jsonData.hasOwnProperty('error')){
                throw new Error(jsonData.error);
            } else {
                return jsonData;
            }
        });
    }
}