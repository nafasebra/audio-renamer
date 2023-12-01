import React from "react";

interface PropType {
  title?: string;
  artist?: string;
}

function MusicBox(props: PropType) {
  const { artist, title } = props;
  
  return (
    <div className="music_box">
      <div className="music_box__cover">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
          />
        </svg>
      </div>
      <div className="music_box__text">
        <h3 className="music_box__title">{title || "The music title"}</h3>
        <p className="music_box__artist">{artist || "the artist"}</p>
      </div>
    </div>
  );
}

export default MusicBox;
