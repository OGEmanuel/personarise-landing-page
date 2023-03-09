import Image from 'next/image';
import sales from '../public/images/sales.png';
import arc from '../public/images/left-arc.svg';
import { useState } from 'react';

const CAREERS = [
  { id: 1, field: 'Sales' },
  { id: 2, field: 'Marketing' },
  { id: 3, field: 'Customer Success' },
  { id: 4, field: 'Recruiting' },
  { id: 5, field: 'Information Technology' },
  { id: 6, field: 'Education' },
];

const SwitchSection = () => {
  const [selected, setSelected] = useState(null);

  const handleChange = (e, id) => {
    if (e.target.checked) {
      setSelected(id);
    }
  };

  return (
    <section className="px-20 relative">
      <div className="text-center mb-10">
        <h3 className="font-bold text-[42px]">
          Switch to a career in tech with ease
        </h3>
        <p className="font-medium text-[22px] text-para px-40">
          {' '}
          Personarise make it easier for you to switch to a highly demanded tech
          career with ease and become a world-class talent in any career of
          choice.
        </p>
      </div>
      <div className="grid grid-cols-[1fr,_2fr,_2.5fr,_2fr,_2.5fr,_2fr] justify-items-center mx-auto mb-40">
        {CAREERS.map(career => (
          <label
            htmlFor={career.id}
            key={career.id}
            className={`border-b-2 w-full ${
              selected === career.id ? 'border-secondary' : 'border-para'
            } transition-all`}
          >
            <input
              type="radio"
              id={career.id}
              name="Career"
              onChange={e => handleChange(e, career.id)}
              className="hidden"
            />
            <p
              className={`font-medium text-xl text-center pb-3 ${
                selected === career.id ? 'text-secondary' : 'text-para'
              }`}
            >
              {career.field}
            </p>
          </label>
        ))}
      </div>
      <div className="flex justify-between relative w-[85%] mx-auto">
        <div>
          <div className="mb-20">
            <p className="switch-para-1">learn about sales</p>
            <p className="switch-para-2 w-[15rem]">
              Learn what sales is all about and how to start a career in sales
              in today world.
            </p>
          </div>
          <div>
            <p className="switch-para-1">discover skills</p>
            <p className="switch-para-2 w-[12rem]">
              Discover skills needed by employers from a sales person.
            </p>
          </div>
        </div>
        <div>
          <div className="mb-20">
            <p className="switch-para-1">learn from experts</p>
            <p className="switch-para-2 w-[15rem]">
              Learn sales skills from sales expert and understand how they sell
              more with less.
            </p>
          </div>
          <div>
            <p className="switch-para-1">create portfolios</p>
            <p className="switch-para-2 w-[12rem]">
              Create job winning portfolios and engage in world-class projects.
            </p>
          </div>
        </div>
        <Image
          src={sales}
          alt="sales"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%]"
        />
      </div>
      <Image src={arc} alt="arc" className="absolute top-[85%] left-0" />
    </section>
  );
};

export default SwitchSection;
