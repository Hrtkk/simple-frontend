import MainAction from "../../shared.mod/action/main.action";
import { RestClient } from "../../shared.mod/network-services/rest-client";

class ProfileAction extends MainAction {
  private static _inst: ProfileAction;
  
  public static getInstance (): ProfileAction {
    if (!ProfileAction._inst) {
      ProfileAction._inst = new ProfileAction();
    }
    return ProfileAction._inst;
  }

  getProfileData = () => {
    const restClient = RestClient.getInstance();
    const url = '';
    const payload = {

    };
    restClient.get(url, payload).then((response) => {
      console.log('response');
    });
  }



}