"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

window.onload = init;

// call a fetch function

async function init() {
    try {
        const response = await fetch(url);
        const courses = await response.json();

        displayCourses(courses);
    } catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel. Försök igen senare!</p>";
    }
}
    
// function that displays data

function displayCourses(courses) {
    const coursesEl = document.getElementById("courses-list");

    courses.forEach((course) => {
        coursesEl.innerHTML += `
            <tr>
                <td>${course.code}</td>
                <td>${course.coursename}</td>
            </tr>
            `;
    });
}