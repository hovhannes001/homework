let obj = {
    method: function(){
        console.log(this);
    },
    method2: ()=>{
        console.log(this);
    }
}

obj.method();
obj.method2();

//vorovhetev arrow function@ ir this@ stanum e ayn jamanak erb kanchvum e ev ayn globalThis e bayc nerkayacvum e {}-ov
