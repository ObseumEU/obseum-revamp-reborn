import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Headphones, Clock } from 'lucide-react';

import podcastAsset from '@/assets/podcast-obseum.mp3.asset.json';

const PodcastPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const formatTime = (t: number) => {
    if (!t || isNaN(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="podcast" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary">
            Podcast
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Nechce se vám číst? Poslechněte si nás.
          </h2>
          <p className="text-lg text-muted-foreground">
            6 minut, které vám ušetří měsíce zkoumání, jak AI funguje ve firmách jako ta vaše.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
            {/* Top row */}
            <div className="flex items-start gap-5 mb-6">
              <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold leading-snug mb-1">
                  AI agenti ukončí éru digitálních kurýrů
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Jak přestat kopírovat data z okna do okna a nechat stroj dělat rutinu za vás.
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    5:57
                  </span>
                  <span>Obseum</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={isPlaying ? 'Pozastavit' : 'Přehrát'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>

              <div className="flex-1">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-1.5 appearance-none rounded-full bg-border cursor-pointer accent-primary"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--primary)) ${progress}%, hsl(var(--border)) ${progress}%)`,
                  }}
                  aria-label="Pozice v audiu"
                />
                <div className="flex justify-between mt-1.5 text-xs text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <audio ref={audioRef} src={podcastAsset.url} preload="metadata" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPlayer;
