import { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import { MediaType } from '../types'
import { getAllSeries } from '../service/SeriesService'
import { CardMedia } from '../components/CardMedia'


export const SeriePage = () => {

  const [series, setSeries] = useState<MediaType[]>([])

  useEffect(() => {
    const fetchSeries = async () => {
      const allSeries = await getAllSeries();
      setSeries(allSeries);
    }
    fetchSeries();
  }, [])

  console.log(series);
  

  return (
    <div className={styles.movie_section}>
    {
        series.map((serie) => (
            <CardMedia key={serie._id} media={serie}/>
        ))
    }
</div>
  )
}
