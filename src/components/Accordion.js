import React, { useState } from "react";

const Accordion = ({ items }) => {
  //first element to keep track of => piece of state;
  //second element is function to upadte piece of state(first element)
  //null => initial value for this piece of state
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (index) => {
    setActiveIndex(index);
  };
  const renderedImtes = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedImtes}</div>;
};

export default Accordion;
