
// import Server from './../../../Server/App.js';

export default () => {
    fetch('http://localhost:5000/')
    .then((response) => {
        return response.json();//הופך מכתב ג'ייסון לכתב רגיל
    })
    .then((jsonObject) => {
        console.log(jsonObject);//גורם לכתיבת הבדיחה בכתב רגיל ובעמוד חדש
    });
};
const myNumber = 42;
console.log(myNumber);
// module.exports = myNumber;