import styles from "./about.module.css"

export default function PersonalInfoBox() {
    return (
      <div className={styles.personal_info_box}>

        <div>
          <img 
            src="/images/porfile_photo.jpg" 
            alt="Porfile photo" 
            className={styles.photo}
          ></img>
        </div>

        <div className={styles.contenedor_info_personal} >
           
            <p className={styles.title_info_personal}>
              I'm Franco Gonzalez.
            </p>
            <p className={styles.subtitle_info_personal}>
              Motion graphics designer and 
            </p>
            <p className={styles.subtitle_info_personal}>
              web developer.
            </p>
            
            <div className={styles.contenedor_data_info_personal}>
               
                <div>
                    <p className={styles.data1_info_personal}>Age</p>
                    <p className={styles.data1_info_personal}>Based In</p>
                    <p className={styles.data1_info_personal}>E-Mail</p>
                    <p className={styles.data1_info_personal}>Website</p>
                </div>

                <div>
                    <p className={styles.data2_info_personal} >20</p>
                    <p className={styles.data2_info_personal} >Buenos Aires, Argentina</p>
                    <p className={styles.data2_info_personal} >francogonzalez2303@gmail.com</p>
                    <p className={styles.data2_info_personal} >francogonzalez.com</p>
                </div>

            </div>

        </div>

      </div>
    )
  }
  