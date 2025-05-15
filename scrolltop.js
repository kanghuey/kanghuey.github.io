//Cheng Kang Huey A23CS0216 Section 10

document.addEventListener("DOMContentLoaded", function () {
    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
