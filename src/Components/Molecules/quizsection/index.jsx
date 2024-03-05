import React from 'react'
import { Card, TitleSection } from "../../Atoms";
import { useNavigate } from "react-router-dom";

function QuizSection() {
    const { titleSection, titleMore, data, clickMore } = props;

    let navigate = useNavigate();
  
    const handleClick = (id) => {
      navigate(`/quizzes/${id}`);
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
              diKlik={() => handleClick(item.id)}
            >
              <h3>{item.judul}</h3>
              <p>{item.deskripsi}</p>
              <p>Waktu Mulai: {item.waktu_mulai}</p>
              <p>Waktu Selesai: {item.waktu_selesai}</p>
            </Card>
          ))}
        </div>
      </div>
    );
}

export default QuizSection



