import type { NextPage } from 'next';
import Home from "./home";
import Head from 'next/head';
import { useState } from 'react';

const Index: NextPage = () => {
  const [displayQuiz, setDisplayQuiz] = useState<boolean>(false);

  return (
    <div className="">
      <Head>
        <title>Ligonier Trivia Game</title>
      </Head>
      <Home />
    </div>
  )
}

export default Index;
