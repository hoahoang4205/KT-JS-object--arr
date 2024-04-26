/* ngay 1 - build in trong fuction*/
alert("Hi, day1 la ngay hom nay");// thog bao tren 1 cua so 
confirm("tin chuan khong a");// them o cancel trong sua so
console.log("hello ha");
console.warn();
console.error();
prompt("nhap du lieu vao:")// hien thi 1 o input nhap gia tri tu ban phim



setTimeout(function () {
    alert("omg");

}, 1000) //minigiay thuc hien 1 lan

setInterval(function () {
    alert("chay lien tuc cu cach khoang thoi gian thi chay tiep")
}, 1000)



/* su khac nhau giua ++a va a-- */
var number = 6
var output = number++ * 2 + number-- * 5;
console.log(output);



/* noi chuoi bang phep cong */
var fName = "hoang";
var lName = "Hoa"
var output2 = fName + " " + lName + "tuoi 18";
console.log(output2);





/* boolean */
var a = 2;
var b = 7;
var isSucceed = a > b;
console.log(isSucceed)
var oc = "";// hoac fales hoac 0 hoac undefined hoac NAN hoac null
console.log(oc)
console.log(typeof isSucceed)//ktra kieu du lieu



/* toan tu logical gom && !+ or !not/ khong tra ve gia tri boolean ma di thuc hien ktra */
var result3 = "A" && "B" && "C";
console.log(result3)//kq la C

var result4 = "A" || "B" || "C";
console.log(result4)//kq la A boi A thoa man luon dk khac cac gtri False khi do A se dc gan cho result



/* toan tu so sanh tra ve gia tri boolean */
var i = 1;
var j = "1";
if (i == j) {
    alert("True")// true boi no so sanh gia tri thay bang nhau
}

if (i === j) {
    alert("True")
} else {
    alert("False")// kq la False vi kq bang nhau nhung ktra kieu du lieu khac nhau
}


// kieu symbol du cau truc giong nhau nhung cho ra kq khac nhau
var id = Symbol("id");
var id2 = Symbol("id");


console.log(id, id2)
