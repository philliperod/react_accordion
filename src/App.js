import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;

// made some changes compared to the first commit
// 1) moved the map() method to App component
// 2) within the map() method, returned the Question component that has a key attribute of the prop.id value and used the spread operator to expand each prop thats found in the data component
