import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1>Question Answer Section</h1>
            <p>Question 1. Difference between props and state?</p>
            <p>Answer : The State is owned locally and the component itself update it. Props owned and read only by parent</p>
            <p>Question 2. How does useState works?</p>
            <p>Answer : It is a kinds of hook that allow to add state to a function component. It returns an array with two value. One is current state and a function to update it</p>
            <p>Question 3. Explain useEffect works without Data load part ?</p>
            <p>Answer :It can use to auto loading. Remove stress of continuous reloading using dependency element</p>
            <p>Question 4. How does react works?</p>
            <p>Answer : React is efficient, flexible javascript library. It is used to create modular user interface.. It promotes the development of reusable UI components that display dynamic data. </p>
        </div>
    );
};

export default Question;