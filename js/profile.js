document.addEventListener("DOMContentLoaded", function () {

    // ===== LẤY USER LOGIN =====
    const currentUser =
        JSON.parse(
            localStorage.getItem("currentUser")
        );

    // chưa login
    if (!currentUser) {

        window.location.href =
            "login.html";

        return;
    }

    // ===== HIỆN THÔNG TIN =====

    // tên bên trái
    document.getElementById("profileName")
        .innerText =
        currentUser.fullName;

    // họ tên
    document.getElementById("fullName")
        .innerText =
        currentUser.fullName;

    // email
    document.getElementById("email")
        .innerText =
        currentUser.email;

    // ===== LOGOUT =====
    document.getElementById("logoutBtn")
        .addEventListener("click", function () {

            localStorage.removeItem("currentUser");

            localStorage.removeItem("isLogin");

            window.location.href =
                "login.html";
        });

});