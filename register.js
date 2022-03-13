//create the constructor
class Pet {
  constructor(name, age, gender, breed, service, ownerName, contactPhone) {
    this.petName = name;
    this.petAge = age;
    this.petGender = gender;
    this.petBreed = breed;
    this.petServide = service;
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

// create some pets
let scooby = new Pet("Scooby", 50, "Male", "Boxer", "Grooming", "Shaggy", "1111-33-33")
let scrappy = new Pet("Scrappy", 20, "Male", "Dalmata", "Grooming", "Shaggy", "2222-33-33")
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
  alert("Pets registered: " + petSalon.pets.length)

  inputPetName.value = ""
  inputPetAge.value = ""
  inputPetGender.value = ""
  inputPetBreed.value = ""
  inputPetService.value = ""
  inputPetOwnerName.value = ""
  inputPetContactPhone.value = ""

  displayPetsRegistered()
}

function displayPetsRegistered() {
  // console.log('displaypetsregistered ', petSalon.pets[i]);
  for (let i = 0; i < petSalon.pets.length; i++) {
    console.log('displaypetsregistered ', petSalon.pets[i]);
    document.getElementById("pet-name").innerHTML += `<b>Pet name: </b>${petSalon.pets[i].petName}`
    document.getElementById("pet-age").innerHTML += `<b>pet-age: </b>${petSalon.pets[i].petAge}`
    document.getElementById("pet-gender").innerHTML += `<b>pet-gender: </b>${petSalon.pets[i].petGender}`
    document.getElementById("pet-breed").innerHTML += `<b>pet-breed: </b>${petSalon.pets[i].petGender}`
    document.getElementById("pet-service").innerHTML += `<b>pet-service: </b>${petSalon.pets[i].petServide}`
    document.getElementById("pet-ownerName").innerHTML += `<b>pet-ownerName: </b>${petSalon.pets[i].petOwnerName}`
    document.getElementById("pet-contactPhone").innerHTML += `<b>pet-contactPhone: </b>${petSalon.pets[i].petContactPhone}`
  }

}

displayPetsRegistered()

// showPetsRegistered()
// console.log(petSalon.pets);
