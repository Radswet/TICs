import app from "./app";
import "./database/database";


app.listen(app.get("port") || 3000);
console.log(`server on port ${app.get("port")}`);