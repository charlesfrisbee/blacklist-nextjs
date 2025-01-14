import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { ClerkProvider, useUser, SignIn, SignedOut } from '@clerk/nextjs'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>EBAIRR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        European Booking Agencies Incident Report Register
        </h1>

        <div className={styles.grid}>
          <Link href="/add" className={styles.card}>
            <h3>Add &rarr;</h3>
            <p>Add a new promoter or incident into the database</p>
          </Link>

          <Link href="/newSearch" className={styles.card}>
            <h3>Search &rarr;</h3>
            <p>Search for an existing entry in the database</p>
          </Link>

          <Link
            href="/admin"
            className={styles.card}
          >
            <h3>Admin &rarr;</h3>
            <p>Login for administrators</p>
          </Link>

          
        </div>
      </main>

      <footer>
        <Link
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          About this project
        </Link>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
