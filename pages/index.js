import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import request from "../utils/request";

export default function Home({ results }) {
  return (
    <div className="">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="movie app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result movies={results} />
    </div>
  );
}

// Server side rendering feature

export async function getServerSideProps(location) {
  const genre = location.query.genre;

  const result = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: result.results,
    },
  };
}
