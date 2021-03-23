import Head from 'next/head';
import useInteractions from '../api/use-interactions';
import Interaction from '../components/interaction';

const Home = () => {
  const interactions = useInteractions();

  return (
    <div className="container">
      <Head>
        <title>Interactions</title>
      </Head>

      <main>
        <h1 className="title">Interactions</h1>
        <div className="interactions-container">
          {interactions ? (
            interactions.map((interaction) => (
              <div className="interaction-item" key={interaction.time}>
                <Interaction interaction={interaction} />
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
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

        .interactions-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 2rem;
        }

        .interaction-item {
          width: 100%;
          margin-top: 1rem;
          margin-bottom: 1rem;
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
};

export default Home;
