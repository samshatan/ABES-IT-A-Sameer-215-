import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message); // Show success message
        setText(""); // Clear input
      })
      .catch((err) => console.error("Error:", err));
  }

  const handleRead = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/read")
      .then((res) => res.json())
      .then((data) => setOutput(data.message))
      .catch((err) => console.error("Error:", err));
  }

  return (
    <form style={{ margin: "20px", height: "auto", border: "2px solid black", textAlign: "center", gap: "10px", padding: "10px" }}>
      <h1> FS Model for Node</h1>
      <input
        style={{ width: "50%", padding: "10px" }}
        type="text"
        placeholder="Enter the text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleCreate} style={{ padding: "10px", backgroundColor: "#000000", color: "#ffffff", marginRight: "20px" }}>FS Create / Write</button>
      <button onClick={handleRead} style={{ padding: "10px", backgroundColor: "#000000", color: "#ffffff" }}>FS Read</button>
      <br />
      <br />
      <textarea
        style={{ width: "50%", padding: "10px" }}
        placeholder="Output"
        value={output}
        readOnly
      ></textarea>
    </form>
  )
}
export default Form;