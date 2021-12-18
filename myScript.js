console.log("the start");
var contacts=[
    {name:"rania",phoneNumber:"32534652"},
    {name:"mohammed", phoneNumber:"2354362663"}
]

document.addEventListener("load",displayList());
////////////////////displayList function//////////////////////////
function displayList() {
    var list=document.getElementById("contactList");
    list.innerHTML="";
    var container=document.getElementById("listContainer");
contacts.forEach((contact,id)=>{
    var listItem=document.createElement("li");
   // listItem.textContent=contact.name+" "+contact.phoneNumber+"<span>Remove</span>";
    listItem.innerHTML=contact.name+" "+contact.phoneNumber+" "+id+"<span><a href='' onclick='removeFromList("+id+")'>Remove</a></span>";
    list.appendChild(listItem);
});
}////end of displayList

/////////////////////addContact function//////////////////////////
function addContact(e){
    e.preventDefault();
    const inputName=document.forms["addContactForm"]["name"].value;
    const inputPhone=document.forms["addContactForm"]["phone"].value;
    var newContact={name:inputName,phoneNumber:inputPhone}
    contacts=[...contacts,newContact]
    console.log(contacts);
    document.forms["addContactForm"]["name"].value="";
    document.forms["addContactForm"]["phone"].value="";
    displayList();
}////end of addContact

///////////////////////removeFromList///////////////////////////
function removeFromList(e,id) {
    e.preventDefault();
    alert("hey"+id);
}




