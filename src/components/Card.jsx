const Card = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="question">
      <summary className="questionHeading">
        {question}
        <button onClick={onToggle}>{isOpen ? "↑" : "↓"}</button>
      </summary>

      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

export default Card;
