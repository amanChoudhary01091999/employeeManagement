import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_URL}`;

export const executeAPI = (httpMethod, basePath) => {
    function getAxiosConfig() {
        const accessToken = localStorage.getItem("accessToken")
            ? localStorage.getItem("accessToken")
            : null;
        return {
            headers: {
                Authorization: accessToken,
                "Access-Control-Allow-Origin": "*",
            },
        };
    }
    let axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("accessToken")
                ? localStorage.getItem("accessToken")
                : undefined,
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
    switch (httpMethod) {
        case "GET":
            response = () =>
                axios.get(url, {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                            ? localStorage.getItem("accessToken")
                            : null,
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            return response;
            break;
        case "GET_BY_ID":
            response = (id) =>
                axios.get(url + id, {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                            ? localStorage.getItem("accessToken")
                            : null,
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            return response;
            break;
        case "POST":
            response = (data) => {
                return axios.post(url, data, {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                            ? localStorage.getItem("accessToken")
                            : null,
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            };
            return response;
            break;
        case "PUT":
            response = (data) =>
                axios.put(url, data, {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                            ? localStorage.getItem("accessToken")
                            : null,
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            return response;
            break;
        case "DELETE":
            response = (id) =>
                axios.delete(url + id, {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                            ? localStorage.getItem("accessToken")
                            : null,
                        "Access-Control-Allow-Origin": "*",
                    },
                });
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
