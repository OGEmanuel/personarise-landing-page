import Image from 'next/image';
import Link from 'next/link';
import creative from '../public/images/Creative.svg';
import person from '../public/images/person.png';
import arrow from '../public/images/arrow.svg';
import blocks from '../public/images/blocks.svg';

const Features = () => {
  return (
    <section className="px-20 mb-40">
      <div className="flex justify-between items-center mb-20">
        <div className="px-5 relative">
          <Image src={creative} alt="creative" className="w-[30rem]" />
          <Image
            src={person}
            alt="person"
            className="absolute top-[50%] left-[50%] translate-x-[-55%] translate-y-[-53%] w-[16.5rem]"
          />
        </div>
        <div className="w-[50%]">
          <h4 className="text-[40px] font-extrabold mb-5">
            Become a world-class individual in your field
          </h4>
          <p className="text-lg w-[90%] mb-5">
            Identify the skills that world-class individuals possesses in your
            field and what they know. Learn the skills with any eLearning
            provider you prefer.
          </p>
          <Link href="/" className="flex gap-2 text-secondary items-center">
            Learn more
            <Image src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between px-32 mb-32">
        <div className="w-[58%]">
          <h4 className="text-[40px] font-extrabold mb-5">Hit your numbers</h4>
          <p className="text-lg w-[90%] mb-5">
            Track your career progress and hit your numbers - increase salary,
            more hand-on experience, develop skills with the 1st talent
            development platform.
          </p>
          <Link href="/" className="flex gap-2 text-secondary items-center">
            Learn more
            <Image src={arrow} alt="arrow" />
          </Link>
        </div>
        <Image src={blocks} alt="blocks" />
      </div>
      <div className="mx-32 border-2 border-ctaBorder rounded-[10px] pt-32 pb-20 px-20">
        <h3 className="text-[42px] font-bold text-center mb-5">
          Switch to a career in tech with ease
        </h3>
        <p className="text-para text-center mb-20">
          Start your tech journey or take your career to the next level with
          Personarise today.
        </p>
        <div className="mx-auto w-max">
          <Link
            href="/"
            className="text-lg font-medium bg-secondary text-white py-3 px-10 rounded-[8px]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
