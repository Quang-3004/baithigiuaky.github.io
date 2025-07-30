// Khi trang tải xong
window.onload = function() {
  alert("👋 Xin chào! Chào mừng bạn đến với trang của Đăng Quang!");
};

// Làm hiện nút 'Về đầu trang' khi cuộn xuống
window.onscroll = function() {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Cuộn mượt lên đầu khi nhấn nút 'Về đầu trang'
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("back-to-top");
  if (button) {
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// Làm hiệu ứng mờ dần các thẻ khi cuộn tới
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.animated').forEach((el) => observer.observe(el));
