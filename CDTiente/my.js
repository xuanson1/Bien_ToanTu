
function ChuyenDoi() {
    let Amount = document.getElementById("amount").value;
    let fromCu = document.getElementById("from").value;
    let toCu = document.getElementById("to").value;
    let result;

    if (fromCu == "USD" && toCu == "VietNamDong") {
        result = "result: " + (Amount * 23000) + " Đ";
    }
    else if (fromCu == "VietNamDong" && toCu == "USD"){
        result = "result: "+ (Amount / 23000) + " $";
    }
    else if (fromCu == "VND") {
        result = "result: " + Amount + " Đ"
    } else {
        result = "result: " + Amount + " $"
    }
    document.getElementById("result").innerHTML ="Thành tiền = " + result;
}
