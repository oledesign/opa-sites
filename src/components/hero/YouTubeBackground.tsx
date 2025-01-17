import React, { useEffect, useState } from 'react';

const videos = [
  'zsSHI-uBKGo',
  'rHG5qmaSP6k',
  '5ySRDSz5UHY'
];

const YouTubeBackground: React.FC = () => {
  const [videoId] = useState(() => {
    // Select a random video on initial load
    return videos[Math.floor(Math.random() * videos.length)];
  });

  useEffect(() => {
    // Create YouTube player container
    const container = document.createElement('div');
    container.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="position: absolute; width: 300%; height: 300%; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;"
      ></iframe>
    `;

    // Add container to the player element
    const playerElement = document.getElementById('youtube-player');
    if (playerElement) {
      playerElement.appendChild(container);
    }

    // Cleanup
    return () => {
      if (playerElement) {
        playerElement.innerHTML = '';
      }
    };
  }, [videoId]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div 
          id="youtube-player"
          className="absolute w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Increased overlay opacity for better text visibility */}
      </div>
    </div>
  );
};

export default YouTubeBackground;