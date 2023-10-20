import Head from "next/head"
import { useState } from "react"
import styles from "../styles/index.module.css"

const index = () => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  

  const submitFunction = (event) => {
    event.preventDefault()
    if(typeof window !== 'undefined') {
      window.Telegram.WebApp.sendData(JSON.stringify({name: name, number: tel}))
      
    }
  }
  return (
    <>
        <Head>
            <script src="https://telegram.org/js/telegram-web-app.js"></script>
        </Head>
        <div className={styles.container}>

        <form className={styles.form} >
          <div className={styles.itemForm} >
          <p>Имя</p>
              <input className={styles.input} style={{paddingLeft:"7px"}} pattern="^[а-яА-ЯёЁ]+$" maxLength="20" placeholder="Иван" required name="name"  onChange={(event) => setName(event.target.value)} />
          </div>
              <div className={styles.itemForm}>
                <p>Номер телефона</p>
                <i className={styles.numberStart} aria-hidden="true">+7</i>
              <input className={styles.input} type="text" pattern="^(([0-9]){10})$" name="tel" placeholder={"9xx-xxx-xx-xx"} required  maxLength="10" onChange={(event) => setTel("7" + event.target.value)} />
              </div>
              <button type="submit" onSubmit={(event) => submitFunction(event)} className={styles.buttonSubmit}>Отправить</button>
        </form>
        </div>
    </>
  )
}

export default index