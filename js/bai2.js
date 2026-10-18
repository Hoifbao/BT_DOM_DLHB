const btnTinhTB=document.getElementById("btnTinhTB");
btnTinhTB.onclick = function(){
    const number1=document.getElementById("number1").value*1;
    const number2=document.getElementById("number2").value*1;
    const number3=document.getElementById("number3").value*1;
    const number4=document.getElementById("number4").value*1;
    const number5=document.getElementById("number5").value*1;
    const pTB=document.getElementById("pTB");
    let trungBinh = (number1 +number2 +number3+number4+number5)/5;
    let ketQuaTB = ` Kết quả của trung bình các số là: ${trungBinh}`;
    pTB.innerHTML = ketQuaTB;
}