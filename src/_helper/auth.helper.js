import Cookies from "js-cookie";

export const isUserLoggin = () => {
    const isLogin = Cookies.get('inter_ib_login');
    if (typeof isLogin != "undefined") {
        return true;
    }

    return false;
};