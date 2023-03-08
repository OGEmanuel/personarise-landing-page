import Image from 'next/image';
import background from '../public/images/background.png';
import avy1 from '../public/images/avatar-1.png';
import avy2 from '../public/images/avatar-2.png';
import avy3 from '../public/images/avatar-3.png';
import avy4 from '../public/images/avatar-4.png';
import star from '../public/images/star.svg';

const HeroSection = () => {
  return (
    <section className="grid stack w-[68%] mx-auto mt-32">
      <Image
        src={background}
        alt="background"
        className="grid-area-stack w-full"
        priority
      />
      <div className="grid-area-stack w-[90%] mx-auto">
        <h1 className="font-bold text-[64px] text-center mt-10 mb-5">
          Choose a career in tech in minutes
        </h1>
        <p className="text-lg text-center w-[93%] mx-auto mb-4">
          Personarise is your tech careeer development platform for eliminating
          time consuming activities while making decision on a tech career you
          will succeed in — and so much more.
        </p>
        <div className="flex w-max mx-auto gap-4 mb-10 items-center">
          <div className="flex">
            <Image src={avy1} alt="avatar" className="z-40" />
            <Image src={avy2} alt="avatar" className="ml-[-1rem] z-30" />
            <Image src={avy3} alt="avatar" className="ml-[-1rem] z-20" />
            <Image src={avy4} alt="avatar" className="ml-[-1rem] z-10" />
          </div>
          <div>
            <p className="text-sm">3k+ users</p>
            <Image src={star} alt="star" />
          </div>
        </div>
        <form className="w-[70%] mx-auto relative">
          <input
            type="email"
            placeholder="Type your email address"
            className="text-lg w-full py-2.5 pl-6 rounded-[12px] outline-none"
          />
          <button className="text-lg font-medium bg-secondary text-white py-1.5 px-3 rounded-[8px] absolute top-[8%] right-[.7%]">
            Get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
