import axios from "axios";










const apiKey=`${process.env.REACT_APP_API_URL}`



export const executeAPI=(httpMethod, basePath)=>

{
    const axiosConfig = {
        headers: {
            
            'Authorization':localStorage.getItem("accessToken")?localStorage.getItem("accessToken"):null,
            "Access-Control-Allow-Origin": "*",
            
        }
      };
        let response = null
        let url=apiKey+basePath
           switch (httpMethod)
           {
               case "GET":
                   response=axios.get(url)
                   return response
                   break

                  
               case "POST":
                   response=(data)=>axios.post(url,data,axiosConfig)
                   
                   return response
                   break
                   

               default:
                  console.log("None");
                  break
                   
           }

          
       }