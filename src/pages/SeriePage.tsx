import { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import { MediaType } from '../types'
import { getAllSeries } from '../service/SeriesService'
import { CardMedia } from '../components/CardMedia'
import { Fade } from 'react-awesome-reveal'

type SeriePageProps = {
  setTypeMedia: React.Dispatch<React.SetStateAction<string>>
  setTitleMedia: React.Dispatch<React.SetStateAction<string>>
  setMediaArray: React.Dispatch<React.SetStateAction<MediaType[]>>
}

export const SeriePage = ({setTypeMedia, setTitleMedia, setMediaArray} : SeriePageProps) => {

  const [series, setSeries] = useState<MediaType[]>([])

  useEffect(() => {
    const fetchSeries = async () => {
      const allSeries = await getAllSeries();
      setSeries(allSeries);
      setMediaArray(allSeries)
    }
    fetchSeries();
  }, [])
  

  return (
    <div className={styles.movie_section}>
    {
        series.map((serie) => (
           <Fade direction='up' triggerOnce={true} cascade={true} key={serie._id}>
             <CardMedia key={serie._id} media={serie} setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia}/>
           </Fade>
        ))
    }
</div>
  )
}
