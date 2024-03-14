import { Product } from "../models/product.model.mjs";

export const getProduct = async (request, response) => {
    try {
      const products = await Product.find({});
      response.status(200).json(products);
    } catch (err) {
      response.status(500).json({ message: "error.message" });
    }
  }


  export const newProduct = async (request, response) => {
    try {
      const newProduct = await Product.create(request.body);
      response.status(200).json(newProduct);
    } catch (err) {
      response.status(500).json({ message: "error.message" });
    }
  }

  export const productById = async (request, response) => {
    try {
      const { id } = request.params;
      const product = await Product.findById(id);
      response.status(200).json(product);
    } catch (err) {
      response.status(500).json({ message: "error.message" });
    }
  }

  export const updateProduct = async (request, response) => {
    try {
      const { id } = request.params;
      const product = await Product.findByIdAndUpdate(id, request.body);
      if (!product)
        return response.status(400).json({ message: "Product not found" });
      const updatedProduct = await Product.findById(id)
      response.status(200).json(updatedProduct);
    } catch (err) {
      response.status(500).json({ message: "error.message" });
    }
  }

  export const deleteProduct = async(request, response)=>{
    try{
        const { id } = request.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct)
            return response.status(404).json({ message: "Product not found" });
        response.status(200).json('Product deleted successfully');
    }catch(err){
        response.status(500).json({ message: "error.message" });
    }
}

  