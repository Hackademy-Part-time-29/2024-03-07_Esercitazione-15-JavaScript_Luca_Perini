let btnShowContacts = document.querySelector(`#btn-showContacts`);
let contactsContainer = document.querySelector(`.contactsContainer`)
let contactWrapper = document.querySelector(`#contactWrapper`);
let btnDeleteContact = document.querySelector(`#btn-deleteContact`);
let insertName = document.querySelector(`#insertName`);
let insertTelephone = document.querySelector(`#insertTelephone`);
let btnAddContact = document.querySelector(`#btn-addContact`);

let rubrica = {
  contacts: [
    { contact_name: "Luca Barcia", number: "3331111111" },
    { contact_name: "Giuseppe Esposi", number: "3331111112" },
    { contact_name: "Antonio Pace", number: "3331111113" },
    { contact_name: "Fiorenzo Napoli", number: "3331111114" },
    { contact_name: "Giuseppe Gelsom", number: "3331111115" },
    { contact_name: "Luca Matteo", number: "3331111116" },
    { contact_name: "Paolo Micaloni", number: "3331111117" },
    { contact_name: "Samuele", number: "3331111118" },
    { contact_name: "hektor farruku", number: "3331111119" },
    { contact_name: "Martina Guberti", number: "3331111120" },
    { contact_name: "Alessio Morel", number: "3331111121" },
    { contact_name: "Lorenzo Favaro", number: "3331111122" },
    { contact_name: "Felicetta Maro", number: "3331111123" },
    { contact_name: "EMANUELE VITO ", number: "3331111124" },
    { contact_name: "Pierpaolo Cala", number: "3331111125" },
    { contact_name: "Andrei Pasat", number: "3331111126" },
    { contact_name: "Marziano Farina", number: "3331111127" },
    { contact_name: "Alessandro Mu", number: "3331111128" },
    { contact_name: "Mattia Monta", number: "3331111129" },
    { contact_name: "Luigi Fanel", number: "3331111130" },
    { contact_name: "Marika Loru", number: "3331111131" },
    { contact_name: "Simone Pelleg", number: "3331111132" },
    { contact_name: "Andrea Fichera", number: "3331111133" },
    { contact_name: "Vincenzo gianm", number: "3331111134" },
    { contact_name: "Vlad Lazar", number: "3331111135" },
    { contact_name: "Riccardo Noci", number: "3331111136" },
    { contact_name: "Luca Perini", number: "3331111137" },
    { contact_name: "Rita Ciocio", number: "3331111138" },
    { contact_name: "Michele Dan", number: "3331111139" },
    { contact_name: "Simone Ross", number: "3331111140" },
    { contact_name: "Leonardo Greco", number: "3331111141" },
    { contact_name: "MAURIZIO SCHIA", number: "3331111142" },
    { contact_name: "Emanuele Sisto", number: "3331111143" },
    { contact_name: "Giordano Fior", number: "3331111144" },
    { contact_name: "Leonardo Lodd", number: "3331111145" },
  ],

  showContacts : function(){
    contactWrapper.innerHTML = "";
    
   rubrica.contacts.sort((a,b)=> a.contact_name.localeCompare(b.contact_name));
    this.contacts.forEach((contact) => {
      let index = Math.floor(Math.random() * (100 - 90) + 90)
        
      let div = document.createElement (`div`);
      div.classList.add("contactWrapper");
      div.innerHTML = `
      <div class="contactWrapperInfo">
        <div class="contactWrapperInfoLeft">
          <img src="https://picsum.photos/${index}" alt="">
          <h4><i class="bi bi-person-fill"></i>${contact.contact_name} </h4>
        </div>
        <p><i class="bi bi-telephone-fill"></i> Phone: ${contact.number}</p>
      </div>
      <div class="contactWrapperOptions">
        <button id="btn-deleteContact"><i class="bi bi-trash3"></i> Delete</button>
        <button id="btn-editContact"><i class="bi bi-pen"></i> Edit</button>
        <button id="btn-callContact"><i class="bi bi-telephone"></i> Call</button>
      </div>`;
      contactWrapper.appendChild(div);
    });

   

    let deleteButtons = document.querySelectorAll(`#btn-deleteContact`);
    deleteButtons.forEach((button, index)=>{
      button.addEventListener(`click`, () => {
        this.contacts.splice(index, 1);
        this.showContacts();
      });
    })
  },

  

  addContact : function(newName, newNumber){
    this.contacts.push({ contact_name : newName, number : newNumber});
  },

  // deleteContact : function(contactName){
  //   let names = this.contacts.map((contatto) => contatto.contact_name);
  //   let index = names.indexOf(contactName);
  //   this.contacts.splice(index, 1);
  // }

};

let isVisible = false;
btnShowContacts.addEventListener("click", () => {
  if (!isVisible) {
    
    rubrica.showContacts();
    btnShowContacts.innerHTML = "- Hide Contacts";
    isVisible = true;
  } else {
    contactWrapper.innerHTML = "";
    btnShowContacts.innerHTML = "+ Show Contacts";
    isVisible = false;
  }
});

btnAddContact.addEventListener(`click`, () => {
  if (insertName.value && insertTelephone.value){
    
    rubrica.addContact(insertName.value, insertTelephone.value);
    rubrica.showContacts();
    alert(`${insertName.value} aggiunto ai contatti!`);
    insertName.value=``;
    insertTelephone.value= ``;
  }

});

