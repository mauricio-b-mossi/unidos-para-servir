import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Ayudar from '../components/Ayudar'
import MisionYVision from '../components/MisionYVision'
import NuestrasVisitas from '../components/NuestrasVisitas'
import QuienesSomos from '../components/QuienesSomos'


export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Ayudar />
      <MisionYVision />
      <NuestrasVisitas />
      <QuienesSomos />
      
    </div>
  );
}
