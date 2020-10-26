import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ questions }) => {
  return (
    <>
      {questions.map((question) => {
        const { id, title, info } = question;
        return (
          <article key={id} className="question">
            <h4>{title}</h4>
            <p>{info}</p>
          </article>
        );
      })}
    </>
  );
};

export default Question;
