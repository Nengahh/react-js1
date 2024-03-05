import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../Components/Atoms";
import { setProducts } from "../../service/product/productSlice";

export default function index() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const getProducts = useCallback(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="py-20 px-[10%]">
      <h1 className="pb-10 text-xl font-bold">All Products</h1>

      <div className="grid grid-cols-6 gap-4">
        {products.map((item, idx) => (
          <Card
            key={idx}
            image={item.image}
            item={item}
            diKlik={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
