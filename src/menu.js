function menuLoadPage(){
const content =  document.querySelector("#content");
content.innerHTML="";
const header = document.createElement("h1");
header.textContent = "Menu";
content.appendChild(header);
const para = document.createElement("p");
para.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dicta temporibus dolorum veritatis voluptate esse, vel suscipit tempore est id natus 
            libero quisquam repellendus, similique distinctio non numquam inventore? Perferendis, officiis.
        e distinctio non numquam inventore? Perferendis, officiis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dicta temporibus dolorum veritatis voluptate esse, vel suscipit tempore est id natus 
            libero quisquam repellendus, similique distinctio non numquam inventore? Perferendis, officiis.`;
content.appendChild(para);}

export {menuLoadPage};
