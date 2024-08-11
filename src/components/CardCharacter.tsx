import { CharacterType } from "../types"
import styles from '../styles/CharacterCard.module.css'

type CardCharacterProps = {
    character : CharacterType
}

export const CardCharacter = ({character} : CardCharacterProps) => {
  return (
    <div className={styles.card}>
        <figure>
            <img className={styles.img} src={character.image} alt={character.firstName} />
        </figure>

        <div className={styles.char_text}>
            <div className={styles.names_text}>
                <p className={styles.name}>{character.firstName}</p>
                <p className={styles.lastname}>{character.lastName}</p>
            </div>

            <p className={styles.gender}>Genero : <span className={styles.gen_dec}>{character.gender}</span></p>
        </div>
    </div>
  )
}
