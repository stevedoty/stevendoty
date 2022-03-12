import React from 'react';

let technologies = [
  {
    title:"Front End",
    list:[
      "one",
      "two",
      "three"
    ]
  },
  {
    title:"Back End",
    list:[
      "one",
      "two",
      "three"
    ]
  },
  {
    title:"Testing/Deployment",
    list:[
      "one",
      "two",
      "three"
    ]
  },
  {
    title:"Developer Tools",
    list:[
      "one",
      "two",
      "three"
    ]
  },
]

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
