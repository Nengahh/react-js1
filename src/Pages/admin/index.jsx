import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, QuizCard, Slider } from "../../Components/Atoms";
import { ProductSection, QuizSection } from "../../Components/Molecules";
import useCustomHook from "../../Hooks/customHook";
import CardComponent from "../../Components/Atoms/cardcomponen";
import QuestionList from "../../Components/Atoms/cardcomponen";

export default function Example() {
  let navigate = useNavigate();
  const products = useSelector((state) => state.product.products);
  

  const { value, handleChange } = useCustomHook(10);

  const clickMoreTerlaris = () => {
    navigate("/products/terlaris");
  };

  const clickMoreFavorit = () => {
    navigate("/products/favorit");
  };

  return (
    <div className="px-[10%] pb-20 w-full min-h-screen">
      <div className="pt-32"></div>
      {/* <Slider /> */}
{/* 
      <div>{value}</div>
      <Button title="Ini Button 30" onClick={() => handleChange(30)} /> */}


      {/* <ProductSection
        titleSection="Produk Terlaris"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreTerlaris()}
      /> */}

      {/* <QuizSection/> */}
      
      <CardComponent />
      
      {/* <ProductSection
        titleSection="Produk Favorit"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreFavorit()}
      /> */}
    </div>
  );
}
