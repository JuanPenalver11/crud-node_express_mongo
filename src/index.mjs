import express from "express";
import mongoose from "mongoose";
import routeProduct from "./routes/productsRoute.mjs"



mongoose
  .connect("mongodb://localhost:27017/CRUD")
  .then(() => console.log("connected to dataBS"))
  .catch((err) => console.log(err));


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// este codigo te permite introducir los productos usando 
// Body - form-encoded

app.use(routeProduct)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PORT in ${PORT}`);
});


app.get("/", (request, response) => {
  response.send("Holi");
});
