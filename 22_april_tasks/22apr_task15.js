var a = 1;
let b = 2;
const c = 3;

function testScope() {
    console.log(a);
//   console.log("Before:", a, b, c); Referance error b ev ci hamar
//  qani vor nranq haytararvac en bayc gtnvum en temporory dead zone um ev nranc dimelis stanume enq referance error

  var a = 10;
  let b = 20;
  const c = 30;

  console.log("After:", a, b, c); 
}

testScope();
