import "reflect-metadata";
import express from "express";

import "./database";

const app = express()

app.use(express.json())

app.get("/test", (request, response) => {

  return response.status(200).json({message: "Hello Nlw"})
})




app.listen(3333,() => console.log("Server is Running!"))