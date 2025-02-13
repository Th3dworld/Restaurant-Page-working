function createMenu(){
    //Get content div
    const contentDiv = document.querySelector("#content");
    
    //Create variable used to insert html elements to DOM
    let elem = document.createElement("div");
    elem.id = "menu-body";

    //create table
    let menu = document.createElement("table");
    
    //Add other parts of table
    menu.innerHTML +=`
                <thead>
                    Menu
                </thead>
                <tr>
                    <th>item</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
                <tr>
                    <th rowspan="5">Drinks</th>
                    <td>Alicino Special</td>
                    <td>♾️</td>
                </tr>
                <tr>
                    <td>Mats Fanta</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>KnotFanta</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Knoanta</td>
                    <td>110</td>
                </tr>
                <tr>
                    <td>ota</td>
                    <td>110</td>
                </tr>
                <tr>
                    <td colspan="3" style="height: 20px;"></td>
                </tr>
                <tr>
                    <th rowspan="5">Meals</th>
                    <td>Meal one</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Grilled Chicken Salad</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Veggie Burger</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Spaghetti Bolognese</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>Caesar Wrap</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td colspan="3" style="height: 20px;"></td>
                </tr>
                <tr>
                    <th rowspan="5">Starters</th>
                    <td>Soup of the Day</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Garlic Bread</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Bruschetta</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Fried Mozzarella Sticks</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>Hummus and Pita</td>
                    <td>5</td>
                </tr>
    `;

    elem.append(menu)
    contentDiv.append(elem)
}

export {createMenu}