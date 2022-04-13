const encodeImageFileAsURL = (element) => {
    console.log("I Am", element);
    var file = element.target.files[0];
    //var file=element.
    console.log("I Am created", file);
    var reader = new FileReader();
    reader.onloadend = function () {
        console.log("jbjmmbbmbbm ", reader.result);
        return reader.result;
    };
    reader.readAsDataURL(file);
};
// const encodeImageFileAsURL = (file) => {
//     console.log("I Am", file);
//     return new Promise((resolve, reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);

//         fileReader.onload = () => {
//             resolve(fileReader.result);
//         };

//         fileReader.onerror = (error) => {
//             reject(error);
//         };
//     });
// };

export default encodeImageFileAsURL;
