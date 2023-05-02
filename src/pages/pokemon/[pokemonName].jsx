import styles from '../../styles/PokemonName.module.css'
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticPaths() {
    const maxPokemons = 151
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await res.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonName: pokemon.name },
        }
    })

    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params }) {
    const name = params.pokemonName;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();

    const nextPokemonId = data.id + 1;
    const nextRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`);
    const nextData = await nextRes.json();


    const prevPokemonId = data.id - 1;
    let prevData = null;
    if (data.id > 1) {
        const prevRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${prevPokemonId}`);
        prevData = await prevRes.json();
    }

    return {
        props: {
            pokemon: data,
            nextPokemon: nextData,
            prevPokemon: prevData,
        }
    }
}


export default function PokemonName({ pokemon, nextPokemon, prevPokemon }) {
    
    return (
        <div className={styles.container}>
            <h1>{pokemon.name} nº{pokemon.id}</h1>
            <div className={styles.containerB}>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width={250} height={250} alt={`${pokemon.name}`} />
                <div className={styles.containerType}>
                    <h2>Tipo(s)</h2>
                    <div className={styles.tipos}>
                        {pokemon.types.map(type => (
                            <h3 key={type.type.name} className={`${styles.type} ${styles['type_' + type.type.name]}`}>{type.type.name}</h3>
                        ))}
                    </div>
                </div>
                <div className={styles.stats}>
                    <div>
                        <h2>Altura</h2>
                        <p>{pokemon.height * 10} cm</p>
                    </div>
                    <div>
                        <h2>Peso</h2>
                        <p>{pokemon.weight / 10} kg </p>
                    </div>
                </div>
            </div>
            <div className={styles.btns}>
                <Link href={prevPokemon ? `/pokemon/${prevPokemon.name}` : `/pokemon/${pokemon.name}`} className={styles.link}><button>Anterior</button></Link>
                <Link href={`/pokemon/${nextPokemon.name}`} className={styles.link}><button>Proximo</button></Link>
            </div>
            <div className={styles.btns}>
                <Link href="/" className={styles.link}><button>Voltar</button></Link>
            </div>
        </div>
    )
}