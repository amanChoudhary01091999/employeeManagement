import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_URL}`;

export const executeAPI = (httpMethod, basePath) => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("accessToken")
                ? localStorage.getItem("accessToken")
                : null,
            "Access-Control-Allow-Origin": "*",
        },
    };
    const fileConfig = {
        headers: {
            Authorization: localStorage.getItem("accessToken")
                ? localStorage.getItem("accessToken")
                : null,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
        },
    };
    let response = null;
    let url = apiKey + basePath;
    // axios.post("", {}, {
    //     headers: {
    //         'Content-type' : ''
    //     }
    // })
    switch (httpMethod) {
        case "GET":
            response = () => axios.get(url);
            return response;
            break;
        case "GET_BY_ID":
            response = (id) => axios.get(url + id);
            return response;
            break;
        case "POST":
            response = (data) => axios.post(url, data, fileConfig);
            return response;
            break;
        case "PUT":
            response = (data) => axios.put(url, data, axiosConfig);
            return response;
            break;
        case "DELETE":
            response = (id) => axios.delete(url + id, axiosConfig);
            return response;
            break;
        case "POST_FILE":
            response = (data) => axios.post(url, data, fileConfig);
            return response;
            break;
        default:
            console.log("None");
            break;
    }
};
