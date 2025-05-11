
function arg() {
    console.log("Regular Function Arguments:", arguments);
}

const arg_arrow = () => {
        console.log("Arrow Function Arguments:", arguments);
};

arg(1, 2, 3, 4);
arg_arrow(1, 2, 3, 4);

//arrow functionner@ chunen irenc aradzin arguments object@ ev tpum e irenic verv scopi arguments@ tvyal depqum da globalne