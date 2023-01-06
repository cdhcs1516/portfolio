import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaDocker,
  FaNodeJs,
  FaSwift,
  FaBootstrap,
  FaAws,
  FaDatabase,
} from 'react-icons/fa';

const ICONS = Object.freeze({
  aws: <FaAws className="skill-icon" />,
  bootstrap: <FaBootstrap className="skill-icon" />,
  css3: <FaCss3 className="skill-icon" />,
  database: <FaDatabase className="skill-icon" />,
  docker: <FaDocker className="skill-icon" />,
  github: <FaGithub className="skill-icon" />,
  html5: <FaHtml5 className="skill-icon" />,
  java: <FaJava className="skill-icon" />,
  javascript: <FaJs className="skill-icon" />,
  nodejs: <FaNodeJs className="skill-icon" />,
  python: <FaPython className="skill-icon" />,
  react: <FaReact className="skill-icon" />,
  swift: <FaSwift className="skill-icon" />,
});

const Skills = ({ skills }) => {
  return (
    <div id='skills' className='skills'>
      <h2 className='title'>Skills</h2>
      <div className='skill-holder'>
        {skills.map((skill, index) => {
          return (
            <i key={index} className='skill-cards'>
              {ICONS[skill]}
              <p className='skill'>{skill}</p>
            </i>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
