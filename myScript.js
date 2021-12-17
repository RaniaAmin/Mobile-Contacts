console.log("the start");
var contacts=[
    {name:"rania",phoneNumber:"32534652"},
    {name:"mohammed", phoneNumber:"2354362663"}
]
console.log(contacts[0]);
document.addEventListener("load",displayList());
function displayList() {
    var list=document.getElementById("contactList");
    list.innerHTML="";
    var container=document.getElementById("listContainer");

    // var newList=document.createElement("ul");
contacts.forEach((contact)=>{
    var listItem=document.createElement("li");
    listItem.textContent=contact.name+" "+contact.phoneNumber;
    list.appendChild(listItem);
});
// console.log(newList);

console.log(list);
// console.log(list.nodeType);
// container.removeChild(list);
// container.appendChild(newList);
}//end of displayList
function addContact(e){
    e.preventDefault();
    console.log(e);
    
    // const inputName=document.getElementById("addName");
    // const inputPhone=document.getElementById("addPhone");
    const inputName=document.forms["addContactForm"]["name"].value;
    const inputPhone=document.forms["addContactForm"]["phone"].value;
    var newContact={name:inputName,phoneNumber:inputPhone}
    contacts=[...contacts,newContact]
    console.log(contacts);
    document.forms["addContactForm"]["name"].value="";
    document.forms["addContactForm"]["phone"].value="";
    displayList();
    
    

}


