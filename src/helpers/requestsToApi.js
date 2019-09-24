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
    return !!(r && r.hasOwnProperty('data') && r.hasOwnProperty('status') && r.data.hasOwnProperty('id') && r.status === 'ok' && typeof r.data.id === 'number');
};

export const profileRequest = function (id) {

};