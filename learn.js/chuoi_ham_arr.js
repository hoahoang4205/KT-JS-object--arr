// template string
var firstName = "hoang";
var lastName = "hoa";
console.log(` Toi la: ${firstName} Thi ${ lastName}`);
console.log("toi la" + firstName + "thi" + lastName);


// neu chuoi qua dai ta cat xong noi chuoi
var fullName = "toi la \'siu Nhan \'";// se cho chu sieu nhan trong ngoac
 

// ham co san ap dung cho string
var hoc = " hoc JS tai UDU ma hocj JS rat hay do";

console.log(hoc.indexOf("JS")); // tra ve vtri dau tien no tim thay neu khong co tra ve -1
console.log(hoc.lastIndexOf("Js"));
console.log(hoc.slice(4,6));// cat string
console.log(hoc.replace("JS","Javascript")); // thay the vtri dau tien
console.log(hoc.replace(/JS/g, "Javascript"));//thay the toan bo
console.log(hoc.toUpperCase());
console.log(hoc.toLowerCase());
console.log(hoc.trim()); // xoa khoang trang o 2 dau
console.log(hoc.split(" "));



