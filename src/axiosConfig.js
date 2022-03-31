import axios from "axios";

const axiosConfig = {
    headers: {
        'Authorization': localStorage.getItem("accessToken"),
        "Access-Control-Allow-Origin": "*",
        
    }
  };

export default axiosConfig