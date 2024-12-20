import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/about.module.css'
import { useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'
import SendEmail from '../components/SendEmail'
import Footer from '../components/Footer'

const Author: NextPage = () => {

  const{ notification } = useContext(NotificationContext)

  return (
    <div>
      <Head>
        <title>The author | Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet"/> 
      </Head>
      <Header openProjects={()=>{}} />
      <main className={`${styles.mainContent} centerContainer`}>
            <section className={styles.contentBlock}>
              <img className={styles.profilePicture} src="https://apongpoh-portfolio.vercel.app/_next/image?url=%2Fimages%2Fportfolio.jpg&w=640&q=75" width={200} height={200} alt="" />
              <div className={styles.textBlock}>
                <h2>The author</h2>
                <p>
                  Hi there.
                   I&apos;m Apongpoh Gilbert, a <b>Full-Stack Developer and an Entry-Level Cybersecurity Analyst</b> based in Douala, Cameroon.
                   This project is a part of my Front-End and UI/UX skills. 
                   I&apos;ve studied the modern web development almost five years.
                </p>
              </div>
            </section>

            <section className={styles.contentBlock}>
              <div className={styles.textBlock}>
                <h2>With this project</h2>
                <p>
                  It was created as a <b>side project</b>, to improve my frontend programming and UI design <b>knowledge</b> and <b>skills</b>. 
                    Checking and test the new features of Next.js 12 framework and i&apos;ve tried to use conventional commits in git version control.
                </p>
              </div>
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_developer_activity_bv83_CHQjsEGXJ.svg?updatedAt=1636637987039" alt="" />
            </section>
            
            <section className={styles.contentRow}>
                <h2>Get in touch with me</h2>
                <div className={styles.contentBlock}>
                  <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/apongpoh-gilbert-allo-8152b3286/">
                      <img className={`${styles.socialItem} ${styles.linkLinkedin}`} src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_linkedin_icon_qW0U6Df8q.svg?updatedAt=1636635922444"/>                    
                    </a>
                    <a href="https://github.com/Apongpoh" className={`${styles.socialItem} ${styles.linkGithub}`} >
                      <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_github_icon_Df3Xanhbpl.svg?updatedAt=1636635922146"/>
                    </a>
                    <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_social_ideas_re_j5v4_8fl8yGcsFLY.svg?updatedAt=1636637986700" alt="" />
                  </div>
                  <div className={styles.textBlock}>
                    <SendEmail/>
                  </div>
                </div>
            </section>
      </main>
      <Footer/>
      {notification}
    </div>
  )
}

export default Author