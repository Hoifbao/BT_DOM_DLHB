const btnTinhLuong=document.getElementById("btnTinhLuong");
btnTinhLuong.onclick=function(){
    const luongMotNgay=document.getElementById("luongMotNgay").value*1;
    const soNgayLamViec=document.getElementById("soNgayLamViec").value*1;
    const pThongBao=document.getElementById("pThongBao");
    let luong = luongMotNgay*soNgayLamViec;
    let formater = new Intl.NumberFormat("vi-VN",{style: "currency", currency: "VND",});
    let ketQua="Tổng lương tháng của nhân viên là: "+ formater.format(luong);
    pThongBao.innerHTML = ketQua;
}