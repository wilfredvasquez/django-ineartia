import axios from 'axios';
const API_HOST = "URL_API";

export async function getViewGET(endpointUrl=null) {
    try {
        const headers = {
            'X-Inertia': true,
            'Content-Type': 'application/json'
        }
        const url = endpointUrl  ? `${API_HOST}${endpointUrl}` : `${API_HOST}`;
        const response = await axios({ method: "get", url: url, headers: headers });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getViewPOST(endpointUrl=null, data={}, csrftoken="") {
    try {
        axios.defaults.csrfmiddlewaretoken = csrftoken;
        const headers = { 
            'X-Inertia': true,
            'Content-Type': 'application/json',
            'X-Xsrf-Token': csrftoken,
        }
        const url = endpointUrl  ? `${API_HOST}${endpointUrl}` : `${API_HOST}`;
        const response = await axios({ method: "post", url: url, headers: headers, data: data,  mode: 'same-origin'});
        return response;
    } catch (error) {
        throw error;
    }
}

