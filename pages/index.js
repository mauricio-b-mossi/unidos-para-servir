import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Ayudar from '../components/Ayudar'
import MisionYVision from '../components/MisionYVision'
import NuestrasVisitas from '../components/NuestrasVisitas'
import QuienesSomos from '../components/QuienesSomos'
import Patrocinadores from '../components/Patrocinadores'
import Fondos from '../components/Fondos'


export default function Home() {
  return (
    <div id='bg-blue' className='overflow-x-hidden'>
      <Hero />
      <Ayudar />
      <MisionYVision />
      <NuestrasVisitas />
      <QuienesSomos />
      <Fondos />
      <Patrocinadores />
      
    </div>
  );
}
