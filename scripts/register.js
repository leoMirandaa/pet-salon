//create the constructor
class Pet {
  constructor(name, age, gender, breed, service, ownerName, contactPhone) {
    this.petName = name;
    this.petAge = age;
    this.petGender = gender;
    this.petBreed = breed;
    this.petService = service;
    this.petOwnerName = ownerName;
    this.petContactPhone = contactPhone;
  }
}

//get the info from the inputs
let inputPetName = document.getElementById("txtPetName");
let inputPetAge = document.getElementById("txtPetAge");
let inputPetGender = document.getElementById("txtPetGender");
let inputPetBreed = document.getElementById("txtPetBreed");
let inputPetService = document.getElementById("txtPetService");
let inputPetOwnerName = document.getElementById("txtPetOwnerName");
let inputPetContactPhone = document.getElementById("txtPetContactPhone");


function isValid(aPet) {
  //return false when the pet is not valid
  //return turn if the pet is valid
  let valid = true
  if (aPet.petName.length == 0) {
    //if we get here it means that the name is no valid
    valid = false;
    console.log("invalid name");
  }

  if (aPet.petService.length == 0) {
    valid = false
    console.log("invalid service");
  }

  if (aPet.petContactPhone.length == 0) {
    valid = false
    console.log("invalid contactPhone");
  }

  //return the error in the console

  //validations

  return valid
}

function register() {
  console.log(inputPetName.value, inputPetAge.value, inputPetGender.value);

  //create the obj
  let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);

  // console.log(thePet);
  console.log(thePet);

  //push the obj

  if (isValid(thePet)) {
    petSalon.pets.push(thePet)
    console.log(petSalon.pets);
    // alert("Pets registered: " + petSalon.pets.length)

    // inputPetName.value = ""
    // inputPetAge.value = ""
    // inputPetGender.value = ""
    // inputPetBreed.value = ""
    // inputPetService.value = ""
    // inputPetOwnerName.value = ""
    // inputPetContactPhone.value = ""

    displayPetsRegistered()
  }
}

function displayPetsRegistered() {
  let tmp = "";
  for (let i = 0; i < petSalon.pets.length; i++) {

    console.log('displaypetsregistered ', petSalon.pets[i]);
    tmp +=
      `
      <div class="pet">
        <h5>🐶<b> ${petSalon.pets[i].petName}</b></h5>
        <p><b>Pet age: </b> ${petSalon.pets[i].petAge} </p>
        <p><b>pet-gender: </b> ${petSalon.pets[i].petGender} </p>
        <p><b>pet-breed: </b> ${petSalon.pets[i].petGender} </p>
        <p><b>pet-service: </b> ${petSalon.pets[i].petService} </p>
        <p><b>pet-ownerName: </b> ${petSalon.pets[i].petOwnerName} </p>
        <p><b>pet-contactPhone: </b> ${petSalon.pets[i].petContactPhone}</p></br>
      </div>
      `

    // console.log('displayyy ', tmp);
    document.getElementById("pets").innerHTML = tmp
  }
}


// showPetsRegistered()
// console.log(petSalon.pets);
function init() {
  // create some pets
  let scooby = new Pet("Scooby", 50, "Male", "Boxer", "Grooming", "Shaggy", "1111-33-33")
  let scrappy = new Pet("Scrappy", 20, "Male", "Dalmata", "Grooming", "Shaggy", "2222-33-33")
  petSalon.pets.push(scooby, scrappy)
  displayPetsRegistered()
}

window.onload = init;