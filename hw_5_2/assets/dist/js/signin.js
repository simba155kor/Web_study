// 비동기 요청 처리를 위한 XMLHttpRequest 객체 선언.
// function login() {

//     var email = $("#inputEmail").val();
//     var password = $("#inputPassword").val();

//     console.log(email);
//     console.log(password);
// }

$(function () {
    $('#btnSignup').click(func1);
    $('#btnLogin').click(func2);
    
   
});
    // $('#btnCancle').click(cancle);

function func1() {
 
    var name1 = $("#inputName").val();
    var email1 = $("#inputEmail").val();
    var password1 = $("#inputPassword1").val();
    var password2 = $("#inputPassword2").val();

    //var checkbox1 = $("#checkbox1").val();

    if (password1 != password2) {
        alert("비번 틀리자나");
    }

    
    
    $.ajax({
        type: 'get',
        url: 'data/userlist.json',
        dataType: 'json',
        success: function (data) {
            
            var tag = 0;

            for (var a = 0; a < data.length; a++) {
                if (data[a].email == email1) {
                    tag = 1;
                    
                }
            }

            if (tag == 1) alert("이미 있는 이메일입니다.");
            else alert("가입 성공하였습니다.");
        }
    });

//    alert(document.getElementById("checkbox1").checked);
 //  if (document.getElementById("checkbox1").checked != "remember-me") tag = 2;

    
}

// function func2() {

//     var email1 = $("#inputEmail").val();
//     var password1 = $("#inputPassword").val();

//     //var checkbox1 = $("#checkbox1").val();

//     var tag = 0;
    
//     $.ajax({
//         type: 'get',
//         url: 'data/userlist.json',
//         dataType: 'json',
//         success: function (data) {
            
//             for (var a = 0; a < data.length; a++) {
//                 if (data[a].email == email1 && data[a].password == password1) {
//                     tag = 1;
//                     break;
//                 }
//             }

//             if (tag == 1) alert("로그인 성공.");
//             else alert("로그인 실패.");
//         }
//     });

// //    alert(document.getElementById("checkbox1").checked);
//  //  if (document.getElementById("checkbox1").checked != "remember-me") tag = 2;

    

// }
