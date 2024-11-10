// Xử lý chuyển đổi giữa đăng nhập và đăng ký
const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Chuyển đổi giữa đăng nhập và đăng ký
registerLink.addEventListener('click', function() {
    logregBox.classList.add('active'); // Hiển thị form đăng ký
});

loginLink.addEventListener('click', function() {
    logregBox.classList.remove('active'); // Ẩn form đăng ký và hiển thị form đăng nhập
});

// Xử lý chuyển đổi giữa các tab
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link'); // Lấy tất cả các tab
    const contents = document.querySelectorAll('.tab-content'); // Lấy tất cả các phần nội dung

    // Hàm để ẩn tất cả các nội dung tab
    function hideAllTabs() {
        contents.forEach(content => {
            content.classList.remove('active');
        });
    }

    // Hàm để hiển thị nội dung tab được chọn
    function showTab(tabId) {
        const targetContent = document.getElementById(`${tabId}-content`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }

    // Xử lý sự kiện click cho các tab
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Xóa class active của tất cả các tab
            tabs.forEach(t => t.classList.remove('active'));
            // Thêm class active cho tab đã nhấn
            e.target.classList.add('active');

            // Ẩn tất cả nội dung
            hideAllTabs();

            // Lấy id tab và hiển thị nội dung tương ứng
            const tabId = e.target.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Mặc định hiển thị tab đầu tiên khi trang tải xong
    if (tabs.length > 0) {
        tabs[0].click(); // Mô phỏng việc nhấn vào tab đầu tiên
    }
});
