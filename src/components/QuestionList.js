import React  from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({data,removeQuestion,updateQuestion}) {
  const questionArray=data.map((question)=>{
    return (
          <QuestionItem updateQuestion={updateQuestion} removeQuestion={removeQuestion} key={question.id} question={question}/>
    )

  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionArray}</ul>
    </section>
  );
}

export default QuestionList;