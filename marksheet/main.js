function btn1click() {
    var subject1 = document.getElementById("sub1");
    var subject2 = document.getElementById("sub2");
    var subject3 = document.getElementById("sub3");
    var subject4 = document.getElementById("sub4");
    var subject5 = document.getElementById("sub5");
    if (subject1.value == "" || subject2.value == "" || subject3.value == "" || subject4.value == "" || subject5.value == "") {
        alert("Please insert the subject marks........")
    }
    else {
        var s1 = parseInt(sub1.value);
        var s2 = parseInt(sub2.value);
        var s3 = parseInt(sub3.value);
        var s4 = parseInt(sub4.value);
        var s5 = parseInt(sub5.value);
        var total = s1 + s2 + s3 + s4 + s5;
        lbltotal.innerHTML = total;

        var pr = total / 5;
        lblpr.innerHTML = pr;

        var grade = 0;
        if (parent(s1) < 35 || parent(s2) < 35 || parent(s3) < 35 || parent(s4) < 35 || parent(s5) < 35) {
                lblpr.innerHTML="0";
                lblgrade.innerHTML = "Sorry You are fail in some Subject";
        }
        else {
            if (pr <= 100 && pr >= 75) {
                lblgrade.innerHTML = "A";
            }
            else if (pr <= 74 && pr >= 60) {
                lblgrade.innerHTML = "B";
            }
            else if (pr <= 59 && pr >= 50) {
                lblgrade.innerHTML = "c";
            }
            else if (pr <= 49 && pr >= 35) {
                lblgrade.innerHTML = "D";
            }
            else {
                lblgrade.innerHTML = "Sorry You are fail";
            }

        }

    }

}
