// import React, { useState } from "react";
// import "./Convo.scss";

// function Convo() {
//   const [inputText, setInputText] = useState("");
//   const [response, setResponse] = useState("");

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8082/api/gpt3", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt: inputText }),
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch the response from the server.");
//       }

//       const data = await response.json();
//       setResponse(data.response);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   return (
//     <section className="convo">
//       {/* ... */}
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" value={inputText} onChange={handleInputChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h3>Response from GPT-3:</h3>
//         <p>{response.content}</p>
//       </div>
//     </section>
//   );
// }

// export default Convo;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Convo.scss";

function Convo() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const fullPrompt = `I have to respond to "Heyy, what have you been up to?" please rewrite my response to make it 1 articulate clear sentence: ${inputText}`;

    try {
      const response = await fetch("http://localhost:8082/api/gpt3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: fullPrompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch the response from the server.");
      }

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <section className="convo">
      <div className="convo__prompt">
        <img className="convo__prompt--img" src="" alt="Profile Picture"/> 
        <p className="convo__prompt--text"> Heyy what have you been up to? </p> </div>
      {/* ... */}
      {response && (
      <div>
        <Link to="/info"> <p className="convo__form--link"> Want tot learn more about AI texts?</p> </Link>
        <p className="convo__form--prompt"> How about saying</p>
        <p className="convo__form--response">{response.content}</p>
      </div>
         )}
      <form className="convo__form" onSubmit={handleFormSubmit}>
        <input  className="convo__form--input" type="text" value={inputText} onChange={handleInputChange} />
        <button className="convo__form--button" type="submit"> <img src="" alt="submit button"/> </button>
      </form>
      
    </section>
  );
}

export default Convo;

