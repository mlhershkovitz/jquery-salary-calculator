$(document).ready(readyNow);

//array to push the new objects into
let employeeArray = [];

//employee class to help create new objects easily
let Employee = {
    constructor (firstName, lastName, idNumber, jobTitle, annualSalary){
        this.firstName = firstName,
        this.lastName = lastName,
        this.idNumber = idNumber,
        this.jobTitle = jobTitle,
        this.annualSalary = annualSalary
    }
}; //end employee class


function readyNow() {
    $('#newEmployeeButton').on('click', addEmployee);
}; //end ready now

//create a new employee when add is clicked
function addEmployee() {
    console.log('button clicked');
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let idNumberIn = $('#idNumberIn').val();
    let jobTitleIn = $('#jobTitleIn').val();
    let annualSalaryIn = $('#annualSalaryIn').val();
    let newEmployee = new Employee (firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn);
    employeeArray.push(newEmployee);

    //empty inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}; //end add employee 

//append new employees to dom when add clicked
function appendEmployees() {
    
}; //end append employees function

//monthly total cost function
