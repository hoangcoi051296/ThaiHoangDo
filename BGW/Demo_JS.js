<!doctype html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Demo JS</title>
</head>
<body>
<h1>Demo Javascript</h1>
<script type="text/javascript">
var x = 10;
x = 3.15;
x = "hello world";
// console.log(x);
var y = [];
y[0] = 1;
y[1] = 3.14;
y[2] = "Hello";
y[3] = [1,2,3,4];
// console.log(y);
var z = 5;
if(z%2==0){
  //console.log(z+" la so chan");
}else {
  // console.log(z+" la so le");
}
for (var i=0;i<z;i++){
  // console.log("i="+i);
}
var j=0;
while (j<z){
  // console.log("tong 2 so: "+tinh_tong(j,z));
  j++;
}
function tinh_tong(a,b) {
  return a+b;
}
function in_ra_tong(a,b) {
  console.log(a+b);
}
//alert("Day la thong bao, cam truy cap khi chua du 18 tuoi");
//confirm("ban da du 18 tuoi?"); // tra ve true - false
// do{
//     var m = prompt("Ban bao nhieu tuoi?");
//     var n = parseInt(m); // parseFloat
// }while (isNaN(n));
// if(n >=18){
//     setTimeout(function () {
//       //  alert("Welcome");
//     },3000);
// }else {
//     alert("Chua du tuoi de vao");
// }
// //parseInt(Math.random() * 100)
// setInterval(function () {
//     var r = parseInt(Math.random()*100);
//     console.log(r);
// },3000);
//console.log(n);
//console.log(m);
// var tongtien = 0;
// var so_lan_choi = 0;
// var so_tien_moi_lan_choi = 10;
// var r = parseInt(Math.random()*100);
// var arr = [];
// arr.push(r);  arr[i] = r;
// var it = setInterval(function () {
//     do{
//         var n = prompt("Nhap so du doan");
//     }while (isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 100);
//     so_tien_moi_lan_choi = prompt("So tien dat cuoc");
//     console.log(r);
//     tongtien+= so_tien_moi_lan_choi;
//     so_lan_choi++;
//     if(n == r){
//         alert("Chuc mung ban da trung giai");
//         console.log("Sau "+so_lan_choi+" lan choi. Ton tong thiet hai: "+ tongtien);
//         console.log("Trung duoc so tien: "+so_tien_moi_lan_choi*70);
//         clearInterval(it);
//     }else{
//         alert("chuc ban may man lan sau");
//     }
//
// },5000);
var ii = setInterval(function () {
  // Khoi tao danh sach cac giai thuong
  var arr = [];
  for (var i=0;i<27;i++){
    arr[i] = parseInt(Math.random()*100);
  }
  // bat dau du doan so:
  do{
    var n = prompt("Nhap so du doan");
  }while (isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 100);
  var so_lan_trung_giai = 0;
  for (var i=0;i<27;i++){
    if(parseInt(n) == arr[i]){
      so_lan_trung_giai++;
    }
  }
  if(so_lan_trung_giai > 0){
    alert("Trung "+so_lan_trung_giai+" nhay");
    //clearInterval(ii);
  }else {
    alert("khong trung giai nao");
  }
},5000);
</script>
</body>
</html>
