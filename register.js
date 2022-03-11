//create the constructor
function Pet(name, age, gender, breed, service, ownerName, contactPhone) {
  this.petName = name;
  this.petAge = age;
  this.petGender = gender;
  this.petGender = breed;
  this.petServide = service;
  this.petOwnerName = ownerName;
  this.petContactPhone = contactPhone
}

//get the info from the inputs
let inputPetName = document.getElementById("txtPetName");
let inputPetAge = document.getElementById("txtPetAge");
let inputPetGender = document.getElementById("txtPetGender");
let inputPetBreed = document.getElementById("txtPetBreed");
let inputPetService = document.getElementById("txtPetService");
let inputPetOwnerName = document.getElementById("txtPetOwnerName");
let inputPetContactPhone = document.getElementById("txtPetContactPhone");

// create some pets
let scooby = new Pet("Scooby", 50, "Male", "Grooming", "Shaggy", "1111-33-33")
let scrappy = new Pet("Scrappy", 20, "Male", "Grooming", "Shaggy", "2222-33-33")
petSalon.pets.push(scooby, scrappy)


function register() {
  console.log(inputPetName.value, inputPetAge.value, inputPetGender.value);

  //create the obj
  let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);

  // console.log(thePet);
  console.log(thePet);

  //push the obj
  petSalon.pets.push(thePet)
  console.log(petSalon.pets);


}

// showPetsRegistered()
// console.log(petSalon.pets);
