const fs = require('fs');

console.log("Starting synchronous file read...");
const startSync = Date.now();
const dataSync = fs.readFileSync('./file.txt', 'utf8');
const endSync = Date.now();
console.log("Synchronous file read completed.");
console.log(`Time taken (sync): ${endSync - startSync} ms`);

console.log("\nStarting asynchronous file read...");
const startAsync = Date.now();
fs.readFile('./file.txt', 'utf8', (err, dataAsync) => {
    if (err) {
        console.error("Error reading file asynchronously:", err);
        return;
    }
    const endAsync = Date.now();
    console.log("Asynchronous file read completed.");
    console.log(`Time taken (async): ${endAsync - startAsync} ms`);
});
