import React from "react";
import "./timeline.css";

interface TimelineEvent {
    date: string;
    title: string;
}

const events: TimelineEvent[] = [
    {
        date: "06 JAN 2026",
        title: "Registrations Open",
    },
    {
        date: "12 FEB 2026",
        title: "Registrations Close",
    },
    {
        date: "14 - 15 FEB 2026",
        title: "Online Round",
    },
    {
        date: "18 FEB 2026",
        title: "Writeups Submission",
    },
    {
        date: "06 - 07 MAR 2026",
        title: "Offline Round (Finals)",
    },
];

const Timeline: React.FC = () => {
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = document.querySelectorAll(".timeline-item");
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="timeline" id="timeline">
            <h2>Event Roadmap</h2>

            <div className="timeline-container">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">{event.date}</span>
                            <h3 className="timeline-title">{event.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
