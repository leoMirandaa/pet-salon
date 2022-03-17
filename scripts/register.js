//create the constructor
let x = 0

function Pet(name, petType, age, gender, breed, service, ownerName, contactPhone) {
  this.petName = name;
  this.petType = petType
  this.petAge = age;
  this.petGender = gender;
  this.petBreed = breed;
  this.petService = service;
  this.petOwnerName = ownerName;
  this.petContactPhone = contactPhone;
  this.id = x++;
}

//get the info from the inputs
let inputPetName = document.getElementById("txtPetName");
let inputPetType = document.getElementById("txtPetType");
let inputPetAge = document.getElementById("txtPetAge");
let inputPetGender = document.getElementById("txtPetGender");
let inputPetBreed = document.getElementById("txtPetBreed");
let inputPetService = document.getElementById("txtPetService");
let inputPetOwnerName = document.getElementById("txtPetOwnerName");
let inputPetContactPhone = document.getElementById("txtPetContactPhone");


function isValid(aPet) {
  let valid = true

  if (aPet.petName.length == 0) {
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

  return valid
}

function register() {
  console.log(inputPetName.value, inputPetAge.value, inputPetGender.value);

  //create the obj
  let thePet = new Pet(inputPetName.value, inputPetType.value, inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);


  if (isValid(thePet)) {
    petSalon.pets.push(thePet)
    console.log(petSalon.pets);

    displayPetsRegistered()
    // cleanFormInputs()
  }
}

function displayPetsRegistered() {
  let tmp = "";
  let row = "";
  let numberOfBirds = 0
  let numberOfCats = 0
  let numberOfDogs = 0
  let numberOfRabbits = 0
  let emoji = ""

  document.getElementById("total").innerHTML = `<u>Total = ${petSalon.pets.length}</u>`

  document.getElementById("petsTableBody").innerHTML = ""

  for (let i = 0; i < petSalon.pets.length; i++) {
    emoji = ""

    switch (petSalon.pets[i].petType) {
      case 'Bird': (numberOfBirds++, emoji = "🐦");
        break;

      case 'Cat': (numberOfCats++, emoji = "🐱")
        break;

      case 'Dog': (numberOfDogs++, emoji = "🐶")
        break;

      case 'Rabbit': (numberOfRabbits++, emoji = "🐇")
        break;
    }

    tmp +=
      `
      <div class="pet">
        <br>
        <h5>${emoji}<b> ${petSalon.pets[i].petName}</b></h5>
        <p><b>pet-type: </b> ${petSalon.pets[i].petType}</p>
        <p><b>Pet age: </b> ${petSalon.pets[i].petAge} </p>
        <p><b>pet-gender: </b> ${petSalon.pets[i].petGender} </p>
        <p><b>pet-breed: </b> ${petSalon.pets[i].petGender} </p>
        <p><b>pet-service: </b> ${petSalon.pets[i].petService} </p>
        <p><b>pet-ownerName: </b> ${petSalon.pets[i].petOwnerName} </p>
        <p><b>pet-contactPhone: </b> ${petSalon.pets[i].petContactPhone}</p>
      </div>
      `
    document.getElementById("pets").innerHTML = tmp
    document.getElementById("petsTableBody").innerHTML = tmp

    document.getElementById("birds").innerHTML = numberOfBirds;
    document.getElementById("cats").innerHTML = numberOfCats;
    document.getElementById("dogs").innerHTML = numberOfDogs;
    document.getElementById("rabbit").innerHTML = numberOfRabbits;
  }

  for (let i = 0; i < petSalon.pets.length; i++) {
    emoji = ""

    switch (petSalon.pets[i].petType) {
      case 'Bird': (numberOfBirds++, emoji = "🐦");
        break;

      case 'Cat': (numberOfCats++, emoji = "🐱")
        break;

      case 'Dog': (numberOfDogs++, emoji = "🐶")
        break;

      case 'Rabbit': (numberOfRabbits++, emoji = "🐇")
        break;
    }

    row +=
      `
      <tr>
        <tr id="${petSalon.pets[i].id}">
        <td>${petSalon.pets[i].petName}</td>
        <td>${emoji}${petSalon.pets[i].petType}</td>
        <td>${petSalon.pets[i].petAge}</td>
        <td>${petSalon.pets[i].petGender}</td>
        <td>${petSalon.pets[i].petBreed}</td>
        <td>${petSalon.pets[i].petService}</td>
        <td>${petSalon.pets[i].petOwnerName}</td>
        <td>${petSalon.pets[i].petContactPhone}</td>
        <td><button class="btn-delete" onclick="deletePet(${petSalon.pets[i].id});"><i class="fas fa-trash"></i></button></td>
      </tr>
      `
    document.getElementById("petsTableBody").innerHTML = row;
  }
}

function cleanFormInputs() {
  console.log('clean');
  inputPetName = document.getElementById("txtPetName").value = "";
  inputPetType = document.getElementById("txtPetType").value = "";
  inputPetAge = document.getElementById("txtPetAge").value = "";
  inputPetGender = document.getElementById("txtPetGender").value = "";
  inputPetBreed = document.getElementById("txtPetBreed").value = "";
  inputPetService = document.getElementById("txtPetService").value = "";
  inputPetOwnerName = document.getElementById("txtPetOwnerName").value = "";
  inputPetContactPhone = document.getElementById("txtPetContactPhone").value = "";
}

function deletePet(petId) {
  console.log('Delete pet ', petId);

  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];

    if (pet.id == petId) {
      deleteIndex = i;
    }
  }
  //remove the pet from the array
  petSalon.pets.splice(deleteIndex, 1)
  //remove the pet from html
  document.getElementById(petId).remove()
  displayPetsRegistered()

}

function searchPet() {
  let searchString = document.getElementById("txtSearch").value;
  console.log('txtSearch: ', searchString);

  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];

    if (pet.petName.toLowerCase() == searchString.toLowerCase() || pet.petService.toLowerCase() == searchString.toLowerCase()) {
      console.log('i found it: ', pet);
      document.getElementById(pet.id).classList.add('bg-color');
    }
    else {
      document.getElementById(pet.id).classList.remove('bg-color');
    }
  }
}

function showTable() {
  console.log('show table..');
  document.getElementById("pets").classList.add('hide-cards');
  document.getElementById("pets-table").classList.remove("hide-table")
}

function showCards() {
  console.log('show cards..');
  document.getElementById("pets-table").classList.add("hide-table")
  document.getElementById("pets").classList.remove("hide-cards")
}


function init() {
  console.log("init");
  // create some pets
  let scooby = new Pet("Scooby", "Dog", 50, "Male", "Terrier", "Grooming", "Shaggy", "1111-33-33")
  let scrappy = new Pet("Scrappy", "Cat", 20, "Female", "Bulldog", "Pets Hotel", "Bilma", "222-33-33")
  let dalmata = new Pet("Dalmata", "Rabbit", 20, "Female", "Dalmata", "Grooming", "Fred", "333-33-33")
  petSalon.pets.push(scooby, scrappy, dalmata)
  displayPetsRegistered()
}

window.onload = init;