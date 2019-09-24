import axios from "axios";
import Constants from "../constants";

export const loginRequest = async (email, password) => {
    const configOfRequest = {
        method: 'post',
        url: Constants.urls.auth,
        headers: { 'content-type':'application/json'},
        data: {
            email, password
        }

    };
    const loginRequest = await axios(configOfRequest);
    return loginRequest;
};

export const validResponseAuth = (r) => {
    if(
        r &&
        r.hasOwnProperty('data') &&
        r.data.hasOwnProperty('data') &&
        r.data.hasOwnProperty('status') &&
        r.data.data.hasOwnProperty('id') &&
        r.data.status === "ok"
    ){
        return true
    }
    else{
        return false
    }
};

export const profileRequest = function (id) {

};