import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src={require("../../img/1750838795195.jpg")} 
                alt="Gowtham Sree Charan Reddy" 
                className={styles.profileImage}
              />
            </div>
          </div>
          
          <div className={styles.textSection}>
            <div className={styles.textBox}>
              <h1 data-aos="fade-up" className={styles.title}>About Me</h1>
              <p data-aos="fade-up" data-aos-delay="100" className={styles.quote}>
                "Design is not just what it looks like and feels like. Design is how it works" - Steve Jobs
              </p>
              <p data-aos="fade-up" data-aos-delay="200" className={styles.description}>
                I've always been fascinated by the intersection of intelligence and creativity
                — a unique blend that drives my passion for Artificial Intelligence and Machine Learning.
                With a strong foundation in technology and an eye for design, I thrive on building
                intelligent systems that not only learn and adapt but also deliver intuitive and
                user-friendly experiences.
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className={styles.description}>
                I'm deeply interested in developing smart solutions that solve real-world problems,
                whether it's through predictive modeling, natural language processing, or data-driven design.
                Guided by the belief that "less is more," I aim to create clean, efficient, and impactful
                products where every detail serves a purpose.
              </p>
              <p data-aos="fade-up" data-aos-delay="400" className={styles.description}>
                From training models to designing seamless interfaces, I'm excited to work on
                transformative AI projects with positive, forward-thinking teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;