import styles from "./about.module.css"

export default function ExperienceAndEducation() {
    return (
      <div className={styles.experience_and_education} >
      
        <div>
            <h3 className={styles.titles_about}>Laboral Experience.</h3>
            <div className={styles.experience_and_education}>
                <div className={styles.box_exp_and_edu}>
                    <h4 className={styles.title_box_exp_and_edu}>Congress City</h4>
                    <p className={styles.text_box_exp_and_edu}>General administrative</p>
                    <p className={styles.text_box_exp_and_edu}>2016 - Current</p>
                </div>
                <div className={styles.box_exp_and_edu}>
                    <h4 className={styles.title_box_exp_and_edu}>Freelance</h4>
                    <p className={styles.text_box_exp_and_edu}>Motion graphics designer</p>
                    <p className={styles.text_box_exp_and_edu}>2018 - Current</p>
                </div>
            </div>
        </div>
        
        <div>
            <h3 className={styles.titles_about}>Education.</h3>
            <div className={styles.box_exp_and_edu}>
                <h4 className={styles.title_box_exp_and_edu}>Software Engenier</h4>
                <p className={styles.text_box_exp_and_edu}>UTN FRBA, now in 3rd yeay</p>
                <p className={styles.text_box_exp_and_edu}>2018 - Current</p>
            </div>
        </div>

      </div>
    )
  }