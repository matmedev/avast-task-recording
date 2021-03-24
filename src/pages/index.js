import Head from 'next/head';
import {InteractionsProvider} from '../context/interactions-context';
import InteractionList from '../components/interaction-list';
import SaveButton from '../components/save-button';

const Home = () => {
  return (
    <InteractionsProvider>
      <div className="container">
        <Head>
          <title>Interactions</title>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>

        <main>
          <h1 className="title">Interactions</h1>
          <div className="button-container">
            <SaveButton />
          </div>
          <InteractionList />
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          main {
            width: 65%;
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            text-align: center;
          }

          .button-container {
            display: flex;
            width: 100%;
            align-items: space-between;
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
    </InteractionsProvider>
  );
};

export default Home;
