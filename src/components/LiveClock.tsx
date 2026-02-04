import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = time.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatTime = time.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className="text-xs text-gray-600 text-center">
      <div className="capitalize mb-1">{formatDate}</div>
      <div className="font-bold text-lg text-gray-900 flex items-center justify-center gap-1">
        <span>•</span>
        <span>{formatTime}</span>
      </div>
    </div>
  );
}
