import "./styles.css";
import {initialLoadPage} from "./home";
import { menuLoadPage } from "./menu";
import { aboutLoadPage } from "./about";
initialLoadPage();
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
button.addEventListener("click",()=>{
   if(button.textContent=="Menu")
    menuLoadPage(); 
   else if(button.textContent=="About")
    aboutLoadPage();
   else
   initialLoadPage();
});});
