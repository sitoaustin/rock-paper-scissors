'use client';
import Image from 'next/image';
// Font
import { Barlow_Semi_Condensed } from 'next/font/google';
// Images
import Logo from '../public/images/logo.svg';
import Triangle from '../public/images/bg-triangle.svg';
import { Rock, Paper, Scissors } from './components/Selections';
// import Rock from '../public/images/icon-rock.svg';
// import Paper from '../public/images/icon-paper.svg';
// import Scissors from '../public/images/icon-scissors.svg';
// Components
import Rules from './components/Rules';
import { useState, useEffect } from 'react';

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Home() {
  const [rules, setRules] = useState(false);
  const [score, setScore] = useState(0);

  // Played state
  const [played, setPlayed] = useState(false);

  // Computer state
  const [computerTurn, setComputerTurn] = useState(false);
  const [computerPaper, setComputerPaper] = useState(false);
  const [computerScissors, setComputureScissors] = useState(false);
  const [computerRock, setComputureRock] = useState(false);

  // Game Play
  const [rock, setRock] = useState(false);
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);

  // Handlers
  const handlePlay = () => {
    setPlayed(!played);
  };
  const playedRock = () => {
    setRock(!rock);
    handlePlay();
  };
  const playedScissors = () => {
    setScissors(!scissors);
    handlePlay();
  };
  const playedPaper = () => {
    setPaper(!paper);
    handlePlay();
  };

  useEffect(() => {
    if (played) {
      const timeoutId = setTimeout(() => {
        function getRandomInteger(min: number, max: number) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const randomInt = getRandomInteger(0, 1);
        if (rock && randomInt === 0) {
          setComputerPaper(true);
        } else if (rock && randomInt === 1) {
          setComputureScissors(true);
        } else if (paper && randomInt == 0) {
          setComputureScissors(true);
        } else if (paper && randomInt == 1) {
          setComputureRock(true);
        } else if (scissors && randomInt == 0) {
          setComputureRock(true);
        } else if (scissors && randomInt == 1) {
          setComputerPaper(true);
        }
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [played, rock, paper, scissors]);

  return (
    <main className={barlow.className}>
      <div className='w-full min-h-screen bg-gradient-to-r from-[#182243] viat-[#1C3050] to-[#182243] flex flex-col items-center p-5 overflow-hidden'>
        <div className='flex justify-between w-full border-[3px] border-gray-600 rounded-lg p-3 overflow-hidden'>
          <div className='flex items-center justify-center'>
            <Image
              src={Logo}
              alt='logo'
              width={500}
              height={500}
              className='w-[100px]'
            />
          </div>
          <div className='flex justify-center items-center bg-white flex-col rounded-sm w-16 leading-3'>
            <p className='text-cyan-700 text-[12px] font-bold mb-2'>SCORE</p>
            <h1 className='text-gray-600 font-bold text-[30px]'>{score}</h1>
          </div>
        </div>
        {/* Body section */}
        {!played ? (
          <div className='mt-36 w-[335px] flex items-center justify-center relative flex-col'>
            <Image
              src={Triangle}
              alt='triangle'
              width={500}
              height={500}
              className='w-[200px]'
            />
            <div
              onClick={playedPaper}
              className='bg-white border-[10px] border-blue-800 w-[120px] h-[120px] rounded-full absolute left-0 top-[-50%] translate-y-[40%] flex items-center justify-center'
            >
              <Paper />
            </div>
            <div
              onClick={playedScissors}
              className='bg-white border-[10px] border-yellow-500 w-[120px] h-[120px] rounded-full absolute right-0 top-[-50%] translate-y-[40%] flex items-center justify-center'
            >
              <Scissors />
            </div>
            <div
              onClick={playedRock}
              className='bg-white border-[10px] border-red-500 w-[120px] h-[120px] rounded-full absolute right-[31%] bottom-[-30%] flex items-center justify-center'
            >
              <Rock />
            </div>
          </div>
        ) : (
          <div className='mt-36 w-[335px] flex items-center justify-center relative flex-col'>
            <Image
              src={Triangle}
              alt='triangle'
              width={500}
              height={500}
              className='w-[200px] opacity-0'
            />
            <div className='absolute left-0 top-[-50%] translate-y-[30%]'>
              <div
                className={`bg-white border-[10px] ${
                  paper && 'border-blue-800'
                } ${rock && 'border-red-500'} ${
                  scissors && 'border-yellow-500'
                } w-[120px] h-[120px] rounded-full  flex items-center justify-center`}
              >
                {paper && <Paper />}
                {rock && <Rock />}
                {scissors && <Scissors />}
              </div>
              <div className='w-full flex justify-center'>
                <p className='text-white font-semibold text[14px] mt-5'>
                  YOU PICKED
                </p>
              </div>
            </div>
            <div className='absolute right-0 top-[-50%] translate-y-[30%]'>
              <div
                className={`${!played && 'bg-blue-950 border-blue-950'} 
                  ${computerPaper && 'border-blue-800 bg-white'} ${
                  computerRock && 'border-red-500 bg-white'
                } ${
                  computerScissors && 'border-yellow-500 bg-white'
                }  w-[120px] h-[120px] rounded-full  flex items-center justify-center border-[10px]`}
              >
                {computerPaper && <Paper />}
                {computerRock && <Rock />}
                {computerScissors && <Scissors />}
              </div>
              <div className='w-full flex justify-center'>
                <p className='text-white font-semibold text[14px] mt-5'>
                  THE HOUSE PLAYED
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Game Play */}

        {/* Rules Btn */}
        <button
          onClick={() => setRules(true)}
          className='mt-36 rounded-md border border-gray-500 py-1 px-10 text-white'
        >
          RULES
        </button>
        {rules && <Rules rules={rules} setRules={setRules} />}
      </div>
    </main>
  );
}
