import Cookies from "js-cookie";
import { validate as uuidValidate } from 'uuid';


export const isUserLoggin = () => {
    const isLogin = Cookies.get('inter_ib_login');
    const uuid = Cookies.get('uuid');
    if (typeof isLogin != "undefined" || typeof uuid != "undefined") {
        if(uuidValidate(uuid)){
            return true;
        }
        return false;
    }

    return false;
};