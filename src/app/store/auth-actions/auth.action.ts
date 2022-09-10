export namespace AuthActions {
  export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: { username: String; password: String }) {}
  }

  export class Logout {
    static readonly type = '[Auth] Login';
  }
}
