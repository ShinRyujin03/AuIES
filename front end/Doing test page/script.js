const searchButton = document.querySelector('.search-button');
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', () => {
    searchBar.focus(); // Focus vào thanh tìm kiếm để nó mở rộng
});

document.addEventListener("DOMContentLoaded", () => {
    const timerButton = document.getElementById("timerButton");
    let timerInterval;

    timerButton.addEventListener("click", () => {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        startTimer(40 * 60, timerButton); // 40 minutes in seconds
    });

    function startTimer(duration, display) {
        timerButton.disabled = true;
        let timer = duration, minutes, seconds;
        timerInterval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = `Time: ${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(timerInterval);
                display.textContent = "Time's up!";
            }
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // ... (các phần khác của mã) ...

    const essayInput = document.querySelector('textarea');
    const wordCountDisplay = document.querySelector('.word-count');

    essayInput.addEventListener('input', updateWordCount);

    function updateWordCount() {
        const text = essayInput.value.trim(); // Loại bỏ khoảng trắng thừa ở đầu và cuối
        const paragraphs = text.split(/\n+/).filter(p => p.length > 0); // Tách đoạn và loại bỏ đoạn trống
        const wordCount = text.split(/\s+/).filter(w => w.length > 0).length; // Tách từ và loại bỏ từ trống

        wordCountDisplay.textContent = `${paragraphs.length} paragraphs, ${wordCount} words`;
    }

    // ... (các phần khác của mã) ...
});

document.addEventListener("DOMContentLoaded", () => {
    // ... (các phần khác của mã) ...

    const fileInput = document.getElementById('fileInput');
    const essayTextarea = document.querySelector('textarea');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                essayTextarea.value = event.target.result;
                updateWordCount(); // Gọi hàm updateWordCount để cập nhật số từ và số đoạn
            };

            reader.onerror = (error) => {
                console.error("Error reading file:", error);
                alert("Có lỗi xảy ra khi đọc file.");
            };

            reader.readAsText(file);
        }
    });

    // ... (hàm updateWordCount và các phần khác của mã) ...
});


