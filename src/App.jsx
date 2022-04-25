import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './components/videoList/VideoList';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyDVdYA1gpccEt6dmMxBngzlAGisogR7Ts4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <VideoList videos={videos} />
  );
}

export default App;
