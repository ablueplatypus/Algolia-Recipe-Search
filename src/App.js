import './App.css';
import './Theme.css';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  HitsPerPage,
  SearchBox,
  Pagination,
  Stats,
  SortBy,
} from 'react-instantsearch';
import Hit from './Hit';
import Footer from './Footer';

const searchClient = algoliasearch('EC0ZAMDQTW', 'd1e52b8f6996d9cc07b0165d81716a6f');

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <InstantSearch 
      searchClient={searchClient} 
      indexName="test_recipes"
      insights={true}
      >
      <SearchBox placeholder ="Search here..." />
      <div className='HitDetails'>
      <Stats />
      <HitsPerPage
        items={[
          { label: '12 per page', value: 12, default: true },
          { label: '40 per page', value: 40 },
        ]}
      />
      <SortBy
              items={[
                { label: 'Raiting', value: 'test_recipes'},
                { label: 'Raiting (asc)', value: 'test_recipes_raiting_asc' },
                { label: 'Raiting (desc)', value: 'test_recipes_raiting_desc' },
              ]}
            />
      </div>
      <Hits hitComponent={Hit} />
      <Pagination 
       showLast={true}
      />
      </InstantSearch>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
