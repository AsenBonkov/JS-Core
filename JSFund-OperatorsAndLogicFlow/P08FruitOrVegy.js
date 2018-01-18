function fruitOrVegetable(plant) {
    if (plant === "banana" || plant === "kiwi" || plant === "cherry"
    || plant === "lemon" || plant === "grapes" || plant === "peach"
    || plant === "apple"){
        console.log("fruit")
    }else if(plant === "tomato" || plant === "cucumber" || plant === "pepper"
    || plant === "onion" || plant === "garlic" || plant === "parsley"){
        console.log("vegetable")
    }else{
        console.log("unknown")
    }
}