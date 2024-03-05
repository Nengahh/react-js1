import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailProduct() {
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  let navigate = useNavigate();

  const getProducts = useCallback(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  //   {
  //     "id": 5,
  //     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     "price": 695,
  //     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //     "rating": {
  //         "rate": 4.6,
  //         "count": 400
  //     }
  // }

  return (
    <div className="px-[20%] py-20">
      <button className="mb-10" onClick={() => navigate(-1)}>
        back
      </button>
      <img
        src={product.image}
        className="w-full p-10 h-96 object-contain border"
      />
      <div className="pt-20">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <h1 className="py-5 text-4xl font-bold">${product.price}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

