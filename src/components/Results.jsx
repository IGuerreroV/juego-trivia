const results = ({ questionFiltered, score, onResert }) => {
  return (
    <div className='flex felx-col justify-evenly items-center shadow-xl rounded-lg w-[600px]h-[600px] gap-5'>
      <h1 className='text-4xl font-bold'>Resultados</h1>
      <div className='flex flex-col gap-5 text-center text-lg font-bold'>
        <span>Acertaste</span>
        <span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>{((score / questionFiltered.length) * 100).toFixed(0)}%</span>
        de las preguntas ({score} de {questionFiltered.length})
      </div>
      <button className='border px-5 py-2 rounded-lg transition-all font-bold hover:bg-[#065f46] hover:text-[#d1fae5]' onClick={onResert}>
        Vamos de nuevo
      </button>
    </div>
  )
}

export default results
