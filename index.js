function distanceFromHqInBlocks(block) {
    const hq = 42;
    return Math.abs(block - hq);
}// Code your solution in this file!

function distanceFromHqInFeet(somevalue){
    return distanceFromHqInBlocks (somevalue) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}


function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return  25;
    }else{
        return (distance - 400) * 0.02;          
      }
}
