import React from 'react';

let technologies = [
  {
    title:"Front End",
    list:[
      "Javascript",
      "Typescript",
      "(ES7)",
      "React",
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "jQuery",
      "Bootstrap",
      "MaterialUI"
    ]
  },
  {
    title:"Back End",
    list:[
      "Node",
      "Express",
      "MySQL",
      "MongoDB",
      "Python"
    ]
  },
  {
    title:"Testing/Deployment",
    list:[
      "Docker",
      "Jest",
      "Firebase",
      "Google Cloud Server",
      "(CI/CD)"
    ]
  },
  {
    title:"Developer Tools",
    list:[
      "Vim",
      "Git",
      "Webpack",
      "Babel",
      "npm",
      "yarn",
      "Agile methodology"
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
