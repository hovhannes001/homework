let fs = require('fs');

fs.writeFileSync("permissions.txt","");
fs.chmodSync("permissions.txt",0o444);
fs.writeFile('permissions.txt', "baldi", 'utf-8', (err) => {
    if (err) {
        console.error("Error caught:", err);
    } else {
        console.log("File written successfully");
    }
});
