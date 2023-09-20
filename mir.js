document.addEventListener("DOMContentLoaded",function(){



// Function to add a new student to the table
function addStudent() {
     const firstName = document.getElementById("firstName").value;
     const lastName = document.getElementById("lastName").value;
     const rollNum = document.getElementById("rollNum").value;
 
     if (firstName && lastName && rollNum) {
         const studentList = document.getElementById("student-list");
         const newRow = document.createElement("tr");
         newRow.innerHTML = `
             <td>${firstName}</td>
             <td>${lastName}</td>
             <td>${rollNum}</td>
             <td>
                 <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                 <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
             </td>
         `;
 
         studentList.appendChild(newRow);
         clearFields();
     } else {
         alert("Please fill in all fields.");
     }
 }
 
 // Function to clear input fields
 function clearFields() {
     document.getElementById("firstName").value = "";
     document.getElementById("lastName").value = "";
     document.getElementById("rollNum").value = "";
 }
 
 // Event listener for form submission
 const submitButton = document.getElementById("btn");
 submitButton.addEventListener("click", function (event) {
     event.preventDefault();
     addStudent();
 });
 
 
// Event delegation for delete and edit buttons
document.getElementById("student-list").addEventListener("click", function (event) {
     if (event.target.classList.contains("delete")) {
         event.target.parentElement.parentElement.remove();
         alert("Student data deleted.");
     } else if (event.target.classList.contains("edit")) {
         // Get the row that contains the "Edit" button
         const row = event.target.parentElement.parentElement;
         
         // Get the current values of the student from the row
         const currentFirstName = row.children[0].textContent;
         const currentLastName = row.children[1].textContent;
         const currentRollNum = row.children[2].textContent;
         
         // Prompt the user for new values
         const newFirstName = prompt("Enter new first name:", currentFirstName);
         const newLastName = prompt("Enter new last name:", currentLastName);
         const newRollNum = prompt("Enter new roll number:", currentRollNum);
 
         if (newFirstName && newLastName && newRollNum) {
             // Update the row with the new values
             row.children[0].textContent = newFirstName;
             row.children[1].textContent = newLastName;
             row.children[2].textContent = newRollNum;
             alert("Student data updated.");
         } else {
             alert("Please fill in all fields.");
         }
     }
 });
 

 
 
     

    
                    



 
});