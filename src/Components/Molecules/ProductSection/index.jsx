import React from "react";
import { Card, TitleSection } from "../../Atoms";
import { useNavigate } from "react-router-dom";

export default function ProductSection(props) {
  const { titleSection, titleMore, data, clickMore } = props;

  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <TitleSection
        title={titleSection}
        titleMore={titleMore}
        lihatSemua={clickMore}
      />

      <div className="flex justify-between">
        {data.map((item, index) => (
          <Card
            key={index}
            item={item}
            className="w-[16%]"
            image={item.image}
            diKlik={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
