foo(); 

function foo() {
  console.log("foo() called");
}

bar();

const bar = function() {
  console.log("bar() called");
};

//arajin@ function declaration e vor@ entarkvum e jsi koxmic hoistingi inchi patcharov el ashxatum e isk bar function expression e vor@ chi entarkvum hoistingi
//nuynisk ete varov haytararenq kta vor object@ function che qani vor var b;n haytnvume verevum ev handisanum e undefined ev undefined() this is not function