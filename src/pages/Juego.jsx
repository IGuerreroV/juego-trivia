import { useEffect, useState } from 'react'
import Question from '../components/Question'
import { questions } from '../data'

/* Algoritmo Fisher-Yates */
const shuffleQuestion = (array) => {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array.slice(0, 10)
}

export const Juego = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const newQuestions = shuffleQuestion(questions) // Baraja las preguntas al cargar el componente
    setShuffledQuestions(newQuestions)
  }, [])

  return (
    <div className='flex justify-center items-center pt-10 px-24 gap-10'>
      <div className='bg-[#a7f3d0] rounded-lg p-8' style={{ height: 'calc(100vh - 5 rem)' }}>

        {shuffledQuestions[index] && (
          <Question
            filteredQuestion={shuffledQuestions[index]}
            setQuestion={setIndex}
            index={index}
            questionFiltered={shuffledQuestions}
          />
        )}

      </div>

    </div>
  )
}
