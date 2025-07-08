import styles from "./About.module.css";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div data-aos="fade-left" className={styles.left}>
        <div className={styles.cube}>
          <div className={styles.box + " " + styles.box1}>
            <FontAwesomeIcon icon={faEnvira} />
          </div>

          <div className={styles.box + " " + styles.box2}>
            <FontAwesomeIcon icon={faHtml5} />
          </div>

          <div className={styles.box + " " + styles.box3}>
            <FontAwesomeIcon icon={faCss3} />
          </div>

          <div className={styles.box + " " + styles.box4}>
            <FontAwesomeIcon icon={faReact} />
          </div>

          <div className={styles.box + " " + styles.box5}>
            <FontAwesomeIcon icon={faJsSquare} />
          </div>

          <div className={styles.box + " " + styles.box6}>
            <FontAwesomeIcon icon={faGitAlt} />
          </div>
        </div>
      </div>
      
      <div data-aos="fade-right" className={styles.right}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.sub}>
          "Design is not just what it looks like and feels like. Design is how
          it works" - Steve Jobs
        </p>
        <p className={styles.description}>
          I’ve always been fascinated by the intersection of intelligence and creativity
           — a unique blend that drives my passion for Artificial Intelligence and Machine Learning.
            With a strong foundation in technology and an eye for design, I thrive on building
             intelligent systems that not only learn and adapt but also deliver intuitive and
              user-friendly experiences. I’m deeply interested in developing smart solutions 
              that solve real-world problems, whether it’s through predictive modeling, 
              natural language processing, or data-driven design. Guided by the belief 
              that “less is more,” I aim to create clean, efficient, and impactful products 
              where every detail serves a purpose. From training models to designing seamless interfaces,
               I’m excited to work on transformative AI projects with positive, forward-thinking teams.
        </p>
      </div>
    </div>
  );
};

export default About;
