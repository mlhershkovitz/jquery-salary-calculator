$(document).ready(readyNow);

//array to push the new objects into
let employeeArray = [];

//employee class to help create new objects easily
class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}; //end employee class


function readyNow() {
    $('#newEmployeeButton').on('click', addEmployee);
    $('.employees').on('click', '#deleteButton', deleteEmployee);
}; //end ready now

//create a new employee when add is clicked
function addEmployee() {
    console.log('button clicked');
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let idNumberIn = $('#idNumberIn').val();
    let jobTitleIn = $('#jobTitleIn').val();
    let annualSalaryIn = $('#annualSalaryIn').val();
    let newEmployee = new Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn);
    employeeArray.push(newEmployee);

    //call empty input function
    emptyInput();
    //call function to append
    appendEmployees();
}; //end add employee 

function emptyInput() {
    //empty inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}; //end empty inputs
//append new employees to dom when add clicked
function appendEmployees() {
    let tableInfo = $('.employees');
    tableInfo.empty();

    //loop through array to append all info
    for (let employee of employeeArray) {
        tableInfo.append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.annualSalary}</td>
        <td><button id="deleteButton">Delete</button></td>
        </tr>`);
    }; //end loop
}; //end append employees function

//monthly total cost function

//delete employee function
function deleteEmployee() {
    console.log('delete button clicked');

}