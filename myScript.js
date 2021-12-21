console.log("the start");
var contacts=[
    {id:0,name:"rania",phoneNumber:"32534652"},
    {id:1,name:"mohammed", phoneNumber:"2354362663"}
]

document.addEventListener("load",displayList());


document.getElementById("closeEdit").addEventListener("click",()=>{
    
    document.getElementById("editBlock").style.display="none";
})
////////////////////displayList function//////////////////////////
function displayList() {
    var list=document.getElementById("contactList");
    list.innerHTML="";
    var container=document.getElementById("listContainer");
contacts.forEach((contact,id)=>{
    var listItem=document.createElement("li");    
    listItem.innerHTML=contact.name+" "+contact.phoneNumber+" "+id+`<span><a href='#' onclick='removeFromList(${contact.id})'>Remove</a><button href='#' id="edit" onclick='editContactList(${contact.id})'>Edit</button></span>`;
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
    displayList();
}////end of addContact

///////////////////////removeFromList///////////////////////////
function removeFromList(id) {
    contacts=contacts.filter((contact,i)=>(i !==id));
    console.log(contacts);
    displayList();
}/////end of removeFromList

//////////////////////editContactList//////////////////////////
function editContactList(id) {
        document.getElementById("editBlock").style.display="block";
         console.log(document.forms["editContactForm"]);
         console.log("id =",id);
         var editForm=document.forms["editContactForm"];
         editForm.addEventListener("submit",(e)=>{
            e.preventDefault();
            console.log("id =",id);
            const newInputName=editForm["name"].value;
            const newInputPhone=editForm["phone"].value;
            console.log(contacts[id]);
            
            console.log("old",contacts[id].name+" "+contacts[id].phoneNumber);
            // console.log("New",contacts[id]+"*****"+newInputName+" "+newInputPhone);
            contacts[id]={name:newInputName,phoneNumber:newInputPhone}
            console.log(contacts[id]);
            console.log("New",contacts[id].name+" "+contacts[id].phoneNumber);
            
            document.getElementById("editBlock").style.display="none";
            displayList();
            
        });
        console.log("id =",id);
        
}




