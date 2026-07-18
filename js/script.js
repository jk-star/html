const sidebar = document.getElementById("sidebarMenu");

const title = document.getElementById("chapterTitle");

const content = document.getElementById("chapterContent");

const prev = document.getElementById("prevBtn");

const next = document.getElementById("nextBtn");

let currentIndex = 0;



function createSidebar() {

    sidebar.innerHTML = "";

    chapters.forEach((chapter, index) => {

        const li = document.createElement("li");

        li.className = "list-group-item";

        li.innerText = chapter.title;

        li.onclick = () => {

            currentIndex = index;

            showChapter();

        }

        sidebar.appendChild(li);

    });

}

function showChapter() {

    title.innerText = chapters[currentIndex].title;

    content.innerText = chapters[currentIndex].content;

    const items = document.querySelectorAll(".list-group-item");

    items.forEach(item => item.classList.remove("activeChapter"));

    items[currentIndex].classList.add("activeChapter");

    prev.disabled = currentIndex === 0;

    next.disabled = currentIndex === chapters.length - 1;

}

next.onclick = () => {

    if (currentIndex < chapters.length - 1) {

        currentIndex++;

        showChapter();

    }

}

prev.onclick = () => {

    if (currentIndex > 0) {

        currentIndex--;

        showChapter();

    }

}

createSidebar();

showChapter();