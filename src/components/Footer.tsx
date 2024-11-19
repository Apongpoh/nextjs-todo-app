import styles from "../styles/components/Footer.module.css"
import Link from "next/link"

export default function Footer(){
    return(

      <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link href="/author">
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/author-link_tjA9pExUts.svg?updatedAt=1636587867931" />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/about-link_BXBjy6t64.svg?updatedAt=1636587867944" />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
    )
}