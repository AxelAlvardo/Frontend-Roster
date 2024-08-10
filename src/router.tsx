import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MoviePage } from './pages/MoviePage'
import { SeriePage } from './pages/SeriePage'
import { BookPage } from './pages/BookPage'
import { Layout } from './layout/Layout'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<MoviePage />} />
                    <Route path='/serie' element={<SeriePage />} />
                    <Route path='/book' element={<BookPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
