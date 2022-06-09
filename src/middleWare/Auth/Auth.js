class Auth {
    User = JSON.parse(localStorage.getItem('loggedIn'))
    constructor() {
        console.log(this.User)
        this.authenticated = this.User ? true : false;
    }

    login = () => {
        this.authenticated = true;
    }

    logout = () => {
        this.authenticated = false;
        localStorage.clear()
    }

    isAuthenticated() {
        console.log('from Auth', this.authenticated)
        return this.authenticated;
    }
}

export default new Auth();