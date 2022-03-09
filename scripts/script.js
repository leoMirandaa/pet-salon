const student = {
  firstName: "Brandom",
  lastName: "Britt",
  age: 99,
  email: "brandon@gmail.com",
  isActive: true,
  fullName: function () {
    return this.firstName + " " + this.lastName
  }
}

console.log(student.fullName());

function displayStudent() {
  //display student's information on the HTML
  // document.getElementById("student-paragraph").innerHTML =
  //   `First name: ${student.firstName} <br>
  //     Last name: ${student.lastName} <br>
  //     Age: ${student.age} <br>
  //     Email: ${student.email} <br>
  //     isActive: ${student.isActive} <br>
  //     Name & Last name: ${student.fullName()}
  //   `

  document.getElementById("student-name").innerHTML = `<b>First name: </b>${student.firstName}`
  document.getElementById("student-lastName").innerHTML = `<b>Last name: </b>${student.lastName}`
  document.getElementById("student-age").innerHTML = `<b>Age: </b>${student.age}`
  document.getElementById("student-email").innerHTML = `<b>First email: </b>${student.email}`
  document.getElementById("student-isActive").innerHTML = `<b>Is Active: </b>${student.isActive}`
  document.getElementById("student-fullName").innerHTML = `<b>fullName: </b>${student.fullName()}`
}

displayStudent()