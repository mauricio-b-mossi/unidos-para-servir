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
import NuestrosVoluntarios from "../components/NuestrosVoluntarios";
import Footer from '../components/Footer';
import { sanityClient } from "../sanity";
export default function Home({
  home,
  ayuda,
  misionYvision,
  fondos,
  nuestrasVisitas,
  quienesSomos,
  nuestrosFundadores,
  nuestrosPatrocinadores,
  nuestrosVoluntarios,
  members,
  visitas,
  patrocinadores,
}) {
  return (
    <>
      <Head>
        <title>Unidos Para Servir</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-x-hidden">
        <Hero home={home} />
        <Ayudar ayuda={ayuda} />
        <MisionYVision misionYvision={misionYvision} />
        <Fondos items={ fondos }/>
        <NuestrasVisitas nuestrasVisitas={nuestrasVisitas} visitas={visitas} />
        <QuienesSomos quienesSomos={quienesSomos} />
        <NuestrosFundadores
          nuestrosFundadores={nuestrosFundadores}
          members={members}
        />
        <NuestrosVoluntarios nuestrosVoluntarios={ nuestrosVoluntarios }/>
        <Patrocinadores
          nuestrosPatrocinadores={nuestrosPatrocinadores}
          patrocinadores={patrocinadores}
        />
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const homeQuery = `*[_type == "home"][0]{
 title, description, mainImage{asset->{_id, url}}, "items": items[]->{title, description, image{asset->{url}}, link}, 
  }`;
  const ayudaQuery = `*[_type == "ayudar"][0]{
 title, dona, linkdona, parte, linkparte, mainImage{asset->{_id, url}}
  }`;
  const misionYvisionQuery = `*[_type == "misionYvision"][0]{
 quote, body, mainImage{asset->{_id, url}}
  }`;
  const fondosQuery = `*[_type == "fondos"]{
 amount, tipo, description, image{asset->{_id, url}}
  }`;
  const nuestrasVisitasQuery = `*[_type == "nuestrasVisitas"][0]{
 title, description
  }`;
  const quienesSomosQuery = `*[_type == "quienesSomos"][0]{
 title, description
  }`;
  const nuestrosFundadoresQuery = `*[_type == "nuestrosFundadores"][0]{
 title, description
  }`;
  const nuestrosVoluntariosQuery = `*[_type == "nuestrosVoluntarios"][0]{
 title, description, voluntarios
  }`;
  const nuestrosPatrocinadoresQuery = `*[_type == "nuestrosPatrocinadores"][0]{
 title, description
  }`;
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

  const home = await sanityClient.fetch(homeQuery);
  const ayuda = await sanityClient.fetch(ayudaQuery);
  const misionYvision = await sanityClient.fetch(misionYvisionQuery);
  const fondos = await sanityClient.fetch(fondosQuery);
  const nuestrasVisitas = await sanityClient.fetch(nuestrasVisitasQuery);
  const quienesSomos = await sanityClient.fetch(quienesSomosQuery);
  const nuestrosFundadores = await sanityClient.fetch(nuestrosFundadoresQuery);
  const nuestrosVoluntarios = await sanityClient.fetch(nuestrosVoluntariosQuery);
  const nuestrosPatrocinadores = await sanityClient.fetch(
    nuestrosPatrocinadoresQuery
  );
  const members = await sanityClient.fetch(membersQuery);
  const visitas = await sanityClient.fetch(visitasQuery);
  const patrocinadores = await sanityClient.fetch(patrocinadoresQuery);

  return {
    props: {
      home,
      ayuda,
      misionYvision,
      fondos,
      nuestrasVisitas,
      quienesSomos,
      nuestrosFundadores,
      nuestrosVoluntarios,
      nuestrosPatrocinadores,
      members,
      visitas,
      patrocinadores,
    },
  };
};
