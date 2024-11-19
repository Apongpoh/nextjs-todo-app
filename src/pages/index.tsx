import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'
import Content from '../components/HomeContent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectModal from '../components/ProjectModal'

const Home: NextPage = () => {

  const {notification}    = useContext(NotificationContext)
  const [modal, setModal] = useState(<></>)
  const closeProjects = () => setModal(<></>)
  const openProjects  = () => setModal(<ProjectModal closeModal={closeProjects} />)
  
  return (
    <div>
      <Head>
        <title>Todo App | by Apongpoh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet"/> 
      </Head>
      <Header openProjects={openProjects}/>
      <Content/>
      <Footer />
      {modal}
      {notification}
    </div>
  )
}

export default Home
