const arr = [1,2,3,1,2,4,3];
function occuranceOfElements(){
    const count = arr.reduce((acc,num) => {
        acc[num] = (acc[num] || 0)+ 1;
        return acc;
    },{});
    console.log("OCCURANCE OF EACH ELEMETS IN AN ARRAY:",count);
}
occuranceOfElements();
