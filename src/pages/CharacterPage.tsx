import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MediaType } from "../types";
import styles from '../styles/CharacterPage.module.css'; 
import { getCharacters } from "../service/CharactersService";

type CharacterPageProps = {
    typeMedia: string
    titleMedia: string
}

const CharacterPage = ({typeMedia, titleMedia} : CharacterPageProps) => {
    const { id } = useParams<{ id: string }>();
    const [media, setMedia] = useState<MediaType>();

    useEffect(() => {
        const fetchMedia = async () => {
          const allMedia = await getCharacters(id || '', typeMedia);
          setMedia(allMedia);
        }
        fetchMedia();
      }, [])
    return (
        <div className={styles.characterPage}>

            <div className={styles.title}>
                {titleMedia}
            </div>

            {
                media?.characters.map((character)=> (
                    <p key={character._id}>{character.firstName}</p>
                ))
            }
        </div>
    );
}

export default CharacterPage;
