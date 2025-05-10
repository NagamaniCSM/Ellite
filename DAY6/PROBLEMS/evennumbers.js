let n1 = 1;
let n2 = 100;
function evenNumbers(){
    for(let i=n1; i<=n2; i++)
        if(i % 2 == 0)
            console.log(i);
}
evenNumbers();