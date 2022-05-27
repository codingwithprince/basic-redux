import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Cart } from '../components/Cart/Cart'
import Counter from '../components/Counter/Counter'
import Shop from '../components/Shop/Shop'
import styles from '../styles/Home.module.css'

export default function Home() {
  const myState = useSelector(state => state.counter.count)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Redux</a>
        </h1>
          {/* +++++++++ Counter +++++++ */}
          {/* <Counter />

          <h1>Counted : {myState}</h1> */}

          {/* +++++++++ Shop ++++++++ */}
          <Shop />
          <hr />
          <Cart />
          
      </main>
    </div>
  )
}

