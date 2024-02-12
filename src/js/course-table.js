"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";
let coursesCodeEl = document.getElementById("course-code");
let coursesNameEl = document.getElementById("course-name");
let coursesProgressionEl = document.getElementById("course-progression");
coursesCodeEl.addEventListener("click", sortCourseByCode);
coursesNameEl.addEventListener("click", sortCourseByName);
coursesProgressionEl.addEventListener("click", sortProgression);

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
    
// function that displays courses

function displayCourses(courses) {
    const coursesEl = document.getElementById("courses-list");
    coursesEl.innerHTML = ""; 

    courses.forEach((course) => {
        coursesEl.innerHTML += `
            <tr>
                <td>${course.code}</td>
                <td>${course.coursename}</td>
                <td>${course.progression}</td>
            </tr>
            `;
    });
}

// function that sorts courses by code

async function sortCourseByCode() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        courses.sort((a, b) =>
        (a.code > b.code) ? 1 : -1);

        displayCourses(courses);
    } catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel. Försök igen senare!</p>";
    } 
}

// function that sorts courses by name

async function sortCourseByName() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        courses.sort((a, b) =>
        (a.coursename > b.coursename) ? 1 : -1);

        displayCourses(courses);
    } catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel. Försök igen senare!</p>";
    } 
}

// function that sorts courses by progression

async function sortProgression() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        courses.sort((a, b) =>
        (a.progression > b.progression) ? 1 : -1);

        displayCourses(courses);
    } catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel. Försök igen senare!</p>";
    } 
}