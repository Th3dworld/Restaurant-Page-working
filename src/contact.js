function createContact(){
    //Get content div
    const contentDiv = document.querySelector("#content");
    
    //Create variable used to insert html elements to DOM
    let elem = document.createElement("div");
    elem.id = "contact";

    elem.innerHTML +=`
    <div class="contact-dets">
        <div class="name">John Doe</div>
        <div class="Number">123-456-7890</div>
        <div class="email">johndoe@example.com</div>
    </div>
    <div class="contact-dets">
        <div class="name">Jane Smith</div>
        <div class="Number">987-654-3210</div>
        <div class="email">janesmith@example.com</div>
    </div>
    <div class="contact-dets">
        <div class="name">Michael Johnson</div>
        <div class="Number">555-123-4567</div>
        <div class="email">michaelj@example.com</div>
    </div>
    <div class="contact-dets">
        <div class="name">Emily Brown</div>
        <div class="Number">444-789-1234</div>
        <div class="email">emilybrown@example.com</div>
    </div>
    `;

    //Append content
    contentDiv.append(elem);
}

export {createContact}