import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./faq.css";

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: "Who can participate?",
        answer: "The CTF is open to all students with a passion for cybersecurity. Teams can consist of 1-3 members."
    },
    {
        question: "Is there a registration fee?",
        answer: "Yes, participation in Breach Point is completely charge you 250 rupess to maintain the seriousness of the event."
    },
    {
        question: "What is the format of the Online CTF?",
        answer: "The Online CTF round is a Jeopardy-style CTF covering domains like Web Exploitation, Cryptography, Reverse Engineering, Forensics, and OSINT"
    },
    {
        question: "Do I need to be an expert?",
        answer: "Not into. We have challenges ranging from beginner to advanced levels. It's a great place to learn!"
    },
    {
        question: "How does qualification for the offline round work?",
        answer: "After the online round, the top 70 teams will be required to submit detailed write-ups for the challenges they solved."
    },
    {
        question: "How many teams advance to the offline finals, and when are they held?",
        answer: "From the write-up submissions, the top 50 teams will be selected to participate in the offline round on March 6 and 7."
    }

];

const Faq: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                <span>{item.question}</span>
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
