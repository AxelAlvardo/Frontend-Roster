import { Fade } from 'react-awesome-reveal'
import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.media_logo}>
                    <Fade direction='down' triggerOnce={true}>
                        <img className={styles.logo} src="/image/logo.png" alt="logo" />
                    </Fade>

                    <Fade direction='down' triggerOnce={true} delay={200}>
                        <h1 className={styles.title_app}>Media Roster</h1>
                    </Fade>
                </div>

                <nav className={styles.navbar}>
                    <Fade direction='down' triggerOnce={true}>
                        <Link to={'/'} className={styles.movie}>Peliculas</Link>
                    </Fade>

                    <Fade direction='down' triggerOnce={true} delay={200}>
                        <Link to={'/serie'} className={styles.serie}>Series</Link>
                    </Fade>

                    <Fade direction='down' triggerOnce={true} delay={400}>
                        <Link to={'/book'} className={styles.book}>Libros</Link>
                    </Fade>
                </nav>
            </header >
        </>
    )
}
