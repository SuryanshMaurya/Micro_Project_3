
// taking input food_data file
const food_data = require('./food.json');


// all items
food_data.forEach((items) => {
    console.log("[All ITEMS ] : ",items.foodname);
});

// vegetable
food_data.forEach((items) =>{
    if(items.category ==='Vegetable'){
        console.log("[VEGETABLE ] : ",items.foodname);
    }
});

// fruit
food_data.forEach((items) =>{
    if(items.category ==='Fruit'){
        console.log("[FRUIT ] : ",items.foodname);
    }
})

// protein
food_data.forEach((items) =>{
    if(items.category === 'Protein'){
        console.log("[PROTEIN ] : ",items.foodname);
    }
})

// nuts
food_data.forEach((items) =>{
   if(items.category ==='Nuts'){
    console.log("[NUTS ] : ",items.foodname);
   }
});

// grains
food_data.forEach((items) =>{
    if(items.category ==='Grain'){
        console.log("[GRAIN ] : ",items.foodname);
    }
});

// dairy 
food_data.forEach((items) =>{
    if(items.category ==='Dairy'){
        console.log("[DAIRY ] : ",items.foodname);
    }
})

// calorie above 100 calories
food_data.forEach((items) =>{
    if(items.calorie > 100){
        console.log("CALORIES ABOVE 100 ] : ",items.foodname);
    }
})


// calorie below 100 calories
food_data.forEach((items) =>{
    if(items.calorie < 100){
        console.log("[CALORIES BELOW 100 ] : ",items.foodname);
    }
})

// highest protein content to lowest
food_data.sort((a,b) => b.protiens - a.protiens);

food_data.forEach((items) =>{
    console.log("[PROTEIN HIGH TO LOW ] : ",items.foodname);
})

// lowest carb content to highest
food_data.sort((a,b) => a.cab - b.cab);

food_data.forEach((items) =>{
    console.log("[CARB LOW TO HIGH ] : ",items.foodname);
})