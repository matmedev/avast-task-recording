import {InteractionsProvider} from '../context/interactions-context';
import InteractionsHead from '../components/common/interactions-head';
import GlobalStyles from '../styles/global';
import Link from 'next/link';
import InteractionsPerType from '../components/stats/interactions-per-type';
import TimeBetweenInteractions from '../components/stats/time-between-interactions';
import InputSequence from '../components/stats/input-sequence';
import TotalTime from '../components/stats/total-time';

const Stats = () => {
  return (
    <InteractionsProvider>
      <div className="container">
        <InteractionsHead title="Stats" />

        <main>
          <h1 className="title">Stats</h1>
          <div className="button-container">
            <Link href="/">
              <a>{`< interactions`}</a>
            </Link>
          </div>
          <div className="stats-grid">
            <InteractionsPerType />
            <TimeBetweenInteractions />
            <InputSequence />
            <TotalTime />
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

          .button-container {
            display: flex;
            width: 100%;
            align-items: space-between;
          }

          .stats-grid {
            width: 100%;
            margin-top: 2rem;
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          }
        `}</style>
        <GlobalStyles />
      </div>
    </InteractionsProvider>
  );
};

export default Stats;
