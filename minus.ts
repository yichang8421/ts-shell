#!/usr/bin/env ts-node
let c: number = Number(process.argv[2]);
let d: number = Number(process.argv[3]);

if (Number.isNaN(c) || Number.isNaN(d)) {
    console.error("Error!");
    process.exit(1);
}
console.log(c - d);
process.exit(0);