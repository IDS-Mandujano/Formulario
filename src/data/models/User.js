class User {
    #nombreUsuario;
    #email;
    #password;
    #date;

    constructor(user, email, pass, date) {
        this.#nombreUsuario = user;
        this.#email = email;
        this.#password = pass;
        this.#date = date;
    }

    getUser() {
        return this.#nombreUsuario;
    }

    getEmail() {
        return this.#email;
    }

    getPassword() {
        return this.#password;
    }

    getDate() {
        return this.#date;
    }
}

export default User;
