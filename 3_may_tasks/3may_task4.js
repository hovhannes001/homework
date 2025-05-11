function simulateDownload(filename,callback){
    setTimeout(callback,2000);
}

simulateDownload("file1.txt",  () => {
    console.log("Download complete: ");
  });


