import React from "react";

function QuestionItem({ question,removeQuestion,updateQuestion}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  
  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then(r=>r.json())
    .then(()=>removeQuestion(id))
      
  }
  function handleChangeQuestion(e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        correctIndex:parseInt(e.target.value,10),

      }),
    })
      .then((r) => r.json())
      .then((data) => updateQuestion(data,id));
    }
    return (
      <li>
        <h4>Question {id}</h4>
        <h5>Prompt: {prompt}</h5>
        <label>
          Correct Answer:
          <select onChange={handleChangeQuestion} defaultValue={correctIndex}>{options}</select>
        </label>
        <button onClick={()=>handleDelete(id)}>Delete Question</button>
      </li>
    );
  }
  
  export default QuestionItem;