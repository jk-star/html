// =============================
// Global Variables
// =============================

const chapterList = document.getElementById("chapter-list");
const content = document.getElementById("content");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentChapterIndex = 0;

// =============================
// Sidebar Generate
// =============================

function createSidebar() {

    chapterList.innerHTML = "";

    chapters.forEach((chapter, index) => {

        const li = document.createElement("li");

        const link = document.createElement("a");

        link.href = "#";

        link.textContent = `Chapter ${chapter.id} - ${chapter.title}`;

        link.dataset.index = index;

        link.addEventListener("click", (e) => {

            e.preventDefault();

            currentChapterIndex = index;

            loadChapter();
            updateURL();

        });

        li.appendChild(link);

        chapterList.appendChild(li);

    });

}

// =============================
// Load Chapter
// =============================

async function loadChapter() {

    try {

        const chapter = chapters[currentChapterIndex];

        const response = await fetch(`chapters/${chapter.file}`);

        if (!response.ok) {

            throw new Error("Chapter Not Found");

        }

        const markdown = await response.text();

        content.innerHTML = marked.parse(markdown);

        setActiveChapter();

        updateNavigation();

    }

    catch (error) {

        content.innerHTML = `<h2>${error.message}</h2>`;

        console.error(error);

    }

}


function updateURL() {
    const chapter = chapters[currentChapterIndex];

    const url = new URL(window.location);

    url.searchParams.set("chapter", chapter.id);

    window.history.replaceState({}, "", url);
}

// =============================
// Active Sidebar
// =============================

function setActiveChapter() {

    const links = document.querySelectorAll("#chapter-list a");

    links.forEach((link) => {

        link.classList.remove("active");

    });

    links[currentChapterIndex].classList.add("active");

}

// =============================
// Navigation Buttons
// =============================

function updateNavigation() {

    // Previous

    if (currentChapterIndex === 0) {

        prevBtn.style.display = "none";

    } else {

        prevBtn.style.display = "inline-block";

    }

    // Next

    if (currentChapterIndex === chapters.length - 1) {

        nextBtn.style.display = "none";

    } else {

        nextBtn.style.display = "inline-block";

    }

}

// =============================
// Previous Button
// =============================

prevBtn.addEventListener("click", () => {

    if (currentChapterIndex > 0) {

        currentChapterIndex--;

        loadChapter();
        updateURL();

    }

});

// =============================
// Next Button
// =============================

nextBtn.addEventListener("click", () => {

    if (currentChapterIndex < chapters.length - 1) {

        currentChapterIndex++;

        loadChapter();
        updateURL();

    }

});



// =============================
// Init
// =============================

function init() {

    const params = new URLSearchParams(window.location.search);

    const chapterId = parseInt(params.get("chapter"));

    if (chapterId) {

        const index = chapters.findIndex(ch => ch.id === chapterId);

        if (index !== -1) {
            currentChapterIndex = index;
        }

    }

    createSidebar();

    loadChapter();

}

init();