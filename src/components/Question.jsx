import { useEffect, useState } from 'react'
import Results from '../components/Results'

const question = ({ filteredQuestion, index, questionFiltered, setQuestion }) => {
  const [score, setScore] = useState(0)
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [result, setResult] = useState(false)
  const [answerRandom, setAnswerRandom] = useState([])

  useEffect(() => {
    const answers = [
      ...filteredQuestion.incorrect_answer,
      filteredQuestion.correct_answer
    ]
    setAnswerRandom(answers.sort(() => Math.random() - 0.5))
  }, [filteredQuestion])

  const cheackAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1)
    }
    setSelectAnswerIndex(index)
    setAnswered(true)
  }

  const onNextQuestion = () => {
    setQuestion(index + 1)
    setSelectAnswerIndex(null)
    setAnswered(false)
  }

  const onReset = () => {
    setScore(0)
    setResult(false)
    setQuestion(0)
  }
  return (
    <>
      {
            result
              ? (
                <Results
                  questionFiltered={questionFiltered}
                  score={score}
                  onResert={onReset}
                />
                )
              : (
                <div className='flex flex-col justify-between shadow-md shadow-[#022c22]-200 w-[600px] h-[600px]p-10 rounded-lg '>
                  <h1 className='text-black justify-center tracking-widest text-xl text-center bg-gradient-to-r from-black to-[#022c22] bg-clip-text text-transparent animate-pulse py-2'>¡Que la diversión y el conocimiento te acompañen en este desafío!</h1>
                  <div className='flex justify-between py-2'>
                    <span>{index + 1} / {questionFiltered.length}</span>
                  </div>
                  <button
                    className='border border-[#34d399] px-5 py-2 rounded-lg font-bold transition-all hover:bg-[#065f46] hover:text-[#d1fae5]'
                    onClick={onReset}
                  >
                    Reiniciar
                  </button>

                  {/* Contenido de las preguntas aquí */}
                  <div>
                    <h1 className='font-bold text-center py-5'>{filteredQuestion.question}</h1>
                  </div>

                  <div>
                    <h2 className='font-semibold text-center text-[#065f46]'><span className='font-bold text-[#022c22]'>Categoría: </span>{filteredQuestion.category}</h2>
                  </div>
                  {/* Respuestas aquí */}
                  <div className='grid grid-cols-2 gap-5 py-2'>
                    {
                        answerRandom.map((answer, index) => (
                          <button
                            className={`border border-[#064e3b] p-5 rounded-lg flex justify-center items-center hover:scale-105  ${
                                selectAnswerIndex !== null && index === selectAnswerIndex
                                ? answer === filteredQuestion.correct_answer
                                    ? 'bg-green-500'
                                    : 'bg-red-500'
                                : 'bg-[#d1fae5] text-[#064e3b]'
                            }`}
                            key={answer}
                            onClick={() => cheackAnswer(answer, index)}
                            disabled={answered && selectAnswerIndex !== index}
                          >
                            <p className='font-medium text-center text-sm'>
                              {answer}
                            </p>
                          </button>
                        ))
                      }

                  </div>
                  <div className='flex justify-center py-2'>
                    {/* Botones de reinicio y siguiente pregunta */}
                    {
                      index + 1 === questionFiltered.length
                        ? (
                          <button
                            className='border-2 border-[#064e3b] hover:text-[#d1fae5] rounded-md px-5 py-2 hover:bg-[#065f46] text-black font font-medium' onClick={() => {
                              setAnswered(false)
                              setResult(true)
                            }}
                          >
                            Finalizar
                          </button>
                          )
                        : (
                          <button className='border-2 border-[#064e3b] text-black rounded-md px-5 py-2 hover:bg-[#065f46] hover:text-[#d1fae5] font font-medium' onClick={onNextQuestion}>
                            Siguiente pregunta
                          </button>
                          )
                    }

                  </div>
                </div>
                )
        }

    </>

  )
}

export default question
