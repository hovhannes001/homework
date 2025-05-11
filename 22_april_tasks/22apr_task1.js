let libarary = {
    book1: {
        title: "Spitak janiq",
        author: "Jeck london",
        genres: ["comedy","arkacayin"],
        year: 2020
    },
    book2: {
        title: "Ev voch voq chmnac",
        author: "Agat qristi",
        genres: ["detective","arkacayin"],
        year: 1960
    },
    book3: {
        title: "Inchpes dzerq berel barekamner",
        author: "deyl qarnegi",
        genres: ["informatic","drama"],
        year: 1222
    }
}

libarary.book1.genres.push("gexarvestakan");
libarary.book2.year = 1999;
delete libarary.book2.author;

console.log(libarary);