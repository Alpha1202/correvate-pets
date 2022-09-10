export interface IAuth {
  session_token: String | null;
  message: String | null;
}

export interface IAuthResponse {
  code: number;
  type: String;
  message: String;
}
