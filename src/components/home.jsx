import React, { useState } from "react";
import "./styles/Home.css";
import { imageSlider } from "./Data/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";

export const HomePage = () => {
  const [slide, setSlide] = useState(0);
  console.log(slide);
  const handleprev = () => {
    setSlide(slide == 0 ? imageSlider.length - 1 : slide - 1);
  };
  const handleNext = () => {
    setSlide(slide == imageSlider.length - 1 ? 0 : slide + 1);
  };
  return (
    <div className="container">
      <section>
        <IconButton
          className="icon"
          sx={{
            position: "absolute",
            marginLeft: "-480px",
            marginTop: "175px",
          }}
          onClick={handleprev}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: "45px" }} />
        </IconButton>
        <IconButton
          className="icon"
          sx={{ position: "absolute", marginLeft: "400px", marginTop: "175px" }}
          onClick={handleNext}
        >
          <ArrowForwardIosIcon sx={{ fontSize: "45px" }} />
        </IconButton>
        {imageSlider.map((e, index) => {
          return (
            <div classname="slides" key={e.id}>
              {index == slide && <img src={e.image} alt="image" />}
            </div>
          );
        })}
      </section>
      <div className="about">
        <p className="Allen">Know about Allen</p>
        <p>
          A Premier Coaching Institute for the preparation of JEE
          (Main+Advanced), JEE (Main), Pre-Medical (NEET-UG), Pre-Nurture &
          Career Foundation (Class VI to X, NTSE & Olympiads) and Commerce
          Education (11th, 12th, CA & CS). The Institute is well regarded for
          the high quality entrance exam preparation and produces best results
          year after year. At ALLEN , We focus on building a strong foundation
          of knowledge and concepts in students for their success and provide an
          excellent platform for the preparation of competitive exams and board
          level education. The best academic support and personal care which we
          provide to the students, helps them meet their career goals and
          objectives. The core values of Determination, Honesty, Authenticity,
          Integrity, Devotion, Humanism, Holistic Learning, Social Ethics, and
          concern for society & environment are all closely interwoven into the
          fiber of our academic programs. Our highly qualified and most
          experienced faculties are dedicated and committed to student’s
          complete success and provide assistive surroundings to contribute to
          their social, cultural, academic and all-round development. To our
          students, we impart value-based career education, abundant resources,
          and individual attention. To the parents, we have a responsibility to
          nurture ethical and responsible career leadership in the children. To
          the society, we provide a lifelong connection to ethics and excellence
          in global leaders.
        </p>
        {/* <img src="https://i.ytimg.com/vi_webp/RaE69WOpg7I/sddefault.webp" className="advertisement" /> */}
      </div>
    </div>
  );
};
