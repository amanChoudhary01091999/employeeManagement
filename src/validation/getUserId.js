function GetUserId(url) {
    let user = url.split("/").pop();
    //let id = user.split("=").pop();
    return user;
}

export default GetUserId;
