import { NextPage } from "next";
import Link from "next/link";
import { SetStateAction } from "react";
import { Question } from "../apiRes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import he from "he";

interface Props {
    correctAnswers: number
    questions: Question[]
    setDisplayResults: React.Dispatch<SetStateAction<boolean>>
}

const Results:NextPage<Props> = (props) => {
    return (
        <div className="flex flex-col bg-slate-500 justify-around items-center text-center h-screen font-mono">
            <p className="font-bold text-2xl w-96">You Scored <br /> {props.correctAnswers} / 10</p>
            {
                props.questions?.map((question: Question, i:number) => {
                    return(
                    <div key={i} className="flex flex-row gap-5 justify-center items-center">
                        {
                            question.your_answer === question.correct_answer
                            ? <FontAwesomeIcon icon={faPlus} />
                            : <FontAwesomeIcon icon={faMinus} />
                        }
                        <p className="w-96">{he.decode(question.question)}</p>
                    </div>
                    )

                })
            }
            <Link href="/"><a className="border-black border-solid border bg-slate-400 w-44 text-xl font-bold" onClick={() => props.setDisplayResults(false)}>PLAY AGAIN?</a></Link>
        </div>
    )
}

export default Results;