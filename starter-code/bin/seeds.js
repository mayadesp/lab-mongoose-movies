require("dotenv").config();
require("./../app");

const celebrityModel = require("./../models/celebrity");

const celebrities = [
    {
    name: "Nabilla",
    occupation: ["mannequin", "téléréalité"],
    catchPhrase: "t'es une fille mais t'as pas de shampoing, allo quoi?",
    },
    {
    name: "Alizee",
    occupation: ["chanteuse"],
    catchPhrase: "moi je m'appelle Lolita",

    },
    {
    name: "Patrick Sebastien",
    occupation: ["chanteur", "animateur"],
    catchPhrase: "et on fait tourner les serviettes",

    },
]

celebrityModel.create(celebrities)
.then(dbRes => {
    console.log (dbRes)
})
.catch(dbErr => {
    console.log(dbErr)
})