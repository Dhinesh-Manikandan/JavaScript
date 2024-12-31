const  inputs=document.getElementById("inputs");
const Generate=document.getElementById("Generate");
const imgbox=document.getElementById("imgbox");
const qrcode=document.getElementById("qrcode");
let A;
Generate.addEventListener("click",event =>{
    
    event.preventDefault();
    const Value=inputs.value;
    if(Value==="")
    {
        
        // A.style.display="block";
        imgbox.classList.remove("show-img");
    }
    else{
        // A.style.display="none";
        qrcode.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Value;
    
        imgbox.classList.add("show-img");

    }
    
});