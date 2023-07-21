import React, { useState } from 'react';
import './Secondpage.scss';

const Secondpage = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = async (event, prompt) => {
    event.preventDefault();
    const finalPrompt = prompt || inputText.trim();

    try {
      // API call to http://localhost:8082/api/gpt3
      const response = await fetch('http://localhost:8082/api/gpt3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the response from the server.');
      }

      const data = await response.json();
      setResponse(data.response || 'No response from AI.');
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error occurred while fetching data.');
    }
  };

  const handleButtonClick = (event) => {
    const buttonText = event.target.innerText;
    handleFormSubmit(event, buttonText);
  };

  return (
    <main className='main'>
      <header className='main__header'>
        <img alt='back icon' className='main__header-backIcon' />
        <h2 className='main__header-text'>Explore the AI Wonders</h2>
      </header>

      <div className='main__greeting'>
        {/* Your greeting text */}
      </div>

      <h3 className='main__midText'>Lorem ipsum dolor sit lorefkn;awuifha;wuioh.</h3>

      {/* Use a form for input and submit */}
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <div className='main__buttons'>
          <button
            type='button'
            className='main__buttons-button'
            onClick={handleButtonClick}
          >
            How does AI work?
          </button>
          <button
            type='button'
            className='main__buttons-button'
            onClick={handleButtonClick}
          >
            What do you know about me?
          </button>
          <button
            type='button'
            className='main__buttons-button'
            onClick={handleButtonClick}
          >
            What ethical concerns are there with AI, and how are they handled?
          </button>
        </div>
        <div>
          <input
            type='text'
            value={inputText}
            onChange={handleInputChange}
            className='main__search'
            placeholder='Your question here'
          />
          {/* Display the AI response */}
          {response.content && <div className='main__response'>{response.content}</div>}
        </div>
        {/* Submit button */}
        <button type='submit' style={{ display: 'none' }} />
      </form>
    </main>
  );
};

export default Secondpage;