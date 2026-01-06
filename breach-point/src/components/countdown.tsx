import React, { useEffect, useState } from "react";
import "./countdown.css";

interface CountdownProps {
  targetDate?: string;
}

const EVENT_DATE = "2026-02-14T04:30:00Z"; // 14 Feb 10:00 AM IST

const Countdown: React.FC<CountdownProps> = ({
  targetDate = EVENT_DATE,
}) => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(targetDate).getTime() - Date.now();

      if (diff <= 0) {
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(timer);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTime({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="digital-countdown">
      <div className="digital-time">
        {time.days}:{time.hours}:{time.minutes}:{time.seconds}
      </div>

      <div className="digital-labels">
        <span>DAYS</span>
        <span>HRS</span>
        <span>MIN</span>
        <span>SEC</span>
      </div>
    </div>
  );
};

export default Countdown;
