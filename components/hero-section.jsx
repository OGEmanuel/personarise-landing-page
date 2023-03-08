import Image from 'next/image';
import background from '../public/images/background.png';
import avy1 from '../public/images/avatar-1.png';
import avy2 from '../public/images/avatar-2.png';
import avy3 from '../public/images/avatar-3.png';
import avy4 from '../public/images/avatar-4.png';
import star from '../public/images/star.svg';

const HeroSection = () => {
  return (
    <section>
      <div>
        <h1>Choose a career in tech in minutes</h1>
        <p>
          Personarise is your tech careeer development platform for eliminating
          time consuming activities while making decision on a tech career you
          will succeed in — and so much more.
        </p>
        <div>
          <div>
            <Image src={avy1} alt="avatar" />
            <Image src={avy2} alt="avatar" />
            <Image src={avy3} alt="avatar" />
            <Image src={avy4} alt="avatar" />
          </div>
          <div>
            <p>3k+ users</p>
            <Image src={star} alt="star" />
          </div>
        </div>
        <form>
          <input type="email" placeholder="Type your email address" />
          <button>Get started</button>
        </form>
      </div>
      <Image src={background} alt="background" />
    </section>
  );
};

export default HeroSection;
