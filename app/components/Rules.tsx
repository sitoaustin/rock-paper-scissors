import Image from 'next/image';
import GameRule from '../../public/images/image-rules.svg';
import CloseIcon from '../../public/images/icon-close.svg';

export default function Rules({
  rules,
  setRules,
}: {
  rules: boolean;
  setRules: (rules: boolean) => void;
}) {
  return (
    <div className='absolute top-0 w-full h-screen flex items-center justify-center'>
      <div className='relative w-full h-screen bg-white  flex items-center p-5 lg:p-0 flex-col lg:justify-center lg:w-[500px] lg:h-[500px] lg:rounded-md'>
        <h1 className='font-semibold text-[30px] mt-10 mb-20 lg:absolute lg:left-0 lg:p-10 lg:top-0 lg:mt-0'>
          RULES
        </h1>
        <Image
          src={GameRule}
          alt='game rules'
          width={500}
          height={500}
          className='w-full lg:w-[300px]'
        />
        <button
          className='p-3 mt-20 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:p-12'
          onClick={() => setRules(!rules)}
        >
          <Image
            src={CloseIcon}
            alt='close icon'
            width={500}
            height={500}
            className='w-[20px] '
          />
        </button>
      </div>
    </div>
  );
}
