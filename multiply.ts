#!/usr/bin/env ts-node
{
    let a: number = Number(process.argv[2]);
    let b: number = Number(process.argv[3]);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.error("Error!");
        process.exit(1);
    }
    console.log(a * b);
    process.exit(0);
}