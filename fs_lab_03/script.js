let students = [];

function addStudent() {
    let input = document.getElementById("studentName");
    let name = input.value;

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    students.push(name);

    input.value = "";

    displayStudents();
}

function displayStudents() {
    let list = document.getElementById("studentList");

    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        list.innerHTML += `
            <li>
                ${students[i]}
                <button onclick="deleteStudent(${i})">Delete</button>
            </li>
        `;
    }

    document.getElementById("count").textContent = students.length;
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
