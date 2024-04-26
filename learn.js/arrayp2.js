var courses =[
    {
        id:1,
        name: "Js",
        coin : 250
    },
    {
        id:2,
        name: "HTML,css",
        coin : 0
    },
    {
        id: 3,
        name: "Ruby",
        coin : 70
    },
    {
        id:4,
        name: "PHP",
        coin : 400
    },
    {
        id:5,
        name: "React JS",
        coin : 0
    }
]
// forEach dung de duyet qua tung phan tu cua mang va se ktra dk trong ngoac
courses.forEach(function(course,index){
    console.log(index,course)
})



// dung every de ktra cac ptu trong mang co thoa man dk kh neu tat ca tm thi true nguoc lai la false
var isFree = courses.every(function(course,index){
    console.log(index);
    return course.coin === 0;
})// kq false tu  index =1
console.log(isFree)
//some thi nguoc lai voi every va cau truc van same every






var course = courses.find(function(course,index){
    console.log(index);
    return course.name === "Ruby"
    })
    console.log(course)
    // tra ve ptu dau tien ma no tim thay 
    // neu khong tuim thay tra ve undefined


// con filter se tra ve tat ca cac ptu no tim thay(no tim kiem trong 1 list)




/* muon thay doi chinh sua element cua array
//co slg ptu bang dung so ptu goc, thuc hien vong lap, moi khi lap no lai call lai 1 funtion
// nen phai truyen vao trong map va cx boi vi map la 1 phuong thuc phai truyen vao 1 ham*/


var newCourses = courses.map(function(){
    return {
        id : courses.id,
        name : `Khoa hoc: ${course.name}`,
        coin : course.coin,
        coinText:` Gia Khoa Hoc:${course.coin}`,
        oringinArray : courses
    }
})
console.log(newCourses)//lq la 7 tu la undefined
// muon hien thi dang html
 // tu function ben tren
 return `<h2>${course.name}</h2>`
 // muon bien thanh string
 console.log(newCourses.join(""))// kq la <h2> Js</h2>.......






 // reduce khi muon nhan ve 1 gtri duy nhat vd nhu tinh tong so coin cua mang
 // cach 1


 var totalCoin = 0;
 for(var course of courses){
    totalCoin += course.coin;
 }
 console.log(totalCoin)


 // nhung cac cach nhu forEach ben tren sex giup cho code ngan va gon hon don gian de hieu


 // dung reduce can truyen vao 2 doi so
 var i = 0;

 function coinHandle(accumulator, currentValue){
    
    i++
    var total = accumulator + currentValue.coin
    console.table({
        "luot chay": i,
        "bien tich tru": accumulator,
        "gia khoa hoc":currentValue.coin,
        "tong tien": total
    })
    return total;
 }
 var totalCoin = courses.reduce(coinHandle , 0)// gia tri khoi tao la 0 hay la bien luu tru gia tri accumulator

 console.log(totalCoin)


 //c3
 var totalCoin = courses.reduce((a,b)=> a +b.coin,0)



 // reduce p2
 var totalCoin = courses.reduce(function(total, course){
    return total + course.coin;
 },0)/* khi khong co gtri khoi tao mac dinh lay ptu dau tien cua mang lam gtri khoi tao có id = 1 thì current value sẽ là id t2 trong lần đàu tiên và biến lưu trữ =2 tại id = 3
 va gtri coin la 1 bien object 
 ma ta muon dua ve dang so thi bien khoi tao phai co kieu du lieu la so*/
 /* khong the bo đc vi coin nam trong object mà object nam trong arr nen can phai co gtri khoi tao mac dịnh
 de kh xay ra trương họp ben tren
 */

 console.log(totalCoin)



 // cach kh can truyen gia tri khoi tao trong truong hop cac gtri trong mang la kieu dl so
 var arr = [ 100, 200,300,450,190]
 var totals = arr.reduce(function(total,number){
    return total + number;
 })
 console.log(totals)







