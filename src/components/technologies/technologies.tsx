import React from 'react';
import {MAIN_DATA} from '../../data';
console.log(MAIN_DATA);

let technologies = MAIN_DATA.TECHNOLOGIES_DATA;

const Technologies = () => {
  return (
    <div className="Technologies">
      <div id="technologies-container">
        <h1>Technologies</h1>
        <div id="technologies-list-container">
          {technologies.map((item, key) => (
            <div className="technologies-item" key={key}>
              <div>{item.title}</div>
              <ul>
                {item.list.map((subitem,key) => (
                  <li key={key}>{subitem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
