import Image from 'next/image';
import truefi from '../public/images/truefi.png';
import compound from '../public/images/compound.png';
import paxos from '../public/images/paxos.png';
import aave from '../public/images/aave.png';
import synthetix from '../public/images/synthetix.png';
import nexus from '../public/images/nexus-mutual.png';
import ens from '../public/images/ens.png';
import atom from '../public/images/atom.svg';
import arc from '../public/images/right-arc.svg';

const MapSection = () => {
  return (
    <section className="px-20 relative mb-40">
      <div className="flex my-36 justify-between flex-wrap">
        <Image src={truefi} alt="truefi" />
        <Image src={compound} alt="compound" />
        <Image src={paxos} alt="paxos" />
        <Image src={aave} alt="aave" />
        <Image src={synthetix} alt="synthetix" />
        <Image src={nexus} alt="nexus" />
        <Image src={ens} alt="ens" />
      </div>
      <div className="flex gap-40 mb-60">
        <div className="w-[40rem]">
          <h2 className="text-[58px] font-bold">
            Map your passion to a tech career in minutes
          </h2>
          <p className="text-[22px] font-medium text-para">
            Identify a career in tech you are passionate about in minutes.
            Simply select the attributes that best define your person - and
            watch the system recommend a career that is a close-fit to you and
            simplified details about that career.
          </p>
        </div>
        <Image src={atom} alt="atom" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="map-para-1">sign up/login</p>
          <p className="map-para-2">
            Explore the unique approach Personarise use to help you maximize
            your career by clicking - “Get started”.
          </p>
        </div>
        <div>
          <p className="map-para-1">communicate your passion</p>
          <p className="map-para-2">
            Communicate your passion to Personarise in through an intuitive
            interface and get matched to a career in tech you will succeed in.
          </p>
        </div>
        <div>
          <p className="map-para-1">become world-class</p>
          <p className="map-para-2">
            Be among the top 1% in your career and become a rock star in your
            tech career by identifying your skills gap and bridging them,
          </p>
        </div>
      </div>
      <Image src={arc} alt="arc" className="absolute bottom-[25%] right-0" />
    </section>
  );
};

export default MapSection;
