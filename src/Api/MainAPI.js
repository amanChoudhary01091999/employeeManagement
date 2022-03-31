import axios from "axios";
import { useState } from "react";









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
           switch (httpMethod)
           {
               case "GET":
                   response=axios.get(apiKey+basePath)
                   return response
                   break

                  
               case "POST":
                   response=(data)=>axios.post(apiKey+basePath,data,axiosConfig)
                   
                   return response
                   break
                   

               default:
                  console.log("None");
                  break
                   
           }

          
       }