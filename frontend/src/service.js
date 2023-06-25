//service.js This module is used for authenication of the user for the website
//Made By Luke Jennings, Student ID: 46412394

export const Auth = {
    userData: null,
    login: function(authInfo) {
        fetch('http://localhost:1337/api/auth/local', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authInfo)
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            this.userData = data
            let event = new CustomEvent("userLogin")
            window.dispatchEvent(event)
        })
    },
    getJWT: function(){
        if(this.userData){
            return this.userData.jtw
        } else {
            return null
        }
    },
    getUser: function(){
        if(this.userData){
            return this.userData.user
        } else {
            return null
        }
    },
    logout: function(){
        this.userData = null;
    }
}