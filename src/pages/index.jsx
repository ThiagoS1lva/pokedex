import styles from '@/styles/Home.module.css'
import Card from '@/components/Card';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';


export async function getStaticProps() {
  const maxPokemons = 151
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  //adicionar index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results,
    }
  }
}


export default function Home({ pokemons }) {
  // Verificar se está no topo ou nao
  const [topo, setTopo] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 300) {
        setTopo(false);
      } else {
        setTopo(true);
      }
    }
  })
  const handleClickSubir = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div
        className={`${styles.subir} ${!topo ? styles.mostrar : ''}`} onClick={handleClickSubir}
      >
        <BsFillArrowUpCircleFill size={50} />
      </div>

      <div className={styles.title}>
        <h1>Pokémons</h1>
        <input type="text" placeholder="Pesquisar" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons && filteredPokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
