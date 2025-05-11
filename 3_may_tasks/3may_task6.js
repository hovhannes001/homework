class  DataPipeline{
    async fetchData(url){
        this.response = await fetch(url);
        return await this.response.json();
    }
    filterData(data){
        
        return data.filter((elem) => elem.userId > 5);
    }
    logData(data){
        console.log(data);
    } 
}

let obj = new DataPipeline();

(async () => {
    let jsons = await obj.fetchData("https://jsonplaceholder.typicode.com/posts");
    let data = obj.filterData(jsons);
    obj.logData(data);
})();
