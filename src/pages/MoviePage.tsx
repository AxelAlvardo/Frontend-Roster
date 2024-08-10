import { useEffect, useState } from "react"
import { getAllMovies } from "../service/MoviesServices"
import { MediaType } from "../types";
import { CardMedia } from "../components/CardMedia";
import styles from '../styles/Card.module.css'

export const MoviePage = () => {

    const [movies, setMovies] = useState<MediaType[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const allMovies = await getAllMovies();
            setMovies(allMovies);
        }
        fetchMovies();
    }, [])

    return (
        <div className={styles.movie_section}>
            {
                movies.map((movie) => (
                    <CardMedia key={movie._id} movie={movie}/>
                ))
            }
        </div>
    )
}
