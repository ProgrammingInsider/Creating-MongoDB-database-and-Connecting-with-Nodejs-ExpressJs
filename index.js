import express from 'express'
const app = express();

// Folders
import conn from './Db/db.js';


app.use(express.json()); 
app.use(express.urlencoded({extended:true}))

app.listen(5000,()=>{
   console.log("Server is running on port 5000");
});