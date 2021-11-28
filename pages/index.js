import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Ayudar from "../components/Ayudar";
import MisionYVision from "../components/MisionYVision";
import NuestrasVisitas from "../components/NuestrasVisitas";
import QuienesSomos from "../components/QuienesSomos";
import Patrocinadores from "../components/Patrocinadores";
import Fondos from "../components/Fondos";
import NuestrosFundadores from "../components/NuestrosFundadores";
import { sanityClient } from "../sanity";

export default function Home({ visitas, members, patrocinadores }) {

  return (
    <div id="bg-blue" className="overflow-x-hidden">
      <Hero />
      <Ayudar />
      <MisionYVision />
      <NuestrasVisitas visitas={visitas} />
      <QuienesSomos />
      <NuestrosFundadores members={members} />
      <Fondos />
      <Patrocinadores patrocinadores={patrocinadores} />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const membersQuery = `*[_type == "members"] | order(order){
 name, position, image{asset->{_id, url}}, bio
  }`;
  const visitasQuery = `*[_type == "visitas"]{
 title, description, publishedAt, body, mainImage{asset->{_id, url}}, slug
  }
  `;
  const patrocinadoresQuery = `*[_type == "patrocinadores"]{
 name, link, image{asset->{_id, url}}
  }`;
  const members = await sanityClient.fetch(membersQuery);
  const visitas = await sanityClient.fetch(visitasQuery);
  const patrocinadores = await sanityClient.fetch(patrocinadoresQuery);

  return {
    props: {
      members,
      visitas,
      patrocinadores
    },
  };
};
