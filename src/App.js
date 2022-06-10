
import './App.css';
import { useState } from "react";

function App() {
  const [state,setState] = useState({
    skills:[{skill:"Javascript",level:"4"}],
    skill:"",
    level:"3"
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newSkill = {
      skill: state.skill,
      level:state.level
    };
  
  setState({
    skills: [...state.skills,newSkill],
    skill:"",
    level:"3"
    });
    console.log(...state.skills,newSkill);
  }

  
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]:e.target.value
    });
  }

  return(
    <section>
      <h2>dev skills</h2>
      <hr/>
      {state.skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div><div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form onSubmit={handleSubmit}
      >
        <label>
          <span>skills</span>
          <input
           name="skill" 
          value={state.skill} 
          onChange={handleChange}
          />
        </label>
        <label>
          <span>level</span>
          <select 
          name="level" 
          value={state.level}
          onChange={handleChange}
          >
            
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        </label>
        <button>add skill</button>
      </form>
    </section>
   )
  }
export default App;
