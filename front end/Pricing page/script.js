const searchButton = document.querySelector('.search-button');
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', () => {
    searchBar.focus(); // Focus vào thanh tìm kiếm để nó mở rộng
});

// ... (các phần JavaScript khác) ...

document.addEventListener("DOMContentLoaded", () => {
    const signupButtons = document.querySelectorAll('.signup-button');
    const paymentPopup = document.getElementById('paymentPopup');
    const closeButton = document.querySelector('.close-button');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const atmAmount = document.getElementById("atmAmount");
    const momoAmount = document.getElementById("momoAmount");
    const visaAmount = document.getElementById("visaAmount");

    // Hàm lấy giá của gói cước
    function getPlanPrice(plan) {
        switch (plan) {
            case 'free': return '0 VND';
            case 'basic': return '200.000VND';
            case 'standard': return '250.000VND';
            case 'premium': return '350.000VND';
            default: return 'Unknown';
        }
    }

    // Hàm mở popup và hiển thị giá
    function openPopup(plan) {
        const price = getPlanPrice(plan);
        atmAmount.textContent = "Need to pay:  " + price;
        momoAmount.textContent = "Need to pay:  " + price;
        visaAmount.textContent = price;
        paymentPopup.style.display = 'block';
    }

    // Hàm đóng popup
    function closePopup() {
        paymentPopup.style.display = 'none';
        tabButtons.forEach(button => button.classList.remove('active'));
        tabButtons[0].classList.add('active');
        tabContents.forEach(tab => tab.style.display = 'none');
        tabContents[0].style.display = 'block';
    }

    // Hàm chuyển tab thanh toán
    function openTab(tabName) {
        tabContents.forEach(tab => {
            tab.style.display = tab.id === tabName ? "block" : "none";
        });
        tabButtons.forEach(button => {
            button.classList.remove("active");
        });
        document.getElementById(tabName + "-button").classList.add("active");
    }

    // Gắn sự kiện click cho các nút "UPGRADE PLAN"
    signupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const plan = button.closest('.plan').classList[1];
            openPopup(plan);
        });
    });

    // Gắn sự kiện click cho nút đóng popup
    closeButton.addEventListener('click', closePopup);

    // Gắn sự kiện click cho các nút tab
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            openTab(button.id.replace('-button', ''));
        });
    });

    // Mở tab đầu tiên khi popup được mở
    openTab('atm');
});

