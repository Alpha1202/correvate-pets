import { getActionTypeFromInstance } from '@ngxs/store';

import { AuthActions } from './store/auth-actions/auth.action';
import { IAuth } from './model/auth/auth.model';

export const logoutPlugin = (state: IAuth, action, next) => {
  if (getActionTypeFromInstance(action) == new AuthActions.Logout()) {
    state.session_token = null;
    state.message = null;
  }
  return next(state, action);
}