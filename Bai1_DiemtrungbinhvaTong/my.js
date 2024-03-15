
function td(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let x = a+b+c;
    let z= x/3;
    document.getElementById("result").innerHTML="Tổng 3 môn = "+x;
    document.getElementById("result1").innerHTML="Điểm trung bình = "+z;
}

