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
    <div className='w-full min-h-screen bg-white absolute top-0 flex items-center p-5 flex-col'>
      <h1 className='font-semibold text-[30px] mt-10 mb-20'>RULES</h1>
      <Image
        src={GameRule}
        alt='game rules'
        width={500}
        height={500}
        className='w-full'
      />
      <button className='p-3' onClick={() => setRules(!rules)}>
        <Image
          src={CloseIcon}
          alt='close icon'
          width={500}
          height={500}
          className='w-[20px] mt-20'
        />
      </button>
    </div>
  );
}
