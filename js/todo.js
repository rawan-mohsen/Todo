// console.log("Hello external");

// var x = 3,
//   y = 6,
//   z = x + y;

// console.log(z);

// var firstName = prompt("please enter your first name"),
//   lastName = prompt("please enter your last name");
// yourAge = Number(prompt("Enter your age"));

// console.log(
//   "Hello your full name is " + firstName + "" + lastName,
//   "and your age in numbers is" + "" + yourAge * 365
// );

// var username = prompt("Enter your name");

// console.log(username);

// var info = {
//   name: "Ahmed",
//   age: 20,
// };

// console.log(Hello + info.name);

// function firstFunction() {
//     console.log("Hello from the first function");
//   }

//   var secondFunction = function () {
//     console.log("Hello from the second function");
//   };

//   function valueReturn() {
//     return 6;
//   }

//   console.log(valueReturn());

//   function sum(x, y) {
//     return x + y;
//   }
//   function minus(x, y) {
//     return x - y;
//   }
//   function multiply(x, y) {
//     return x * y;
//   }
//   function divide(x, y) {
//     return x / y;
//   }

// var firstNumber = Number(prompt("Please enter your first number"));
// var secondNumber = Number(prompt("Please enter your second number"));

// console.log(sum(firstNumber, secondNumber));
// console.log(minus(firstNumber, secondNumber));
// console.log(multiply(firstNumber, secondNumber));
// console.log(divide(firstNumber, secondNumber));

// var myArray = [
//   "HTML",
//   "CSS",
//   "JS",
//   45,
//   null,
//   undefined,
//   { myName: "Mohamed" },
//   [1, 2, 3, 4],
// ];

// console.log(myArray[6].myName);
// console.log(myArray[7][2]);
// console.log("Your length is" + myArray.length);
// console.log(myArray[0]);
// console.log(myArray.at(-1));

// var x = 2;

// if (x > 5) {
//   console.log("Greater than five");
// } else if (x < 5) {
//   console.log("Lower than five");
// } else {
//   console.log("Equal five");
// }

// var myName= (prompt("Please enter your name"));
// var yearOfBirth = Number(prompt("Please enter your year of birth"));
// var multiply = x

// console.log(myName);
// console.log(2022 - (yearOfBirth))
// console.log((yearOfBirth) x 365);

// var day = Number(prompt("What's today?"));

// switch (day) {
//   case 1:
//     console.log("This is Saturday");
//     break;
//   case 2:
//     console.log("This is Sunday");
//     break;
//   case 3:
//     console.log("This is Monday");
//     break;
//   case 4:
//     console.log("This is Tuesday");
//     break;
//   case 5:
//     console.log("This is Wednesday");
//     break;
//   case 6:
//     console.log("This is Thursday");
//     break;
//   case 7:
//     console.log("This is Friday");
//     break;

//   default:
//     console.log(5);
//     break;
// }

// function getRecArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw "You entered an invalid numbers";
//   } else {
//     console.log(width + height);
//   }
// }

// try {
//   getRecArea(3, "kl");
// } catch (error) {
//   console.warn(error);
// } finally {
//   console.log("Finished");
// }

// var counter = 10;

// while (counter >= 1) {
//   debugger;
//   console.log(counter);
//   counter = counter - 1;
// }

// console.log("+++++++++++++++++++++++++++");

// var courses = ["HTML", "CSS", "JS"];

// for (var buttons = 0; buttons < courses.length; buttons++) {
//   var course = courses[buttons];
//   console.log(course);
// }

// for (let buttons = 65; buttons <= 90; buttons++
//     lower = 97; lower <= 122; lower) {
//   console.log(String.fromCharCode(buttons));
//   console.log(String.fromCharCode(lower));
// }

// console.log("These are small numbers");

// for (let buttons = 97; buttons <= 122; buttons++) {
//   console.log(String.fromCharCode(buttons));
// }

// var timer = new Date().getTime();

// var output = document.getElementById("timer");

// function rawanTime() {
//   var myDate = new Date();
//   myDate.setMinutes(4);
//   var hours = myDate.getHours();
//   var minutes = myDate.getMinutes();
//   var seconds = myDate.getSeconds();

//   if (hours < 10) {
//     hours = "0" + hours;
//   }

//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   output.innerHTML = hours + ":" + minutes + ":" + seconds
// }


