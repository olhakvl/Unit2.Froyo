// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
    "Please enter a list of froyo flavors separated by commas:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings.
const userInputArray = userInputString.split(",");

function flavorsCount(arrayList){
    const objOfFlavors = {};

    for(let i = 0; i < arrayList.length; i++){
        if(objOfFlavors[arrayList[i]]){
            objOfFlavors[arrayList[i]]++;
        }else{
            objOfFlavors[arrayList[i]] = 1;
        }
    }
    
    return objOfFlavors;
}

console.log(flavorsCount(userInputArray));
