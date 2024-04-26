
// callback
// b1 la ham
// b2  truyền qua đối số
// b3 được gọi lại trong hàm nhận đối số
 
function myFunction(param){
    if ( typeof param === "function"){
        param("hoc lap trinh")// same param() truyen vao 1 doi so
    }
}
function callBack(value){
    console.log("Value: ", value)
}
myFunction(callBack)