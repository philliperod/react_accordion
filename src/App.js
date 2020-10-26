import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>Questions and Answers about Login</h3>
        <SingleQuestion questions={questions} />
      </section>
    </main>
  );
};

export default App;
