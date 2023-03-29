import { AUTH_LOGIN } from "../../config/const/url.const";
import MainAction from "../../shared.mod/action/main.action"
import { IRestParam, RestClient } from "../../shared.mod/network-services/rest-client";

export class LoginAction extends MainAction {
  private static _inst: LoginAction;
  public static getInstance () {
    if (!LoginAction._inst) {
      LoginAction._inst = new LoginAction();
    }
    return LoginAction._inst;
  }

  login (username: string, password: string) {
    const restClient = RestClient.getInstance();
    const payload: IRestParam = {
      method: 'POST',
      body: {
        username: username,
        password: password
      }
    };

    return restClient.call(AUTH_LOGIN, payload);
  };

  signup (username: string, password: string) {

  };
}