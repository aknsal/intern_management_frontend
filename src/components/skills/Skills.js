import React from 'react'
import Skill from './Skill'


export default function Skills() {
    const skills = ["Algorithms", "Data Structures", "Java", "MongoDB"]
  return (
    <div>
        {skills.map((skill) => (
                <Skill key={skill} skill={skill}/>
              ))}
    </div>
  )
}
