const inputcity=document.getElementById("inputcity");
// const inputcity="Chennai".toLocaleLowerCase;
const Mybutton=document.getElementById("Mybutton");
const Cityname=document.getElementById("Cityname");
const Fahrenheit=document.getElementById("Fahrenheit");
const Humidity=document.getElementById("Humidity");
const Details=document.getElementById("Details");
const APIKey="cfad50019623bb6ba4d3a9de487e1064";
const Outputs =document.getElementById("Outputs");

let p;

Mybutton.addEventListener("click",async (event) =>{
    
   // event.preventDefault();
    const city=inputcity.value;
   
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
    if(!response.ok)
    {
        Cityname.textContent="";
        Fahrenheit.textContent="";
        Humidity.textContent="Invalid Input";
        Details.textContent="";


        // p=document.createElement("p");
        // p.textContent="Invalid Input";
        // p.classList.add("Wrong");
        // document.body.append(p);
        // p.style.display="block";
        
        console.Error("Not Valid");
        window.Error("Not Valid");
    }
    else{
        
        const data=await response.json();

        Cityname.textContent=city;
        const K=data.main.temp;
        const F=((K-273.15)*(9/5)+32).toFixed(2);
        Fahrenheit.textContent=F +"℉";
        Humidity.textContent="Humidity: "+data.main.humidity+"%";
        Details.textContent=data.weather[0].description;
        // p.style.display="none";
    }
}

);



