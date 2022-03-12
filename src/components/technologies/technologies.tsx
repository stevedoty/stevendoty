import React from 'react';

let technologies = [
  {
    title:"Front End",
    list:[
"one",
"two",
"three"
    ]
  }
]

const Technologies = () => {
  return (
    <div className="Technologies">
      <div id="technologies-container">
        <h1>Technologies</h1>
        <div id="technologies-list-container">
          {technologies.map((item, key) => (
            <div className="technologies-item">
              <div>Title</div>
              <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
