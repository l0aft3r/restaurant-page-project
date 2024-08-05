import "./style.css";
import pizza from "./Pizza.png";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

function createComponent(element, id = "", textContent = "") {
    const component = document.createElement(element);
    component.id = id;
    component.innerHTML = textContent;
    

    return component;
}

function createHomeHtml() {
    const firstBlock = createComponent("div", "firstBlock");
    const firstLeft = createComponent("div", "firstLeft");
    const firstRight = createComponent("div", "firstRight");
    const btnGroup = createComponent("div", "btnGroup");

    firstLeft.appendChild(createComponent("h1", "", "Best pizza in Los Angeles"));
    firstLeft.appendChild(createComponent(
        "p",
        "",
        "Looking for an eco-friendly restaurant in the United States? Check out our selection of sustainable restaurants."
    ));
    
    const img = document.createElement("img");
    img.alt = "Margherita Pizza";
    img.src = pizza;
    
    firstRight.appendChild(img);

    btnGroup.appendChild(createComponent("button", "", "Order Online"));
    btnGroup.appendChild(createComponent("button", "", "Book a Table"));

    firstLeft.appendChild(btnGroup);
    firstBlock.appendChild(firstLeft);
    firstBlock.appendChild(firstRight);
    
    content.appendChild(firstBlock);
}

function createMenuHtml() {
    //I might be a little lazy
    content.innerHTML = `<div id="menuBlock">
            <table>
                <tr>
                    <td>Antipasti (Appetizers)</td>
                    <td>Primi Piatti (First Courses)</td>
                </tr>
                <tr>
                    <td>Bruschetta al Pomodoro</td>
                    <td>Lasagna alla Bolognese</td>
                </tr>
                <tr>
                    <td>Caprese Salad</td>
                    <td>Risotto ai Funghi Porcini</td>
                </tr>
                <tr>
                    <td>Prosciutto e Melone</td>
                    <td>Spaghetti Carbonara</td>
                </tr>

                <tr>
                    <td>Secondi Piatti (Main Courses)</td>
                    <td>Dolci (Desserts)</td>
                </tr>
                <tr>
                    <td>Pollo alla Cacciatora</td>
                    <td>Tiramisù</td>
                </tr>
                <tr>
                    <td>Bistecca alla Fiorentina</td>
                    <td>Panna Cotta</td>
                </tr>
                <tr>
                    <td>Pesce al Forno</td>
                    <td>Cannoli Siciliani</td>
                </tr>
            </table>
        </div>`
}

function createAboutHtml() {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = "About Us";
    p.textContent = `Welcome to Ristorante Bella Italia, where the essence of Italy comes to life. Nestled in the heart of [Your City], our restaurant is dedicated to bringing you the authentic flavors and warm hospitality of traditional Italian dining.

            At Bella Italia, we believe that food is not just a meal but an experience to be savored. Our menu is a celebration of Italy's rich culinary heritage, crafted with the freshest ingredients and a passion for excellence. From the rustic charm of our antipasti to the hearty comfort of our primi piatti, and the exquisite taste of our secondi piatti, every dish is a testament to our love for Italian cuisine.
            
            Our chefs, trained in the finest kitchens of Italy, blend time-honored recipes with contemporary techniques to create dishes that are both familiar and innovative. We pride ourselves on our handmade pastas, slow-cooked sauces, and perfectly grilled meats, all paired with an extensive selection of Italian wines.
            
            Ristorante Bella Italia is more than just a place to eat; it's a place to gather, celebrate, and create memories. Whether you're enjoying a casual meal with family, a romantic dinner for two, or a festive event with friends, our inviting atmosphere and attentive service ensure a dining experience that is truly special.
            
            Join us at Ristorante Bella Italia and let us transport you to the heart of Italy with every bite. Buon appetito!`;

    content.appendChild(h1);
    content.appendChild(p);
}

function emptyContent() {
    content.innerHTML = "";
}

home.onclick = () => {
    emptyContent();
    createHomeHtml();
}

menu.onclick = () => {
    emptyContent();
    createMenuHtml();
}

about.onclick = () => {
    emptyContent();
    createAboutHtml();
}

createHomeHtml();