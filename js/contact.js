const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// lấy tất cả input và textarea
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // reset lỗi cũ
    removeErrors();

    // ẩn success cũ
    successMessage.style.display = "none";

    let isValid = true;

    inputs.forEach(function (input) {

        const label =
            input.parentElement.querySelector("label").innerText;

        const value = input.value.trim();

        // kiểm tra rỗng
        if (value === "") {

            showError(input, `Vui lòng nhập ${label.toLowerCase()}`);

            isValid = false;
            return;
        }

        // kiểm tra email
        if (input.type === "email") {

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(value)) {

                showError(input, "Email không đúng định dạng");

                isValid = false;
            }
        }

        // kiểm tra số điện thoại
        if (input.type === "tel") {

            const phoneRegex = /^[0-9]{10}$/;

            if (!phoneRegex.test(value)) {

                showError(input, "Số điện thoại phải đủ 10 số");

                isValid = false;
            }
        }

    });

    // nếu hợp lệ
    if (isValid) {

        successMessage.style.display = "block";

        form.reset();

        setTimeout(function () {
            successMessage.style.display = "none";
        }, 3000);
    }

});


// hiện lỗi
function showError(input, message) {

    const error = document.createElement("small");

    error.classList.add("error-message");

    error.innerText = message;

    input.parentElement.appendChild(error);

    input.style.borderColor = "red";
}


// xóa lỗi cũ
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