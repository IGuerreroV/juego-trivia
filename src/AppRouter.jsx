import { Routes, Route } from 'react-router-dom'
import { HomePage, Juego } from './pages'
import { Navbar } from './components'
import imageSrc from './assets/software-3682509.jpg'

export const AppRouter = () => {
  return (
    <div className='relative h-screen'>

      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
        <img
          src={imageSrc}
          className='w-full h-full object-cover'
          alt='Imagen de fondo'
        />
      </div>

      {/* Contenido de las rutas */}
      <div className='absolute top-0 left-0 w-full h-full z-10'>
        {/* Navbar */}
        <Navbar />

        {/* Contenido de las rutas */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Juego' element={<Juego />} />
        </Routes>
      </div>
    </div>
  )
}
