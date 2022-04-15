import { NextPage } from "next";
import Link from "next/link";

const Home:NextPage = () => {
    return (
        <div className="flex flex-col bg-slate-500 justify-around items-center text-center h-screen font-mono">
                <h1 className="font-bold text-4xl w-96">Welcome to the Trivia Challenge!</h1>
                <p className="text-2xl w-72">You will be presented with 10 True or False questions.</p>
                <p className="text-2xl w-72">Can you score 100%?</p>
                <Link href="/quiz"><a className="text-2xl w-72 bg-slate-400 border-black border-solid border">BEGIN</a></Link>
        </div>
    )
}

export default Home;