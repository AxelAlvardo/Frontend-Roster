import { Fade } from 'react-awesome-reveal'
import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <Fade direction='down' triggerOnce={true}>
                        <input
                            id='search'
                            type="text"
                            placeholder='Realiza una Búsqueda...'
                            className={styles.search}
                        />
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
            </header>
            <div className={styles.dec_1}></div>
            <div className={styles.dec_2}></div>
        </>
    )
}
