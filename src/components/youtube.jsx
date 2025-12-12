const YouTubeAutoPlay = ({ videoId }) => {
  return (
    <div className="youtube-wrapper project-video">
      <iframe
        className="project--video"
        // src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&loop=1&autoplay=0`}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&loop=1&playlist=${videoId}&autoplay=0`}

 

        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                const player = el.contentWindow;
                if (entry.isIntersecting) {
                  player.postMessage(
                    JSON.stringify({ event: "command", func: "playVideo" }),
                    "*"
                  );
                } else {
                  player.postMessage(
                    JSON.stringify({ event: "command", func: "pauseVideo" }),
                    "*"
                  );
                }
              },
              { threshold: 0.5 }
            );
            observer.observe(el);
          }
        }}
      ></iframe>
    </div>
  );
};
export default YouTubeAutoPlay;