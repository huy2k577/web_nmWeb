const form =
    document.getElementById("loginForm");

const successMessage =
    document.getElementById("successMessage");

const inputs =
    form.querySelectorAll("input");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    removeErrors();

    let isValid = true;

    // ===== CHECK RỖNG =====
    inputs.forEach(function (input) {

        const label =
            input.parentElement
            .querySelector("label")
            .innerText;

        if (input.value.trim() === "") {

            isValid = false;

            showError(
                input,
                `Vui lòng nhập ${label.toLowerCase()}`
            );
        }
    });

    if (!isValid) return;

    // ===== LẤY DỮ LIỆU =====
    const email =
        inputs[0].value.trim();

    const password =
        inputs[1].value.trim();

    // ===== LẤY USER ĐÃ ĐĂNG KÝ =====
    const savedUser =
        JSON.parse(localStorage.getItem("user"));

    // chưa có tài khoản
    if (!savedUser) {

        alert("Chưa có tài khoản. Vui lòng đăng ký.");

        return;
    }

    // ===== CHECK LOGIN =====
    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        // hiện thông báo
        successMessage.style.display = "block";

        // lưu trạng thái login
        localStorage.setItem(
            "isLogin",
            "true"
        );

        // LƯU FULL OBJECT USER
        localStorage.setItem(
            "currentUser",
            JSON.stringify(savedUser)
        );

        setTimeout(function () {

            window.location.href =
                "index.html";

        }, 1500);

    } else {

        alert("Sai tài khoản hoặc mật khẩu");
    }

});

// ===== HIỆN LỖI =====
function showError(input, message) {

    const error =
        document.createElement("small");

    error.classList.add("error-message");

    error.innerText = message;

    input.parentElement.appendChild(error);

    input.style.borderColor = "red";
}

// ===== XÓA LỖI =====
function removeErrors() {

    const errors =
        document.querySelectorAll(".error-message");

    errors.forEach(function (error) {

        error.remove();
    });

    inputs.forEach(function (input) {

        input.style.borderColor = "#e5e5e5";
    });
}