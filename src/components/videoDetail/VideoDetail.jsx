import React from 'react';
import styles from './VideoDetail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => {
  
  return (
    // <h1>{video.snippet.title}</h1>
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="Youtube Video Player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      >
      </iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  )
}

export default VideoDetail;