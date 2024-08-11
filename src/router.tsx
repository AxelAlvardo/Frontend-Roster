import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MoviePage } from './pages/MoviePage'
import { SeriePage } from './pages/SeriePage'
import { BookPage } from './pages/BookPage'
import { Layout } from './layout/Layout'
import CharacterPage from './pages/CharacterPage'
import { useState } from 'react'

export const AppRouter = () => {

    const[typeMedia, setTypeMedia] = useState('');
    const[titleMedia, setTitleMedia] = useState('');

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<MoviePage setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia}/> } />
                    <Route path='/serie' element={<SeriePage setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia}/>} />
                    <Route path='/book' element={<BookPage setTypeMedia={setTypeMedia} setTitleMedia={setTitleMedia}/>} />

                    <Route path="/characters/:id" element={<CharacterPage typeMedia={typeMedia} titleMedia={titleMedia}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
