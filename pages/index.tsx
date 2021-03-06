import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Byte Love Me</title>
        <meta name="description" content="Byte Love Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        ByteLoveMe
        </h1>

        <p className={styles.description}>
         byte love me
        </p>

      </main>

      <footer className={styles.footer}>
        © ByteLoveMe With ♥️
      </footer>
    </div>
  )
}
