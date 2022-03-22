const bcrypt = require("bcrypt");

const password = "sebbe1234";
const saltRounds = 10;

const hashedPassword = bcrypt.hashSync(password, saltRounds);

const match = bcrypt.compareSync("sebbe1234", hashedPassword)
console.log(match)