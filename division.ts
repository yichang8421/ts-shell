#!/usr/bin/env ts-node
{
    let a: number = Number(process.argv[2]);
    let b: number = Number(process.argv[3]);

    if (Number.isNaN(a) || Number.isNaN(b) || b===0) {
        if(b!=0){
            console.error("Error!");
            process.exit(1);
        }else{
            console.error("Error!");
            process.exit(2);
        }
    }
    console.log(a / b);
    process.exit(0);
}