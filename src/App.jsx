import { useEffect, useState } from 'react';
import styles from './App.module.css';
import SearchHeader from './components/searchHeader/SearchHeader';
import VideoList from './components/videoList/VideoList';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query).then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
    
  );
}

export default App;
