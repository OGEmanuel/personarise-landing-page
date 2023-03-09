import Head from 'next/head';
import HeroSection from '@/components/hero-section';
import MapSection from '@/components/map-section';
import NavBar from '@/components/navbar';
import SwitchSection from '@/components/switch-section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Duwiit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <HeroSection />
        <MapSection />
        <SwitchSection />
      </main>
    </>
  );
}
