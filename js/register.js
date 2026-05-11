const form =
    document.getElementById("registerForm");

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

    // ===== LẤY DỮ LIỆU =====
    const fullName =
        inputs[0].value.trim();

    const email =
        inputs[1].value.trim();

    const password =
        inputs[2].value.trim();

    const confirmPassword =
        inputs[3].value.trim();

    // ===== CHECK PASSWORD =====
    if (password !== confirmPassword) {

        isValid = false;

        showError(
            inputs[3],
            "Mật khẩu xác nhận không khớp"
        );
    }

    if (!isValid) return;

    // ===== TẠO USER =====
    const user = {

        fullName: fullName,
        email: email,
        password: password
    };

    // ===== LƯU USER =====
    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    // ===== THÔNG BÁO =====
    successMessage.style.display = "block";

    form.reset();

    setTimeout(function () {

        window.location.href =
            "login.html";

    }, 1500);

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