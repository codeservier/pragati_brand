// src/components/TopInstructor.jsx
import React from "react";
import image1 from "../assets/instructor/sk.png";
import image2 from "../assets/instructor/ak.png";
import image3 from "../assets/instructor/vk.png";
import image4 from "../assets/instructor/image.png";
import image5 from "../assets/instructor/d.png";
import image6 from "../assets/instructor/v.png";

import Card from "../components/card/Card";
import TopInstructorCard from "./card/TopInstructorCard";

const TopInstructor = () => {
  const cardsData = [
    {
      title: "S.K. Singh",
      description: "B.SC,B.Ed Polytechnic Diploma (Electronics Engg.) | 8+ Years Exp. |PC Science, Hindi",
      image: image1,
    },
    {
      title: "Amit Singh",
      description: "M.SC (Math) MDCISM (Computer Diploma) | 10+ Years Exp. | Math reasoning, English",
      image: image2,
    },
    {
      title: "V.K. Singh",
      description: "B.SC (Math) Polytechnic Diploma (Electronics Engg.) | 9+ Years Exp.| Mathmetics, Physics",
      image: image3,
    },
    {
      title: "Abhishek Kumar",
      description: " B.Tech (CSE) | 6+ Years Exp.| DSA, Backend",
      image: image4,
    },
    {
      title: "Dinesh Kumar",
      description: "B.Tech (CSE) | 3+ Years Exp. | Mobile App. Development",
      image: image5,
    },
    {
      title: "Vimal Raj",
      description: "B.Tech (CSE) | 3+ Years Exp. | Web Development",
      image: image6,
    },
  ];

  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-border-l  text-primary my-12">
        Our Instructors
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <TopInstructorCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TopInstructor;
