
function bdkinh(){
    let d = +document.getElementById("d").value;
    let r =d/2 ;
    let S = r*r*3.14;
    document.getElementById("result").innerHTML="Diện tích hình tròn = "+S + " (cm)";
}
function bbkinh() {
    let r = +document.getElementById("r").value;
    let S = r * r * 3.14;
    document.getElementById("result1").innerHTML = "Diện tích hình tròn = " + S + " (cm)";
}
function bcvi() {
    let C = +document.getElementById("C").value;
    let r = C / 2  / 3.14;
    let S = r * r * 3.14;
    document.getElementById("result2").innerHTML = "Diện tích hình tròn = " + S + " (cm)";
}

