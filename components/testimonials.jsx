import Image from 'next/image';
import quote from '../public/images/quote-left.svg';
import display from '../public/images/display.svg';
import top from '../public/images/top-arc.svg';
import bottom from '../public/images/bottom-arc.svg';

const TESTIMONIALS = [
  {
    id: 1,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, vehicula elit congue etiam purus. Amet eurisus, sed auctor et. Orci sed faucibus cursus dictum tincidunt amet, leo.',
    name: 'Joseph Umoh',
    title: 'CEO Tera Culture, Lagos.',
  },
  {
    id: 2,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, vehicula elit congue etiam purus. Amet eurisus, sed auctor et. Orci sed faucibus cursus dictum tincidunt amet, leo.',
    name: 'Joseph Umoh',
    title: 'CEO Tera Culture, Lagos.',
  },
  {
    id: 3,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, vehicula elit congue etiam purus. Amet eurisus, sed auctor et. Orci sed faucibus cursus dictum tincidunt amet, leo.',
    name: 'Joseph Umoh',
    title: 'CEO Tera Culture, Lagos.',
  },
  {
    id: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, vehicula elit congue etiam purus. Amet eurisus, sed auctor et. Orci sed faucibus cursus dictum tincidunt amet, leo.',
    name: 'Joseph Umoh',
    title: 'CEO Tera Culture, Lagos.',
  },
];

const Testimonials = () => {
  return (
    <section className="px-20 mb-20">
      <div className="text-center mb-16">
        <h2 className="text-[64px] font-bold">Testimonials</h2>
        <p className="text-lg text-para w-[50rem] mx-auto">
          These are the stories of some of our very early customers about their
          experience of using Personarise.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-8 mb-40">
        {TESTIMONIALS.map(testimonial => (
          <div
            key={testimonial.id}
            className="bg-testiBg rounded-2xl py-7 px-8"
          >
            <Image src={quote} alt="quote" className="mb-5" />
            <p className="text-testiP px-5 w-[30rem] mb-7">
              {testimonial.review}
            </p>
            <div className="flex items-center gap-3 px-4">
              <Image src={display} alt="display" />
              <div>
                <p className="text-testiP font-bold">{testimonial.name}</p>
                <p className="text-testiP text-xs">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-testiBg rounded-2xl flex pt-20 pb-28 pl-20 px-36 justify-between relative">
        <div className="z-10">
          <p className="font-bold text-5xl mb-5">Curious to try?</p>
          <p className="font-bold text-5xl mb-5">Get started now!</p>
          <p className="font-medium text-lg w-[30rem]">
            Join our early users and discover how Personarise is helping you
            maximize career opportunities.
          </p>
        </div>
        <form action="" className="z-10">
          <textarea
            type="email"
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="example@gmail.com"
            className="rounded-lg py-3 px-5 resize-none mb-2 outline-none"
          />
          <button className="block bg-ctaButton text-white w-full rounded-lg py-3">
            Get Started
          </button>
        </form>
        <Image src={top} alt="arc" className="absolute top-0 left-0" />
        <Image src={bottom} alt="arc" className="absolute bottom-0 right-0" />
      </div>
    </section>
  );
};

export default Testimonials;
