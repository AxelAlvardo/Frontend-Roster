import { MediaType } from "../types"
import styles from '../styles/Card.module.css'
import { Link } from "react-router-dom"

type CardMediaProps = {
    media: MediaType
}

export const CardMedia = ({ media }: CardMediaProps) => {

    return (
        <div className={styles.card}>
            <figure>
                <img className={styles.img_card} src="" alt="" />
            </figure>

            <div className={styles.text_card}>
                <p className={styles.title_card}>{media.title}</p>
                <Link to={'/'} className={styles.btn_card}>Ver Personajes</Link>
            </div>
        </div>
    )
}
