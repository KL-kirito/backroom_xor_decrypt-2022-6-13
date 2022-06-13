const xor = require("xor-crypto-js");
const fs = require("fs");
const rl = require("readline");
const rl2 = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl2.on("line", function(line) {
    console.log(xor.decrypt(line, fs.readFileSync("./dispatchKey.bin", "base64")));
}).on("close", function() {
    console.log(fs.readFileSync("./dispatchKey.bin", "base64"));
});