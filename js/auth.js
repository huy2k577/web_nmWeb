// =========================
// HIỂN THỊ TÀI KHOẢN
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const accountArea =
            document.getElementById(
                "accountArea"
            );

        if (!accountArea) return;

        const isLogin =
            localStorage.getItem(
                "isLogin"
            );

        const currentUser =
            JSON.parse(
                localStorage.getItem(
                    "currentUser"
                )
            );

        // ===== ĐÃ ĐĂNG NHẬP =====
       if (isLogin === "true" && currentUser) {

            accountArea.innerHTML = `
            <div class="account-box">
                <a href="profile.html" class="account-link">Tài khoản</a>
                
            </div>
        `;

            document.getElementById("logoutBtn").addEventListener("click", function () {
                localStorage.removeItem("isLogin");
                localStorage.removeItem("currentUser");
                window.location.reload();
            });

        } else {

            accountArea.innerHTML = `
                <a href="login.html" class="btn-login">
                    Đăng nhập
                </a>
            `;
        }

    }
);