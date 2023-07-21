import React, { useState } from 'react';
import './Secondpage.scss';
import backIcon from "../../assets/Icons/back.svg";
import bardIcon from "../../assets/Icons/Bard-logo.svg"
import plusIcon from "../../assets/Icons/bard-icon.svg"
import sendIcon from "../../assets/Icons/bard-send-icon-1.svg"

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
    <>
    <header className='main__header'>
        <img src={backIcon} alt='back icon' className='main__header-backIcon' />
        <h2 className='main__header-text'>Explore the AI Wonders</h2>
      </header>
       <main className='main'>

      <div className='main__greeting'>

        <img alt='bard-icon' src={bardIcon}></img>
      Hi there! I'm a smart computer program known as AI. I've learned a lot by gathering information from books and articles. When you ask me questions, I try my best to give you good answers. The more you ask, the smarter I become! And I always keep our chats safe! So, go ahead, ask me anything, and let's have fun learning together! 😊 
      </div>

      <h3 className='main__midText'>Ask your own question, or you can choose from the following prompts</h3>
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
        <div className='main__search'>
          <img className='main__search-plusIcon' alt="plus-icon" src={plusIcon}/>
          <input
            type='text'
            value={inputText}
            onChange={handleInputChange}
            className='main__search-input'
            placeholder='Enter a prompt here'
          />
          <img className='main__search-sendIcon' alt='send-icon' src={sendIcon}/>
          {/* Display the AI response */}
          {response.content && <div className='main__response'>{response.content}</div>}
        </div>
        {/* Submit button */}
        <button type='submit' style={{ display: 'none' }} />
      </form>
    </main>
    
    </>
 
  );
};

export default Secondpage;