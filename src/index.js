import "./styles.css";
import { createHome } from "./home.js";
import { createContact } from "./contact.js";
import { createMenu } from "./menu.js";

//start with home on screen
createHome();


//screen clear function
function clearScreen(){
    document.querySelector("#content").innerHTML = ""
}

//Add even listener to buttons
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () =>{
    clearScreen();
    createHome();
});

menuBtn.addEventListener("click", ()=>{
    clearScreen();
    createMenu();
});

contactBtn.addEventListener("click", ()=>{
    clearScreen();
    createContact();
});