// setInterval(rawanTime, 1000)

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));


// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));


// console.log(Math.min(99 , 15, 120, 13));
// console.log(Math.max(9, 100, 2, 120));

// console.log(Math.pow(2,4));

// console.log(Math.random());


// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;


// console.log(parseInt(Math.min(a, b, c, d)));
// console.log(Math.ceil(Math.min(a, b, c, d)));

// console.log(a * Math.max(a, d));

// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.min(c, Math.round(d)));
// console.log(Math.pow(Math.round(d), 1));


// console.log(toString(Math.round(b) / Math.floor(d))); //66.67 b + d
// console.log(Number(Math.round(b) / Math.ceil(d))); //67


// var arr1 = ['Ali', 'Khaled', 'Sherif']

// arr1.push("Ahmed");
// console.log(arr1);
// console.log(arr1);

// var persons = [
//     {name: "Mohamed", gender: "Male"},
//     {name: "Ayat", gender: "female"}
// ];
// function checkGender(person) {
//     return person.gender.toLowerCase() === "male";
// }
// console.log(persons.every(checkGender));
// console.log(persons.filter(checkGender))



// var persons = [];
// var personOne = prompt("Please enter first number");
// var personTwo = prompt("Please enter second number");
// persons.push(personOne, personTwo);
// console.log(persons);
// var checkLength2 = (person) => person.length > 5;
// console.log(persons.every(checkLength2));

// var myChild = document.querySelectorAll(".parent .child")

// console.log(myChild);

// for (let myChild = 0; myChild <= 5; myChild) {
//     const child = array[myChild];

// }

// var myOutput = document.getElementById("output");

// function btnPrimary() {
//     myOutput.innerText = "<h2>Hello from JS</h2>";
// }

// var autoSizingInput = document.getElementById("task_input"),
//     taskBtn = document.getElementsByTagName("button")[1],
//     taskOutput = document.querySelector("ol");

// taskBtn.btnPrimary = function () {
//     taskOutput.innerHTML += `<li>${autoSizingInput.value}</li>`;
//     autoSizingInput.value = "";
//     autoSizingInput.focus();
// };

// var myOutput = document.getElementById("output"),
//     addBtn = document.getElementById("addBtn")

// var counter = 1;
// addBtn.onclick = function () {
//     var myJsDivision = document.createElement("div"),
//         myText = document.createTextNode("I am from JS"),
//         myComment = document.createComment("I am comment");

//     myJsDivision.append(myText, myComment, counter);
//     myOutput.appendChild(myJsDivision);

//     counter++;
// }
var task_input = document.querySelector("#taskInput"),
    task_Btn = document.querySelector("#taskBtn"),
    tasks = document.querySelector("#tasks"),
    tasks_counter = document.getElementById("tasksCounter");
finished_tasks_counter = document.getElementById("finishedTasksCounter")



task_Btn.onclick = function () {
    if (task_input.value !== "") {
        // var task = document.createElement("li")
        // task.className = "list-group-item";
        // task.append(task_input.value);
        // tasks.appendChild(task)
        addNewTask();
        focusOnInput();
        finishedTask();
        deleteTask();
        counter();
    } else {
        alert("Your thought is empty");
    }
};

function addNewTask() {
    tasks.innerHTML += `
    <li class="list-group-item list-group-item-action list-group-item-light  d-flex justify-content-between">
    ${task_input.value} 
    <i class="fa-regular fa-trash-can"></i>
        </li>`;
}

function focusOnInput() {
    task_input.value = "";
    task_input.focus();
}

function counter() {
    tasks_counter.innerHTML = tasks.children.length;
}

function finishedTask() {
    for (let index = 0; index < tasks.children.length; index++) {
        const task = tasks.children[index];
        task.onclick = function () {
            task.classList.toggle("list-group-item-dark");
            task.classList.toggle("list-group-item-light");
            finishedCounter();
        };
    }
}

function deleteTask() {
    var delete_icons = document.getElementsByClassName("fa-trash-can");

    for (let index = 0; index < delete_icons.length; index++) {
        const delete_icon = delete_icons[index];
        delete_icon.onclick = function () {
            delete_icon.parentElement.remove();
            counter();
        }
    }

}

function finishedCounter() {
    var finished_tasks = document.getElementsByClassName("list-group-item-dark");

    finished_tasks_counter.innerHTML = finished_tasks.length;
}