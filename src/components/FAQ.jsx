import React, { useState } from 'react';

function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8">
      <div className="md:w-1/2">
        {/* Conteúdo da primeira coluna */}
        <h1 className="text-5xl font-bold text-center">FAQ</h1>
        <p className="text-xl font-medium text-center mt-4">Descrição breve ou imagem aqui</p>
        {/* Adicione sua imagem aqui, se necessário */}
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        {/* Conteúdo da segunda coluna */}
        <div
          className={`collapse collapse-plus hover:bg-gray-100 ${
            activeAccordion === 1 ? 'open' : ''
          }`}
        >
          <input type="radio" name="my-accordion-3" />
          <div
            className="collapse-title text-xl font-medium cursor-pointer"
            onClick={() => handleAccordionClick(1)}
          >
            Click 1
          </div>
          <div className={`collapse-content ${activeAccordion === 1 ? 'open' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur nobis quae
              magni eius consequatur praesentium nisi illum aperiam atque animi quas delectus
              aspernatur suscipit provident, laborum laboriosam voluptatem cupiditate.
            </p>
          </div>
        </div>
        <div
          className={`collapse collapse-plus hover:bg-gray-100 ${
            activeAccordion === 2 ? 'open' : ''
          }`}
        >
          <input type="radio" name="my-accordion-3" />
          <div
            className="collapse-title text-xl font-medium cursor-pointer"
            onClick={() => handleAccordionClick(2)}
          >
            Click 2
          </div>
          <div className={`collapse-content ${activeAccordion === 2 ? 'open' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur nobis quae
              magni eius consequatur praesentium nisi illum aperiam atque animi quas delectus
              aspernatur suscipit provident, laborum laboriosam voluptatem cupiditate.
            </p>
          </div>
        </div>
        <div
          className={`collapse collapse-plus hover:bg-gray-100 ${
            activeAccordion === 3 ? 'open' : ''
          }`}
        >
          <input type="radio" name="my-accordion-3" />
          <div
            className="collapse-title text-xl font-medium cursor-pointer"
            onClick={() => handleAccordionClick(3)}
          >
            Click 3
          </div>
          <div className={`collapse-content ${activeAccordion === 3 ? 'open' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur nobis quae
              magni eius consequatur praesentium nisi illum aperiam atque animi quas delectus
              aspernatur suscipit provident, laborum laboriosam voluptatem cupiditate.
            </p>
          </div>
        </div>
        {/* Repita os elementos do accordion aqui conforme necessário */}
      </div>
    </div>
  );
}

export default FAQ;




