import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Headphones, Clock } from 'lucide-react';

import podcastCZ from '@/assets/podcast-obseum.mp3.asset.json';
import podcastEN from '@/assets/podcast-obseum-en.mp3.asset.json';
import { useLanguage } from '@/contexts/LanguageContext';

const PodcastPlayer: React.FC = () => {
  const { t, language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioUrl = language === 'en' ? podcastEN.url : podcastCZ.url;

  // Re-initialize audio when language changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Pause and reset when source changes
    audio.pause();
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    audio.src = audioUrl;
    audio.load();
  }, [audioUrl]);

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
  }, [audioUrl]);

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
    <section id="podcast" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-ink/50 mb-3 block">
            {t('podcast.eyebrow')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tightest text-ink leading-[1.05] mb-4">
            {t('podcast.title')}
          </h2>
          <p className="text-lg text-ink/65 leading-relaxed">
            {t('podcast.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="rounded-3xl bg-[hsl(var(--teal-deep))] text-cream p-6 md:p-8 shadow-soft">
            <div className="flex items-start gap-5 mb-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-lime text-lime-ink flex items-center justify-center">
                <Headphones className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold leading-snug mb-1">
                  {t('podcast.episodeTitle')}
                </h3>
                <p className="text-sm text-cream/70 mb-2">
                  {t('podcast.episodeDesc')}
                </p>
                <div className="flex items-center gap-3 text-xs text-cream/55">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {t('podcast.duration')}
                  </span>
                  <span>Obseum</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="shrink-0 w-12 h-12 rounded-full bg-lime text-lime-ink flex items-center justify-center hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--teal-deep))]"
                aria-label={isPlaying ? t('podcast.pause') : t('podcast.play')}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              <div className="flex-1">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--lime)) ${progress}%, hsl(0 0% 100% / 0.15) ${progress}%)`,
                  }}
                  aria-label={t('podcast.seekLabel')}
                />
                <div className="flex justify-between mt-1.5 text-xs text-cream/55">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <audio ref={audioRef} src={audioUrl} preload="metadata" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPlayer;

