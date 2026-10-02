const themeButton = document.getElementById("themeButton");
const progressBar = document.getElementById("reading-progress");

// ============================
// DARK / LIGHT MODE
// ============================

if (localStorage.getItem("theme") === "light") {
document.body.classList.add("light-mode");

if (themeButton) {
    themeButton.textContent = "🌙";
}


}

if (themeButton) {

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeButton.textContent =
        isLight ? "🌙" : "☀️";
});


}

// ============================
// READING PROGRESS
// ============================

window.addEventListener("scroll", function () {

const scrollTop =
    window.scrollY;

const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

const progress =
    (scrollTop / documentHeight) * 100;

if (progressBar) {
    progressBar.style.width =
        progress + "%";
}


});

// ============================
// KEYBOARD NAVIGATION
// ============================

document.addEventListener("keydown", function(event) {

// Tombol Arrow Right → Chapter berikutnya
if (event.key === "ArrowRight") {

    const nextButton =
        document.querySelector(".next-button");

    if (nextButton) {
        nextButton.click();
    }
}


});

// ============================
// FADE IN PARAGRAPH
// ============================

const paragraphs =
document.querySelectorAll(".novel-card p");

const observer =
new IntersectionObserver(
function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


paragraphs.forEach(function(paragraph) {

paragraph.style.opacity = "0";
paragraph.style.transform =
    "translateY(15px)";

paragraph.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

observer.observe(paragraph);


});