import { useEffect, useState } from "react"
import { getAllMovies } from "../service/MoviesServices"
import { MediaType } from "../types";
import { CardMedia } from "../components/CardMedia";
import styles from '../styles/Card.module.css'
import { Fade } from "react-awesome-reveal";

type MoviePageProps = {
    setTypeMedia: React.Dispatch<React.SetStateAction<string>>
    setTitleMedia: React.Dispatch<React.SetStateAction<string>>
    setMediaArray: React.Dispatch<React.SetStateAction<MediaType[]>>
}

export const MoviePage = ({setTypeMedia, setTitleMedia, setMediaArray} : MoviePageProps) => {

    const [movies, setMovies] = useState<MediaType[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const allMovies = await getAllMovies();
            setMovies(allMovies);
            setMediaArray(allMovies)
        }
        fetchMovies();
    }, [])

    return (
        <div className={styles.movie_section}>
            {
                movies.map((movie) => (
                    <Fade direction='up' triggerOnce={true} cascade={true} key={movie._id}>
                        <CardMedia key={movie._id} media={movie} setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia}/>
                    </Fade>
                ))
            }
        </div>
    )
}
