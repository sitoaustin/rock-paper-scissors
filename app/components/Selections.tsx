import Image from 'next/image';
import RockImg from '../../public/images/icon-rock.svg';
import PaperImg from '../../public/images/icon-paper.svg';
import ScissorsImg from '../../public/images/icon-scissors.svg';

function Rock() {
  return (
    <Image
      src={RockImg}
      alt='rock'
      width={500}
      height={500}
      className='w-[50px]'
    />
  );
}
function Paper() {
  return (
    <Image
      src={PaperImg}
      alt='paper'
      width={500}
      height={500}
      className='w-[50px]'
    />
  );
}
function Scissors() {
  return (
    <Image
      src={ScissorsImg}
      alt='scissors'
      width={500}
      height={500}
      className='w-[50px]'
    />
  );
}

export { Rock, Paper, Scissors };
