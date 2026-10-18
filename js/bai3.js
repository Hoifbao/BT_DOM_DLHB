const btnDoiTien =document.getElementById("btnDoiTien");
btnDoiTien.onclick=function(){
    const tienUSD=document.getElementById("tienUSD").value*1;
    const pDoiTien=document.getElementById("pDoiTien");
    let tien = tienUSD * 23500;
    const formater = new Intl.NumberFormat("vi-VN");
    let ketQua = `${formater.format(tien)} VND`;
    pDoiTien.innerHTML= ketQua;
}