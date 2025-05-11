class UserFetcher{
    constructor(url){
        this.baseurl = url;
    }

    async getuser(userid){
        this.response = await fetch(`${this.baseurl}/users/${userid}`);
        this.jsons = await this.response.json();
        
    }
    async printusername(userid){
        await this.getuser(userid);
        console.log(this.jsons["name"]);
    }

}

let obj = new UserFetcher("https://jsonplaceholder.typicode.com");
obj.printusername(2);