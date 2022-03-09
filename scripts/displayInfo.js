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
  pets: [
    {
      //first pet
      name: "Scooby",
      age: 50,
      gender: "Female",
      breed: "Dane",
      service: "Grooming",
      ownerName: "Shaggy",
      contactPhone: "888-888-888"
    },
    {
      //second pet
      name: "Speedy",
      age: 30,
      gender: "Male",
      breed: "Bulldog",
      service: "PetsHotel",
      ownerName: "Michael",
      contactPhone: "222-333-444"
    },
    {
      //third pet
      name: "Scooby",
      age: 10,
      gender: "Female",
      breed: "Pug",
      service: "Dog Training",
      ownerName: "Bulma",
      contactPhone: "111-222-555"
    },

  ]
}

console.log(petSalon.address.zip);
console.log(petSalon.pets.length);
//display the service in the console
console.log(petSalon.pets[0].service);


//create pets array



//display the pet salon info in the footer section of html(name, address, working hours)
function displaySalonInfo() {
  document.getElementById("footer-info").innerHTML =
    `
  <b>${petSalon.name}</b> <br>
  Address: ${petSalon.address.street} ${petSalon.address.number} ${petSalon.address.zip} ${petSalon.address.city} ${petSalon.address.state}<br>
  Opens: ${petSalon.workingHours.open} - ${petSalon.workingHours.close}
  `
}

displaySalonInfo();

function displayPetNames() { }

