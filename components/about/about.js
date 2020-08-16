import PersonalInfoBox from './personal_info_box'
import Skills from './skills'
import ExperienceAndEducation from './experience_and_education'
import styles from './about.module.css'


export default function About() {
    return (
      <div className={styles.about}>
        <PersonalInfoBox />
        <Skills/>
        <ExperienceAndEducation/>
      </div>
    )
  }