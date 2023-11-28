import { useState } from "react";
function Form() {
  let [text, setText] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  function dynamictext(event) {
    setText(event.target.value);
  }

  function onsubmitEventHandler(event) {
    event.preventDefault();
    return <h1>the message is {text}</h1>;
    console.log(text);
  }
  return (
    <div>
      <form onSubmit={onsubmitEventHandler}>
        <label htmlFor="message">message:</label>
        <input
          type="text"
          name="message"
          id="message"
          value={text}
          onChange={dynamictext}
        />
        {/* it has a value attribut and that value is the - "text" value that is coming from state
        now i am saying that when the inputbox changes what i am doing is i am setting the "text" to what
        the textbox changes as*/}
        <button type="submit"> submit</button>
        {}
      </form>
    </div>
  );
}

export default Form;
