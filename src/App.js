import { useState } from "react";
import "./App.css";
import FeedbackModal from "./modal/FeedbackModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && <FeedbackModal onClick={closeModalHandler} />}
      <p>Click the button to open the Feedback Modal</p>
      <button onClick={openModalHandler}>Feedback Modal</button>
    </div>
  );
}

export default App;
