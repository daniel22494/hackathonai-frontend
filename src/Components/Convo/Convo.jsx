// import React, { useState } from "react";
import "./Convo.scss";

function Convo() {
  // const [inputText, setInputText] = useState("");
  // const [response, setResponse] = useState("");

  // const handleInputChange = (event) => {
  //   setInputText(event.target.value);
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:8082/api/gpt3", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ prompt: inputText }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch the response from the server.");
  //     }

  //     const data = await response.json();
  //     setResponse(data.response);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  
  // };
  

  return (
    // <section className="convo">
    //   {/* ... */}
    //   <form onSubmit={handleFormSubmit}>
    //     <input type="text" value={inputText} onChange={handleInputChange} />
    //     <button type="submit">Submit</button>
    //   </form>
    //   <div>
    //     <h3>Response from GPT-3:</h3>
    //     <p>{response.content}</p>
    //   </div>
    // </section>

    <section className="convo">
      <div className="convo__today">Today</div>
    <div className="right">
        <div className="convo__text">
            <p className="convo__text-content">
                Hey what have you been up to?
            </p>
        </div>
    </div>
    <div className="left">
        <div className="convo__text">
            <p className="convo__text-content">
                not much, same as usual
            </p>
        </div>
    </div>
    <div className="right">
        <div className="convo__text">
            <p className="convo__text-content">
                What happened with your presentation?
            </p>
        </div>
    </div>
</section>

  );
}

export default Convo;

