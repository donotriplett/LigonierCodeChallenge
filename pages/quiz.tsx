import { GetStaticProps, NextPage } from "next";
import { SetStateAction, useState } from "react";
import { Question } from "../apiRes";
import Results from "./results";
import he from "he";

interface Props {
    questions: Question[]
    setDisplayQuiz: React.Dispatch<SetStateAction<boolean>>
}

const Quiz: NextPage<Props> = (props) => {
    const { questions } = props;
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [displayResults, setDisplayResults] = useState<boolean>(false);

    const handleAnswer = (answer:string) => {
        questions[currentQuestion].your_answer = answer
            if(currentQuestion < 9 && questions[currentQuestion].correct_answer === answer){
                setCorrectAnswers(correctAnswers + 1)
                setCurrentQuestion(currentQuestion + 1)
            } else if(currentQuestion === 9 && questions[currentQuestion].correct_answer === answer) {
                setCorrectAnswers(correctAnswers + 1)
                setDisplayResults(true)
            } else if (currentQuestion < 9) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setDisplayResults(true)
            }
    }

    return (
        <div>
            {   
                displayResults 
                ?   <Results correctAnswers={correctAnswers} questions={questions} setDisplayResults={setDisplayResults} /> 
                :   <div className="flex flex-col bg-slate-500 justify-around items-center text-center h-screen font-mono">
                        <h1 className="font-bold text-2xl w-96">{questions[currentQuestion].category}</h1>
                        <div className="flex flex-col bg-slate-400 border-black border-solid border justify-around items-center text-center h-96 w-96 px-5">
                            <p className="text-xl break-words w-72">{he.decode(questions[currentQuestion].question)}</p>
                            <div className="flex gap-20">
                                <button className="border-black border-solid border w-28 bg-slate-500 text-xl font-bold" onClick={() => handleAnswer("True")}>TRUE</button>
                                <button className="border-black border-solid border w-28 bg-slate-500 text-xl font-bold" onClick={() => handleAnswer("False")}>FALSE</button>
                            </div>
                        </div>
                        <p>{currentQuestion + 1} of 10</p>
                    </div>
            }
            </div>
    )
}

export default Quiz;

export const getStaticProps:GetStaticProps = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
    const json = await res.json();
  
    return {
      props: {questions: json.results}
    }
  }