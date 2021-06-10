import { GetStaticProps } from 'next';
import Head from 'next/head'; // Componente react que pode ser add em qualquer lugar da tela, e td que for colocado
// dentro dele, vai ser anexado ao Head do arquivo _document.tsx
// ajuda a config algumas coisas do cabeçalho por página 

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

// Client-side
// Server-side
// Static Site Generation

// Post do blog

// Conteúdo (SSG)
// Comentários (Client-side)

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }  
}

export default function Home({ product }: HomeProps) {
  return (
  <> {/* fragment - necessário quando tenho mais de um componente */} 
    <Head>
      <title>Home | ig.news</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
       <span>👏 Hey, Welcome</span>
       <h1>News about the <span>React</span> world.</h1>
       <p>
         Get access to all the puplications <br />
         <span>for { product.amount } mouth</span>
       </p>
       <SubscribeButton priceId={product.priceId} />
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IvKlkK8IdYREZycIJ7sM6PA',)

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
