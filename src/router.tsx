import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MoviePage } from './pages/MoviePage'
import { SeriePage } from './pages/SeriePage'
import { BookPage } from './pages/BookPage'
import { Layout } from './layout/Layout'
import CharacterPage from './pages/CharacterPage'
import { useEffect, useState } from 'react'
import { MediaType } from './types'

export const AppRouter = () => {

    const [typeMedia, setTypeMedia] = useState(() => {
        return localStorage.getItem('typeMedia') || '';
    });
    const[titleMedia, setTitleMedia] = useState(() => {
        return localStorage.getItem('titleMedia') || '';
    });

    const[mediaArray, setMediaArray] = useState<MediaType[]>(() => {
        const storedMediaArray = localStorage.getItem('mediaArray');
        return storedMediaArray ? JSON.parse(storedMediaArray) : [];
      })


    useEffect(() => {
        localStorage.setItem('typeMedia', typeMedia);
        localStorage.setItem('titleMedia', titleMedia);
        localStorage.setItem('mediaArray', JSON.stringify(mediaArray));
    }, [typeMedia]);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<MoviePage setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia} setMediaArray={setMediaArray}/> } />
                    <Route path='/serie' element={<SeriePage setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia} setMediaArray={setMediaArray}/>} />
                    <Route path='/book' element={<BookPage setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia} setMediaArray={setMediaArray}/>} />

                    <Route path="/characters/:id" element={<CharacterPage typeMedia={typeMedia} titleMedia={titleMedia} mediaArray={mediaArray}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
