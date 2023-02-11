import styles from "./styles/Subheader.module.css";

export default function Form() {
  return (
    <div className={styles.formContainer}>
      <h1>Your details</h1>
      <p>All fields are required</p>

      <div className={styles.inputFieldsContainer}>
        <div className={styles.FormInputfields}>
          <label>Full Name</label>
          <input type="Text" placeholder="John Doe" />
        </div>
        <div className={styles.FormInputfields}>
          <label>Email</label>
          <input type="email" placeholder="johndoe@example.com" />
        </div>
        <div className={styles.FormInputfields}>
          <label>Country</label>
          <input type="text" />
        </div>
        <div className={styles.FormInputfields}>
          <label>Years of Experience</label>
          <input type="text" placeholder="5years" />
        </div>
        <div className={styles.FormInputfields}>
          <label>Years of Experience</label>
          <input type="file" />
        </div>
      </div>
    </div>
  );
}
