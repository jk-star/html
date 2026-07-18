const chapterList = document.getElementById("chapter-list");
const content = document.getElementById("content");

// Sidebar Create
chapters.forEach((chapter) => {

    const li = document.createElement("li");

    const link = document.createElement("a");

    link.textContent = `Chapter ${chapter.id} - ${chapter.title}`;

    link.href = "#";

    link.addEventListener("click", (e) => {

        e.preventDefault();

        loadChapter(chapter);

    });

    li.appendChild(link);

    chapterList.appendChild(li);

});

// Markdown Load
async function loadChapter(chapter) {

    try {

        const response = await fetch(`chapters/${chapter.file}`);

        const markdown = await response.text();

        const html = marked.parse(markdown);

        content.innerHTML = html;

    } catch (error) {

        content.innerHTML = "<h2>Chapter Loading Error</h2>";

        console.error(error);

    }

}

// Default Chapter Load
loadChapter(chapters[0]);