const btnTinh=document.getElementById("btnTinh");
btnTinh.onclick = function(){
    const chieuDai=document.getElementById("chieuDai").value*1;
    const chieuRong=document.getElementById("chieuRong").value*1;
    const pHCN =document.getElementById("pHCN");
    let dienTich =chieuDai*chieuRong;
    let chuVi= (chieuDai+chieuRong)*2;
    let kqHCN= `Kết quả của Diện tích: ${dienTich} và Chu vi: ${chuVi}`;
    pHCN.innerHTML =  kqHCN;
}