import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'}
});

class Api {
    login = (bodyRequest) => {
        return api.post("/auth/session", bodyRequest);
    }

    loginStepTwo = (token, bodyRequest) => {
        return api.post("/auth/session/stepTwo", bodyRequest, { headers: { 'Authorization': 'Bearer '+ token } });
    }

    resetPasswordSendEmail = (bodyRequest) => {
        return api.post("/reset-password", bodyRequest);
    }

    resetPasswordSave= (bodyRequest) => {
        return api.put("/reset-password", bodyRequest);
    }

    saveCompany = (bodyRequest) => {
        return api.request({method: 'post', url: '/company/new', data: bodyRequest});
    }
}

export const apiInstance = () => {
    return new Api();
}