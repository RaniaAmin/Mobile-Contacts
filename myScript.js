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
function displayList(currentContactList,newCaption="") {
    var caption=document.getElementById("caption");
    
    if (contacts.length === 0){
        caption.innerText="There are no contacts";
    }
    else{
        caption.innerText=newCaption;
    }
    
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
    if (inputName !== "" && inputPhone != ""){
        var max=0;
        contacts.forEach((contact)=>{
            if(contact.id > max){
                max=contact.id;
            }
        })
        console.log("max",max);
        var newContact={id:max+1,name:inputName,phoneNumber:inputPhone}
        contacts=[...contacts,newContact]
        
        document.forms["addContactForm"]["name"].value="";
        document.forms["addContactForm"]["phone"].value="";
        displayList(contacts,"Adding new Contact is Done");
        console.log(contacts);
    }
    else{
        alert("You have to enter a name and a Phone number");
    }
    
}////end of addContact

///////////////////////removeFromList///////////////////////////
function removeFromList(id) {
    if (confirm("Are you sure you want to Remove this contact?!") == true) {
        contacts=contacts.filter((contact,i)=>(contact.id !==id));
        console.log(id);
        displayList(contacts,"Contact Removed");
        console.log(contacts);
      }
    
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
         if(newInputName !=="" && newInputPhone !==""){
             contacts=contacts.map((contact)=>{
                 if(contact.id===id){
                     return {id,name:newInputName,phoneNumber:newInputPhone}
                 }
                 else{
                     return contact;
                 }
             });
             console.log(contacts);
            // contacts[id]={id,name:newInputName,phoneNumber:newInputPhone}
            document.getElementById("editBlock").style.display="none";
            displayList(contacts,"Editing is Done");
            console.log(contacts);
         }
         else{
             alert("You have to enter a name and a Phone number");
         }
         
}/////end of editContactList

function searchContactList(event) {
    event.preventDefault();
    var searchContact=document.getElementById("search").value;
    
    
    if (searchContact==""){
        
        displayList(contacts,"");
    }
    else if(searchContact !=""){
        var searchedList=contacts.filter((contact,i)=>{
            console.log("any contact",contact);
            if (contact.name.includes(searchContact)||contact.phoneNumber.includes(searchContact)){
                console.log(contact);
                return contact;
            }
        });
        console.log("searchedList",searchedList);
        
        
        displayList(searchedList,"Your search result");
        if (searchedList.length==0){
            
            displayList(contacts,"Not Found");
        }
    }
    

    
}





