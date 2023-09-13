import { dummy } from './movieDummy';
import Movie from './components/Movie';

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
