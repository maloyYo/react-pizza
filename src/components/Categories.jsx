import React from "react";

export default function Categories({ items }) {
    
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <div>
      <div className="categories">
        <ul>
          {items.map((name, index) => (
            <li
              onClick={() => setActiveItem(index)}
              key={`${name}_${index}`}
              className={activeItem === index ? "active" : ""}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
