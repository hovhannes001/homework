class FileUploader{
    constructor(filename){
        this.filename = filename;
    }
    startUpload(){
        setTimeout(()=>{
            console.log(`Completed upload ${this.filename}`);
            this.notifyUser();
    },2000);
        console.log(`Starting upload ${this.filename}`);
    }
    notifyUser(){
        console.log(`Notification: ${this.filename} has been successfully uploaded.`);
    }
}

let obj = new FileUploader("file1.txt");
obj.startUpload();