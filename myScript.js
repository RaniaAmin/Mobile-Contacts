console.log("the start");
var contacts=[
    {id:0,name:"rania",phoneNumber:"32534652"},
    {id:1,name:"mohammed", phoneNumber:"2354362663"}
]
var activeContactId=null;

document.addEventListener("load",displayList(contacts));


document.getElementById("closeEdit").addEventListener("click",()=>{
    
    document.getElementById("editBlock").style.display="none";
})
////////////////////displayList function//////////////////////////
function displayList(currentContactList) {
    var list=document.getElementById("contactList");
    list.innerHTML="";
    currentContactList.forEach((contact,id)=>{
    var listItem=document.createElement("li");    
    listItem.innerHTML=contact.name+" "+contact.phoneNumber+" "+`<span><a href='#' onclick='removeFromList(${contact.id})'>Remove</a><a href='#' id="edit" onclick='setContactId(${contact.id})'>Edit</a></span>`;
    list.appendChild(listItem);
});
}////end of displayList

/////////////////////addContact function//////////////////////////
function addContact(e){
    e.preventDefault();
    const inputName=document.forms["addContactForm"]["name"].value;
    const inputPhone=document.forms["addContactForm"]["phone"].value;
    var newContact={id:contacts.length,name:inputName,phoneNumber:inputPhone}
    contacts=[...contacts,newContact]
    
    document.forms["addContactForm"]["name"].value="";
    document.forms["addContactForm"]["phone"].value="";
    displayList(contacts);
}////end of addContact

///////////////////////removeFromList///////////////////////////
function removeFromList(id) {
    contacts=contacts.filter((contact,i)=>(i !==id));
    console.log(contacts);
    displayList(contacts);
}/////end of removeFromList

/////////////////////////editContactList///////////////////////
function setContactId(id) {
    document.getElementById("editBlock").style.display="block";
    activeContactId=id;
}/////end of setContactId

//////////////////////editContactList//////////////////////////
function editContactList(event) {
        // document.getElementById("editBlock").style.display="block";
        event.preventDefault();
         console.log(document.forms["editContactForm"]);
         id=activeContactId;
         console.log("id =",id);
         var editForm=document.forms["editContactForm"];
         const newInputName=editForm["name"].value;
         const newInputPhone=editForm["phone"].value;
         contacts[id]={id,name:newInputName,phoneNumber:newInputPhone}
         document.getElementById("editBlock").style.display="none";
         displayList(contacts);
}/////end of editContactList

function searchContactList(event) {
    event.preventDefault();
    var searchContact=document.getElementById("search").value;
    // console.log(searchContact.value);
    
    var searchedList=contacts.filter((contact,i)=>{
        console.log("any contact",contact);
        if (contact.name.includes(searchContact)||contact.phoneNumber.includes(searchContact)){
            console.log(contact);
            return contact;
        }
    });
    console.log("searchedList",searchedList);
    displayList(searchedList);

    
}





