import {InteractionsProvider} from '../context/interactions-context';
import InteractionList from '../components/interactions/interaction-list';
import SaveButton from '../components/interactions/save-button';
import InteractionsHead from '../components/common/interactions-head';
import GlobalStyles from '../styles/global';
import Link from 'next/link';

const Home = () => {
  return (
    <InteractionsProvider>
      <div className="container">
        <InteractionsHead title="Interactions" />

        <main>
          <h1 className="title">Interactions</h1>
          <div className="button-container">
            <SaveButton />
            <Link href="/stats">
              <a>{`stats >`}</a>
            </Link>
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
            justify-content: space-between;
          }
        `}</style>
        <GlobalStyles />
      </div>
    </InteractionsProvider>
  );
};

export default Home;
