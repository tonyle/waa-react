import { Api } from "../config/Api.jsx";

const get = async (url) => {
    try {
        let data = [];
        data = (await Api.get(url)).data;
        return data;
    } catch (error) {
        console.log(error.message)
        return [];
    }
}

const deleteAPI = async (url) => {
    try {
        await Api.delete(url);
        return true;
    } catch (error) {
        console.log(error.message)
        return false;
    }
}

const post = async (url, data) => {
    try {
        let result = [];
        result = await Api.post(url, data);
        return result;
    } catch (error) {
        console.log("Error with POST: ", error);
        return [];
    }
};

const put = async (url, data) => {
    try {
        let result = [];
        result = await Api.put(url, data);
        return result;
    } catch (error) {
        console.log("Error with PUT: ", error);
        return [];
    }
};

export const fetchService = {
    get,
    deleteAPI,
    put,
    post
};
