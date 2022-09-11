//I would have renamed the opacity functions, as addOpacity actually takes away opacity from the images, and vice versa with removeOpacity

//function gathers the images and assigns them eventListeners which will change based on their id
function configureListeners() {
    let images = document.getElementsByTagName('img');
    // select img elements  

    for (var i = 0; i < images.length; i++) {
        //gets each iterated element by their id and assigns an event listener
        //HAVE TO USE ID because we have to access the id to know if that particular image is using the "dim" class
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
    }

}

//adds the "dim" class, makes the square more transparent
function addOpacity(event) {
    // add appropriate CSS class
    //accesses the element's list of classes and determines if it uses the class "dim"
    //if it doesn't, it uses "classList" to "add" dim to the element
    if (!this.classList.contains('dim')) {
        this.classList.add('dim');
    }
    //calls the function on the img where the mouseover event occurred, displaying information based on the image's id
    getProductInfo(event.target.id);
}

//removes the "dim" class, making the square more opaque
function removeOpacity(event) {
    //remove appropriate CSS class
    //accesses the element's list of classes and determines if it uses the class "dim"
    //if it does, it uses "classList" to "remove" dim from the element
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }
    //the below resets the 'color price' and 'color name' spaces to blank
    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    //not exactly sure what this does, but perhaps keeps the product info from showing up?
    event.preventDefault();
}


//function which lays out all the product info in a switch object and code blocks, and a function below which uses the 
function getProductInfo(paintColor) {
    //declaring variables to be used later, didn't need these by the way I did the code blocks
    // let price;
    // let colorName;

    switch (paintColor) {
        case 'pn1':
            //could have done it the way below. Better for readability, but more typing.
            // price = '$19.99',
            //colorName = 'Lime Green',
            //updatePrice(colorName, price)
            updatePrice('Lime Green', '$19.99')
            break;
        case 'pn2':
            updatePrice('Medium Brown', '$11.14')
            break;
        case 'pn3':
            updatePrice('Royal Blue', '$22.99')
            break;
        case 'pn4':
            updatePrice('Solid Red', '$13.42')
            break;
        case 'pn5':
            updatePrice('Solid White', '$21.98')
            break;
        case 'pn6':
            updatePrice('Solid Black', '$4.99')
            break;
        case 'pn7':
            updatePrice('Solid Cyan', '$8.22')
            break;
        case 'pn8':
            updatePrice('Solid Purple', '$11.99')
            break;
        case 'pn9':
            updatePrice('Solid Yellow', '$14.99')
            break;
        default:
    }

    //this targets the changing text under the header, changing it dynamically based on where the mouse is.
    function updatePrice(colorName, price) {
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price

        let color = document.getElementById('color-name')
        color.textContent = colorName
    }

}
