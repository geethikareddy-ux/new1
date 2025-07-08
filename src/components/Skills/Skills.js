import styles from "./Skills.module.css";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faNodeJs,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faBrain, faChartLine } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skills = [
    { icon: faPython, name: "Python", category: "Programming" },
    { icon: faJsSquare, name: "JavaScript", category: "Programming" },
    { icon: faReact, name: "React", category: "Frontend" },
    { icon: faHtml5, name: "HTML5", category: "Frontend" },
    { icon: faCss3, name: "CSS3", category: "Frontend" },
    { icon: faNodeJs, name: "Node.js", category: "Backend" },
    { icon: faDatabase, name: "SQL", category: "Database" },
    { icon: faGitAlt, name: "Git", category: "Tools" },
    { icon: faDocker, name: "Docker", category: "DevOps" },
    { icon: faBrain, name: "Machine Learning", category: "AI/ML" },
    { icon: faChartLine, name: "Data Analysis", category: "AI/ML" },
  ];

  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h1 data-aos="fade-up" className={styles.title}>
          Technical Skills
        </h1>
        <p data-aos="fade-up" className={styles.subtitle}>
          Technologies and tools I work with
        </p>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={styles.skillCard}
            >
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillCategory}>{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;