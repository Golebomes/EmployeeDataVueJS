import storage from "./storage";
import * as url from "core-js";
import catchErrors from "@/utils/catchErrors";

const checkForError = response => {
    if (!response.ok) throw response;
    return response;
};

const processingResponse = response => {
    const header = response.headers.get("Content-Type");
    const type = header ? header.split(";")[0] : null;

    switch (type) {
        case "application/json":
            return response.json();
        case "text/plain":
            return response.text();
        case "application/doc" || "application/pdf":
            return {
                filename: header.split(";")[1].split("=")[1],
                blob: response.blob()
            };
        default:
            return true;
    }
};

const processingCatch = error => {
    return catchErrors(error)
};

async function Get(path, params) {
    if (params === undefined || params === null) {
        const apiUrl = storage.getApiUrl();
        let request = {
            method: "GET",
            mode: "cors",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        };
        return await fetch(`${apiUrl}${path}`, request)
            .then(checkForError)
            .then(processingResponse)
            .catch(processingCatch);
    } else if(typeof(params) !== 'object' && params.length === undefined) {
        console.log("Error: URL params is not object. Please get Object an a property.");
    } else {
        const urlProp = "?" + new url.URLSearchParams(params);
        const apiUrl = storage.getApiUrl();
        let request = {
            method: "GET",
            mode: "cors",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        };
        return await fetch(`${apiUrl}${path}${urlProp}`, request)
            .then(checkForError)
            .then(processingResponse)
            .catch(processingCatch);
    }
}

async function Post(path, payload) {
    const apiUrl = storage.getApiUrl();
    return await fetch(`${apiUrl}${path}`, {
        method: "POST",
        mode: "cors",
        credentials: 'include',
        body:
            payload === null
                ? null
                : typeof payload === "object"
                ? JSON.stringify(payload)
                : payload,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })
        .then(checkForError)
        .then(processingResponse)
        .catch(processingCatch);
}

export default {
    get: async (path, params) => {
        return await Get(path, params);
    },
    post: async (path, payload) => {
        return await Post(path, payload);
    }
};
