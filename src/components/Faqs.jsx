import { useState } from "react";
import Card from "./Card";
import { earlyLife, wars, revolution, edu, ir } from "./questions";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState({});

  const sections = [
    {
      title: "Atatürk'ün Hayatı",
      questions: earlyLife,
      id: 10
    },
    {
      title: "Atatürk ve Türk İstiklal Savaşı",
      questions: wars,
      id: 1
    },
    {
      title: "Atatürk'ün İlkeleri ve Devrimleri",
      questions: revolution,
      id: 20
    },
    { title: "Atatürk ve Eğitim", questions: edu, id: 30 },
    {
      title: "Atatürk'ün Uluslararası Rolü",
      questions: ir,
      id: 40
    }
  ];

  const handleToggle = (sectionId) => {
    if (sectionId === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(sectionId);
    }
  };

  return (
    <article className="wrapper">
      <h1 className="mainHeading">ATATÜRK 1881-193∞</h1>
      {sections.map((section) => (
        <section className="sections" key={section.id}>
          <h2 className="sectionHeadings">{section.title}</h2>
          {section.questions.map((question) => (
            <Card
              key={question.id}
              question={question.question}
              answer={question.answer}
              isOpen={question.id === isOpen}
              onToggle={() => handleToggle(question.id)}
            />
          ))}
        </section>
      ))}
    </article>
  );
};

export default Faqs;
