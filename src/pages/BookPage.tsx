import { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import { MediaType } from '../types'
import { getAllBooks } from '../service/BooksServices'
import { CardMedia } from '../components/CardMedia'
import { Fade } from 'react-awesome-reveal'

type BookPageProps = {
  setTypeMedia: React.Dispatch<React.SetStateAction<string>>
  setTitleMedia: React.Dispatch<React.SetStateAction<string>>
}

export const BookPage = ({setTypeMedia, setTitleMedia} : BookPageProps) => {

  const [books, setBooks] = useState<MediaType[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    }
    fetchBooks();
  }, [])

  return (
    <div className={styles.movie_section}>
    {
        books.map((book) => (
            <Fade direction='up' triggerOnce={true} cascade={true} key={book._id}>
              <CardMedia key={book._id} media={book} setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia}/>
            </Fade>
        ))
    }

    </div>
  )
}
