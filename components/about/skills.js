import styles from "./about.module.css"

export default function Skills() {
    return (
      <div className= {styles.skills}>
        <p className={styles.titles_about} >
          Software Skills.
        </p>
        <div className= {styles.container_logos_skills}>

            <img 
              src="/social_icons_svg/PS.svg" 
              alt="Photoshop Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/AI.svg" 
              alt="Illustrator Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/AI.svg" 
              alt="Illustrator Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/PR.svg" 
              alt="Premiere Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/AE.svg" 
              alt="After Effects Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/XD.svg" 
              alt="XD Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/Blender.svg" 
              alt="Blender Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/Java.svg" 
              alt="Java Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/JS.svg" 
              alt="Java Script Logo" 
              className={styles.logos_skills}
            ></img>

            <img 
              src="/social_icons_svg/React.svg" 
              alt="React Logo" 
              className={styles.logos_skills}
            ></img>

        </div>
      </div>
    )
  }