// bai tap kinh dien khi lam vs reduce
//Flat- "làm phẳng" mảng từ Depth array - "Mảng sâu"

var depthArray = [1,2,[3,4],5,[6,7,8,9]];

var flatArray = depthArray.reduce(function(bienluutru,gtri){
    return bienluutru.concat(gtri)
 },[])
    
// muốn trả về dạng mảng thì cho gtri khởi tạo là 1 mảng rỗng
console.log(flatArray)
// dung html de hien thi nd website cho nguoi dung


// lay vd: tao 1 mảng gồm nhiều object mà trong object có element khởi tạo mảng hãy trả về toàn bộ giá trị element đó trong 1 mảng duy nhất
/*  include method
là phương thức đã có sẵn trong arr và string còn các gtri khác như number, date,... trả về undefined
 để ktra console.log(Array.prototype.includes)

*/

var title = "Hoc JS tại F8"
console.log(title.includes("Hoc",1))// neu kh co gtri bat dau chay thi mac dinh la vtri 0
// ket qua là False tại vì tại vt1 la chũ o và nó sẽ ktra từ o đến cuối chuỗi kh có chữ học nên trả về false

var Array = ["javascript", "html", 'css']
console.log(Array.includes("html",-1))// neu so truyen voa la am thi no sẽ lay độ dài mảng + gtri số truyền vào
// vd trên = 3+ -1 là tai vtri 2 bắt đầu




/* Math Object

Math.PI => trả về gtri pi = 3,14.......
Math.round()
Math.abs() => trị tuyệt đối
Math.ceil()// làm tròn trên
Math.floor() làm tròn dưới
Math.random() trả về dạy số thập phân nhỏ hơn 1
Math.min()
Math.max()
vd1 tạo ra số ngẫu nhiên làm tròn từ 0-10
*/
console.log(Math.floor(Math.random()*10))// là từ 0 đến 9


var radom = (Math.floor(Math.random()*5))
var bonus = [
    "10 coins",
    "20 coins",
    "30 coins",
    "40 coins",
    "50 coins",
]
console.log(bonus[radom])
console.log(Math.min(-1, 13,634,32,-332,11))// kq la -332 max la 634


