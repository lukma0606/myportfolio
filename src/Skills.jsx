import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    const skills = [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Angular", level: 50 },
        { name: "Bootstrap/Tailwind CSS", level: 85 },,
        { name: "TypeScript", level: 70 },
        { name: "Redux", level: 75 },
      ];
  return (

      <div className="skills-container">
        <h2 className="text-center nested-sub-heading">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <ProgressBar
                completed={skill.level}
                bgColor="#3498db"
                height="10px"
                isLabelVisible={false}
                borderRadius="5px"
                animateOnRender
              />
            </div>
          ))}
        </div>
      </div>
 
  )
}

export default Skills
