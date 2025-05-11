class Jsonreader{
    constructor(url){
        this.url = url;
    }
    async json() {
        this.response = await fetch(this.url);
        this.jsons = await this.response.json();
    }
    cmp(foo) {
        return this.jsons.filter(foo);
    }
}

let reader = new Jsonreader("https://jsonplaceholder.typicode.com/posts");
async function processJson() {
    await reader.json();
    let result = reader.cmp((elem) => {
        return elem.userId > 5 && elem.userId < 7;
    });
    console.log(result);
}

processJson();


