import mongoose from "mongoose"

let user = "admin"
let password = "admin"
let dataBase = "database-editora"

mongoose.connect(`mongodb+srv://${user}:${password}@api-node-express-mongod.gtt3x.mongodb.net/${dataBase}`);
let db = mongoose.connection;

export default db;