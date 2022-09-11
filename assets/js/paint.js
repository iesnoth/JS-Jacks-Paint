function configureListeners() {
    let images = document.getElementsByTagName('img'); 
        // select img elements  


        for (var i = 0; i < images.length; i++) {
            //gets each iterated element by their id and assigns an event listener
            //HAVE TO USE ID because....
            document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
            document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false) 
        }
    
}

function addOpacity(event) {
    // add appropriate CSS class
    let opacity = document.querySelector('.dim')
    if(opacity !== '.dim'){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    //remove appropriate CSS class
    let opacity = document.querySelector('.dim')
    if(opacity === '.dim'){
        this.classList.remove('dim')
    }
    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            price='$19.99',
            colorName= 'Lime Green',
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price     
            break;
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            break;
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            break;
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            break;
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            break;
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            break;
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            break;
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            break;
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = document.getElementById('color-price')// select element with corresponding id
            // display price
        colorPrice.textContent = price
            let color = document.getElementById('color-name')// select element with corresponding id
        //display color name
        color.textContent = colorName
    }

}
