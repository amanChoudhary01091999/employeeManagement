// import { Button } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import EPFFormMain from "../EPFForm/EPFFormMain";
// import { gapi } from "gapi-script";

// function Form() {
//     const [state, setState] = useState({
//         name: "",
//         googleAuth: "",
//     });
//     const REACT_APP_GOOGLE_DRIVE_API_KEY =
//         "AIzaSyDdrj2NGuKslgsN7Vwjjv9Ij34dFBHjzxk";
//     const REACT_APP_GOOGLE_DRIVE_CLIENT_ID =
//         "405736218824-hngba78bcl0evq2mkn9atkhoub1sho4d.apps.googleusercontent.com";
//     const DISCOVERY_DOCS = [
//         "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
//     ];
//     const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";
//     // const signin = () => {
//     //     signInFunction();
//     // };
//     // const signup = () => {
//     //     signOutFunction();
//     // };

//     const initClient = () => {
//         try {
//             gapi.client
//                 .init({
//                     apiKey: REACT_APP_GOOGLE_DRIVE_API_KEY,
//                     clientId: REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
//                     scope: SCOPES,
//                     discoveryDocs: DISCOVERY_DOCS,
//                 })
//                 .then(() => {
//                     setState({
//                         googleAuth: gapi.auth2.getAuthInstance(),
//                     });
//                     state.googleAuth.isSignedIn.listen(updateSigninStatus);
//                     document
//                         .getElementById("signin-btn")
//                         .addEventListener("click", signInFunction);
//                     document
//                         .getElementById("signout-btn")
//                         .addEventListener("click", signOutFunction);
//                 });
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const signInFunction = () => {
//         state.googleAuth.signIn();
//         updateSigninStatus();
//     };

//     const signOutFunction = () => {
//         state.googleAuth.signOut();
//         updateSigninStatus();
//     };

//     const updateSigninStatus = () => {
//         setSigninStatus();
//     };

//     const setSigninStatus = async () => {
//         var user = state.googleAuth.currentUser.get();
//         console.log(user);
//         if (user.wc == null) {
//             setState({
//                 name: "",
//             });
//         } else {
//             var isAuthorized = user.hasGrantedScopes(SCOPES);
//             if (isAuthorized) {
//                 setState({
//                     name: user.Ot.Cd,
//                 });
//                 const boundary = "foo_bar_baz";
//                 const delimiter = "\r\n--" + boundary + "\r\n";
//                 const close_delim = "\r\n--" + boundary + "--";
//                 var fileName = "mychat123";
//                 var fileData = "this is a sample data";
//                 var contentType = "text/plain";
//                 var metadata = {
//                     name: fileName,
//                     mimeType: contentType,
//                 };

//                 var multipartRequestBody =
//                     delimiter +
//                     "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
//                     JSON.stringify(metadata) +
//                     delimiter +
//                     "Content-Type: " +
//                     contentType +
//                     "\r\n\r\n" +
//                     fileData +
//                     "\r\n" +
//                     close_delim;

//                 console.log(multipartRequestBody);
//                 var request = gapi.client.request({
//                     path: "https://www.googleapis.com/upload/drive/v3/files",
//                     method: "POST",
//                     params: { uploadType: "multipart" },
//                     headers: {
//                         "Content-Type":
//                             "multipart/related; boundary=" + boundary + "",
//                     },
//                     body: multipartRequestBody,
//                 });
//                 request.execute(function (file) {
//                     console.log(file);
//                 });
//             }
//         }
//     };

//     const handleClientLoad = () => {
//         gapi.load("client:auth2", initClient);
//     };

//     useEffect(() => {
//         var script = document.createElement("script");
//         script.onload = handleClientLoad;
//         script.src = "https://apis.google.com/js/api.js";
//         document.body.appendChild(script);
//     });

//     return (
//         <div>
//             <div>
//                 UserName: <strong>{state.name}</strong>
//             </div>
//             <button id="signin-btn">Sign In</button>
//             <button id="signout-btn">Sign Out</button>
//         </div>
//     );
// }

// export default Form;

// import React, { Component } from "react";

// var SCOPE = "https://www.googleapis.com/auth/drive.file";
// var discoveryUrl = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";

// class Form extends Component {
//     state = {
//         name: "",
//         googleAuth: "",
//     };
//     componentDidMount() {
//         var script = document.createElement("script");
//         script.onload = this.handleClientLoad;
//         script.src = "https://apis.google.com/js/api.js";
//         document.body.appendChild(script);
//     }

//     initClient = () => {
//         try {
//             window.gapi.client
//                 .init({
//                     apiKey: "AIzaSyDdrj2NGuKslgsN7Vwjjv9Ij34dFBHjzxk",
//                     clientId:
//                         "405736218824-hngba78bcl0evq2mkn9atkhoub1sho4d.apps.googleusercontent.com",
//                     scope: SCOPE,
//                     discoveryDocs: [discoveryUrl],
//                 })
//                 .then(() => {
//                     this.setState({
//                         googleAuth: window.gapi.auth2.getAuthInstance(),
//                     });
//                     this.state.googleAuth.isSignedIn.listen(
//                         this.updateSigninStatus
//                     );
//                     document
//                         .getElementById("signin-btn")
//                         .addEventListener("click", this.signInFunction);
//                     document
//                         .getElementById("signout-btn")
//                         .addEventListener("click", this.signOutFunction);
//                 });
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     signInFunction = () => {
//         this.state.googleAuth.signIn();
//         this.updateSigninStatus();
//     };

//     signOutFunction = () => {
//         this.state.googleAuth.signOut();
//         this.updateSigninStatus();
//     };

//     updateSigninStatus = () => {
//         this.setSigninStatus();
//     };

//     setSigninStatus = async () => {
//         var user = this.state.googleAuth.currentUser.get();
//         console.log(user);
//         if (user.wc == null) {
//             this.setState({
//                 name: "",
//             });
//         } else {
//             var isAuthorized = user.hasGrantedScopes(SCOPE);
//             if (isAuthorized) {
//                 this.setState({
//                     name: user.Ot.Cd,
//                 });
//                 const boundary = "foo_bar_baz";
//                 const delimiter = "\r\n--" + boundary + "\r\n";
//                 const close_delim = "\r\n--" + boundary + "--";
//                 var fileName = "mychat123";
//                 var fileData = "this is a sample data";
//                 var contentType = "text/plain";
//                 var metadata = {
//                     name: fileName,
//                     mimeType: contentType,
//                 };

//                 var multipartRequestBody =
//                     delimiter +
//                     "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
//                     JSON.stringify(metadata) +
//                     delimiter +
//                     "Content-Type: " +
//                     contentType +
//                     "\r\n\r\n" +
//                     fileData +
//                     "\r\n" +
//                     close_delim;

//                 console.log(multipartRequestBody);
//                 var request = window.gapi.client.request({
//                     path: "https://www.googleapis.com/upload/drive/v3/files",
//                     method: "POST",
//                     params: { uploadType: "multipart" },
//                     headers: {
//                         "Content-Type":
//                             "multipart/related; boundary=" + boundary + "",
//                     },
//                     body: multipartRequestBody,
//                 });
//                 request.execute(function (file) {
//                     console.log(file);
//                 });
//             }
//         }
//     };

//     handleClientLoad = () => {
//         window.gapi.load("client:auth2", this.initClient);
//     };
//     render() {
//         return (
//             <div className="App">
//                 <div>
//                     UserName: <strong>{this.state.name}</strong>
//                 </div>
//                 <button id="signin-btn">Sign In</button>
//                 <button id="signout-btn">Sign Out</button>
//             </div>
//         );
//     }
// }

// export default Form;

// import { Stack } from "@mui/material";
// import React, { useState } from "react";
// import { executeAPI } from "../../api/MainAPI";

// function Form() {
//     const image = localStorage.getItem("image");

//     const [value, setValue] = useState(image);
//     // function _base64ToArrayBuffer(base64) {
//     //     var binary_string = window.atob(base64);
//     //     var len = binary_string.length;
//     //     var bytes = new Uint8Array(len);
//     //     for (var i = 0; i < len; i++) {
//     //         bytes[i] = binary_string.charCodeAt(i);
//     //     }
//     //     return bytes.buffer;
//     // }
//     const apiRequest = executeAPI("POST_FILE", "/api/users");
//     const handleSubmit = (event) => {
//         localStorage.setItem("image", value);

//         event.preventDefault();
//     };
//     const handleDelete = () => {
//         localStorage.removeItem("image");
//     };

//     const handleChange = (element) => {
//         var file = element.target.files[0];
//         apiRequest(file)
//             .then(({ data }) => console.log(data))
//             .catch((error) => console.log(error));
//         var reader = new FileReader();
//         reader.onloadend = function () {
//             setValue(reader.result);
//             //console.log(reader.result);
//         };
//         reader.readAsDataURL(file);
//         console.log(element.target.files);
//     };
//     return (
//         <div>
//             <Stack
//                 component={"form"}
//                 direction={"column"}
//                 display={"flex"}
//                 alignItems={"center"}
//             >
//                 <input
//                     type="file"
//                     onChange={handleChange}
//                     accept={"image/*"}
//                 ></input>
//                 <button type="submit" onClick={handleSubmit}>
//                     Submit
//                 </button>
//                 <button type="button" onClick={handleDelete}>
//                     Delete
//                 </button>
//                 <img
//                     alt=""
//                     src={value}
//                     style={{
//                         width: "10vw",
//                         height: "10vh",
//                         border: "2px solid #000000",
//                         imageResolution: "100dpi",
//                     }}
//                 ></img>
//             </Stack>
//         </div>
//     );
// }

// export default Form;

const Form = () => {};

export default Form;
