const btnKySo=document.getElementById("btnKySo");
btnKySo.onclick = function(){
    const soN=document.getElementById("soN").value*1;
    const pKySo=document.getElementById("pKySo");
    chuyenChuc = Math.floor(soN/10) ;
    chuyenDonVi = soN%10 ;
    const tongKySo= chuyenChuc +chuyenDonVi;
    let ketQuaTKS = `Kết quả của tổng ký số ${tongKySo}`;
    pKySo.innerHTML= ketQuaTKS;
} 