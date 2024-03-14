import { Router } from "express";
import { getProduct, productById, newProduct, updateProduct, deleteProduct } from "../controlers/product.control.mjs";


const route = Router()


route.post("/api/products", newProduct );

route.get("/api/products", getProduct );

route.get("/api/products/:id",productById );

route.patch("/api/products/:id", updateProduct);

route.delete("/api/products/:id", deleteProduct )

export default route