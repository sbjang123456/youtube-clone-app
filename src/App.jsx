import { useEffect, useState, useCallback } from 'react';
import styles from './App.module.css';
import SearchHeader from './components/searchHeader/SearchHeader';
import VideoDetail from './components/videoDetail/VideoDetail';
import VideoList from './components/videoList/VideoList';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback((query) => {
    youtube.search(query).then(videos => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  }, []);

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid' } />
        </div>
      </section>

    </div>
    
  );
}

export default App;
