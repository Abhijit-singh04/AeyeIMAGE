import React from "react";
import AI from "../../ai1.jpg";
import "./about.css";

function About() {
  return (
    <div className="about">
      <figure>
        <img src={AI} alt="AI image" />
      </figure>
      <div className="about-info">
        <h1>Artificial Intelligence</h1>
        <mark style={{color:"#0075f6" , fontWeight:"bold" , backgroundColor:"black" , textShadow:"10px 10px 5px rgb(246 246 246 / 21%)"}}><em>
          AI is likely to be either the best or the worst thing to happen to
          humanity.
        </em></mark>
        <p>
          At its simplest form, artificial intelligence is a field, which
          combines computer science and robust datasets, to enable
          problem-solving. It also encompasses sub-fields of machine learning
          and deep learning, which are frequently mentioned in conjunction with
          artificial intelligence. These disciplines are comprised of AI
          algorithms which seek to create expert systems which make predictions
          or classifications based on input data.
        </p>
      </div>
    </div>
  );
}

export default About;
