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
    const loginRequestResult = await axios(configOfRequest);
    return loginRequestResult;
};

export const validResponseAuth = (r) => {
    return !!(r &&
        r.hasOwnProperty('data') &&
        r.data.hasOwnProperty('data') &&
        r.data.hasOwnProperty('status') &&
        r.data.data.hasOwnProperty('id') &&
        r.data.status === "ok");
};

export const profileRequest = async (id) => {
    const configOfRequest = {
        method: 'get',
        url: `${Constants.urls.profile}/${id}`
    };
    const profileDataRequestResult = await axios(configOfRequest);
    return profileDataRequestResult;
};