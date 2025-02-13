function createHome(){
    //Get content div
    const contentDiv = document.querySelector("#content");
    
    //Create variable used to insert html elements to DOM
    let elem = document.createElement("div");
    elem.id = "home-img";

    //Append content
    contentDiv.append(elem);

    //Add heading element
    elem = document.createElement("div");
    elem.classList.add("home");
    elem.classList.add("heading-text");
    elem.textContent = "THE FUFOOD PALACIAGA";

    //Append content
    contentDiv.append(elem);

    elem = document.createElement("div");
    elem.classList.add("home");
    elem.classList.add("sub-text");
    elem.textContent = `Welcome to THE FUFOOD PALACIAGA, where culinary adventure meets royal indulgence! Step into our vibrant haven, where every dish is a masterpiece crafted with passion, creativity, and locally sourced ingredients. Our menu celebrates a fusion of flavors, blending traditional techniques with modern flair to delight every palate. Whether you're seeking an intimate dinner or a festive gathering, THE FUFOOD PALACIAGA offers an unforgettable dining experience in an ambiance as bold and unique as our name. Join us and savor a journey of taste, innovation, and genuine hospitality.`;

    //Append content
    contentDiv.append(elem);
}

export {createHome};