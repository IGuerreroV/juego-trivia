import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>

      <div className='absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Link
          to='/juego'
        >
          <h1 className='text-9xl font-semibold text-stone-100 bg-green-300 bg-opacity-60 pt-0 pb-6 px-28 text-center rounded-3xl transition-all duration-300 hover:skew-y-3 hover:scale-105'>Jugar</h1>
        </Link>
      </div>

    </div>
  )
}
