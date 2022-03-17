//create an obj literal for the pet salon
const petSalon = {
  name: "The Fashion Pet",
  address: {
    street: "Ave University",
    number: 262,
    zip: "22115",
    city: "Tijuana",
    state: "B.C."
  },
  workingHours: {
    open: "9:00 am",
    close: "5:00pm"
  },
  pets: []
}

//display the pet salon info in the footer section of html(name, address, working hours)
function displaySalonInfo() {
  document.getElementById("footer-info").innerHTML =
    `
  <b>${petSalon.name}</b> <br>
  Address: ${petSalon.address.street} ${petSalon.address.number} ${petSalon.address.zip} ${petSalon.address.city} ${petSalon.address.state} ${petSalon.pets[i].ownerName}<br>
  Opens: ${petSalon.workingHours.open} - ${petSalon.workingHours.close}
  `
}

// displaySalonInfo();
function displayPetsInformation() {

  for (let i = 0; i < petSalon.pets.length; i++) {
    document.getElementById("petNames").innerHTML +=
      `
    ${i + 1} - ${petSalon.pets[i].name} ${petSalon.pets[i].age} ${petSalon.pets[i].gender} ${petSalon.pets[i].breed} ${petSalon.pets[i].service} ${petSalon.pets[i].ownerName} ${petSalon.pets[i].contactPhone} <br/>
    `
  }
}

displayPetsInformation()
function displayDogLength() {
  alert("Pets registered: " + petSalon.pets.length)
  // console.log(petSalon.pets.length);
}

//object constructor
class StudentC {
  constructor(firstName, lastName, age, email, isActive) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.email = email;
    this.isActive = isActive;
  }
}

let student1 = new StudentC("Vicky", "Warren", 99, "vicky@gmail.com", true);
let student2 = new StudentC("Von", "Abrea", 98, "von@gmail.com", true);

function displayStudent(user) {
  return `Name: ${user.firstName} \n Email: ${user.email}`
}

function showPetSalonInfo() {
  document.getElementById("petSalonInfoContainer").innerHTML =
    `
    ${petSalon.name} <br>
    Adress: ${petSalon.address.street} ${petSalon.address.number}
    ${petSalon.address.zip} ${petSalon.address.city} ${petSalon.address.state}<br>
    Working hours: ${petSalon.workingHours.open} - ${petSalon.workingHours.close}
  `
}

showPetSalonInfo()

