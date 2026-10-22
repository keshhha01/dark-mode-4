const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const title = document.getElementById("title");
const description = document.getElementById("description");
const status = document.getElementById("status");

// Применяем выбранную тему
function setTheme(isDark) {
    document.body.classList.toggle("dark", isDark);

    if (isDark) {
        themeIcon.textContent = "🌙";
        title.textContent = "Добрый вечер!";
        description.textContent =
            "Время расслабиться и насладиться уютной атмосферой.";
        themeButton.textContent = "☀️ Включить светлую тему";
        status.textContent = "Сейчас включена тёмная тема";
    } else {
        themeIcon.textContent = "☀️";
        title.textContent = "Доброе утро!";
        description.textContent =
            "Добро пожаловать в мой уютный мир. Здесь ты можешь менять настроение одним нажатием.";
        themeButton.textContent = "🌙 Включить тёмную тему";
        status.textContent = "Сейчас включена светлая тема";
    }
}

// Загружаем сохранённую тему
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");

// Переключаем тему по нажатию
themeButton.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark");

    setTheme(isDark);

    // Сохраняем выбор в браузере
    localStorage.setItem("theme", isDark ? "dark" : "light");
});