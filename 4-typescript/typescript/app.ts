class User {
  _login: string;
  password: string;

  set login(l: string) {
    this._login = 'user-' + l;
  }

  get login() {
    return this._login;
  }
}
 const user = new User();
 user.login = 'myLogin';
 console.log(user);
 console.log(user.login);