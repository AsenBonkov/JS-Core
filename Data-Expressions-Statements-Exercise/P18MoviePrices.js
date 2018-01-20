function moviePrices([str1, str2]) {
    let title = str1.toString().toLowerCase()
    let dayOfWeek = str2.toString().toLowerCase()

    let price = 0;

    if (title === "the godfather"){
        switch (dayOfWeek){
            case 'monday': price = 12;
                return price;
            case 'tuesday': price = 10;
                return price;
            case 'wednesday': price = 15;
                return price;
            case 'thursday': price = 12.50;
                return price;
            case 'friday': price = 15;
                return price;
            case 'saturday': price = 25;
                return price;
            case 'sunday': price = 30;
                return price;
            default: return 'error'
        }
    }else if (title === "schindler's list"){
        switch (dayOfWeek){
            case 'monday': price = 8.50;
                return price;
            case 'tuesday': price = 8.50;
                return price;
            case 'wednesday': price = 8.50;
                return price;
            case 'thursday': price = 8.50;
                return price;
            case 'friday': price = 8.50;
                return price;
            case 'saturday': price = 15;
                return price;
            case 'sunday': price = 15;
                return price;
            default: price = 'error';
                return price;
        }
    }else if(title === 'casablanca'){
        switch (dayOfWeek){
            case 'monday': price = 8;
                return price;
            case 'tuesday': price = 8;
                return price;
            case 'wednesday': price = 8;
                return price;
            case 'thursday': price = 8;
                return price;
            case 'friday': price = 8;
                return price;
            case 'saturday': price = 10;
                return price;
            case 'sunday': price = 10;
                return price;
            default: price = 'error';
                return price;
        }
    }else if(title === 'the wizard of oz'){
        switch (dayOfWeek){
            case 'monday': price = 10;
                return price;
            case 'tuesday': price = 10;
                return price;
            case 'wednesday': price = 10;
                return price;
            case 'thursday': price = 10;
                return price;
            case 'friday': price = 10;
                return price;
            case 'saturday': price = 15;
                return price;
            case 'sunday': price = 15;
                return price;
            default: price = 'error';
                return price;
        }
    }else{
        price = 'error';
        return price;
    }



}

//console.log(moviePrices(["The Godfather", 'Friday']))

