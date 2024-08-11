import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MediaType } from "../types";
import styles from '../styles/CharacterPage.module.css';
import { getCharacters } from "../service/CharactersService";
import { CardCharacter } from "../components/CardCharacter";
import { Fade } from "react-awesome-reveal";
import ExpenseModal from "../components/ExpenseModal";

type CharacterPageProps = {
    typeMedia: string
    titleMedia: string
    mediaArray: MediaType[]
}

const CharacterPage = ({ typeMedia, titleMedia, mediaArray }: CharacterPageProps) => {
    const { id } = useParams<{ id: string }>();
    const [media, setMedia] = useState<MediaType>();

    useEffect(() => {
        const fetchMedia = async () => {
            const allMedia = await getCharacters(id || '', typeMedia);
            setMedia(allMedia);
        };

        fetchMedia();
        const interval = setInterval(fetchMedia, 1000);
        return () => clearInterval(interval);
    }, [id, typeMedia]);



    return (
        <div className={styles.characterPage}>
            <div className={styles.title}>
                <Fade direction="left" triggerOnce={true}>
                    <div className={styles.tit_efe}>
                        <Fade>
                            {titleMedia}
                        </Fade>
                    </div>
                </Fade>
            </div>

            <div className={styles.charac_div}>
                {
                    media?.characters.map((character) => (
                        <Fade key={character._id} direction="up" triggerOnce={true} className={styles.fade}>
                            <CardCharacter key={character._id} character={character} />
                        </Fade>
                    ))
                }
            </div>

            <ExpenseModal mediaArray={mediaArray} />
        </div>
    );
}

export default CharacterPage;
