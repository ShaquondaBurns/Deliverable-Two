var vacationType = prompt("what kind of trip would you like to go on musical, tropical, or adventurous?");
var groupSize = prompt("How many are in your group");
var result = (" The temperture will be nice with plenty of festivals to attend. Dress warm!" );



//musical vaction//

if ((vacationType == "musical") && (vacationType!="tropical") && (( groupSize <=2) && (groupSize >=1))) {
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a first class flight to New Orleans. ${result}`);
}

else if ((vacationType == "musical") && (vacationType!="tropical") && ((groupSize <=5) && (groupSize >=3))){
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a helicopter to New Orleans ${result}`);
}

else if ((vacationType == "musical") && (vacationType!="tropical") && ((groupSize >=6) && (groupSize >5))){
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a charter flight to New Orleans. ${result}`);
}

//tropical vaction//

else if ((vacationType == "tropical") && (vacationType!="musical") && (( groupSize <=2) && (groupSize >=1))) {
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a first class flight to Beach Vacation in Mexico. ${result}`);
}

else if ((vacationType == "tropical") && (vacationType!="musical") && ((groupSize <=5) && (groupSize >=3))){
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a helicopter flight to Beach Vacation in Mexico. ${result}`);
}

else if ((vacationType == "tropical") && (vacationType!="musical") && ((groupSize >=6) && (groupSize >5))){
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a charter flight to Beach Vacation in Mexico. ${result}`);
}

//adventurous vaction//


else if ((vacationType == "adventurous") && (vacationType!="musical") && (( groupSize <=2) && (groupSize >=1))) {
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a first class flight to Whitewater Rafting the Grand Canyon. ${result}`);
}

else if ((vacationType == "adventurous") && (vacationType!="musical") && ((groupSize <=5) && (groupSize >=3))){
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a helicopter flight to Whitewater Rafting the Grand Canyon. ${result}`);
}

else if ((vacationType == "adventurous") && (vacationType!="musical") && ((groupSize >=6) && (groupSize >5))){
console.log(`Since you're a group of ${groupSize} going on a ${vacationType} vaction, you should take a charter flight to Whitewater Rafting the Grand Canyon. ${result}`);
}

