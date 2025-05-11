async function api(){
    this.response = await fetch("https://jsonplaceholder.typicode.com/posts");
    this.jsons = await this.response.json();
    console.log(jsons[1]);
}

api();