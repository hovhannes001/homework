const obj = {
    name: "TestObject",
    regularFunc: function () {
      console.log("regularFunc this:", this);
    },
    arrowFunc: () => {
      console.log("arrowFunc this:", this);
    }
  };
  
  
  console.log("Global this:", this);
  

  obj.regularFunc(); 
  obj.arrowFunc();   
  
//regular functioni jamanak this@ objn e qani vor haytararvel e henc objecti mej
//arrow functionneri jamanak this@ voroshvum e aytnex vortex kanchvel e