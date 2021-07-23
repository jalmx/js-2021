
let i = 0
while(i < 10){
    console.log(i);
    i++

    // if(i == 5){
    //     break
    // }

    if(i == 6){
        continue
    }
    console.log("no hace continue " + i);
}