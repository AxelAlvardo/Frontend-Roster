import { MediaType } from "../types"
import styles from '../styles/Card.module.css'
import { Link } from "react-router-dom"

type CardMediaProps = {
    media: MediaType
    setTypeMedia: React.Dispatch<React.SetStateAction<string>>
    setTitleMedia: React.Dispatch<React.SetStateAction<string>>
}

export const CardMedia = ({ media, setTypeMedia, setTitleMedia }: CardMediaProps) => {

    return (
        <div className={styles.card}>
            <figure>
                <img className={styles.img_card} src={media.imageURL} alt="media_img" />
            </figure>

            <div className={styles.text_card}>
                <p className={styles.title_card}>{media.title}</p>
                <Link 
                    to={`/characters/${encodeURIComponent(media._id)}`} 
                    className={styles.btn_card} 
                    onClick={()=> {
                        setTypeMedia(media.access)
                        setTitleMedia(media.title)
                    }}
                    
                >Ver Personajes</Link>
            </div>
        </div>
    )
}
