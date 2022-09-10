import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { IAuth, IAuthResponse } from 'src/app/model/auth/auth.model';
import { ApiService } from 'src/app/api-services/api.service';
import { AuthActions } from '../auth-actions/auth.action';

@State<IAuth>({
  name: 'auth',
  defaults: {
    session_token: null,
    message: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private service: ApiService) {}

  @Selector()
  static token(state: IAuth): String | null {
    return state.session_token;
  }

  @Selector()
  static getAuthMessage(state: IAuth): String | null {
    return state.message;
  }

  @Selector()
  static isAuthenticated(state: IAuth): boolean {
    return !!state.session_token;
  }

  @Action(AuthActions.Login)
  authLoginStateAction(ctx: StateContext<IAuth>, action: AuthActions.Login) {
    return this.service.authLogin(action.payload).pipe(
      tap((res: IAuthResponse) => {
        ctx.patchState({
          session_token: res.code == 200 ? res.message.split(':')[1] : null,
          message: res.message,
        });
      })
    );
  }

  @Action(AuthActions.Logout)
  authLogoutStateAction(ctx: StateContext<IAuth>) {
    localStorage.clear();
    return ctx.patchState({
      session_token: null,
      message: null,
    });
  }
}
