import { useEffect } from "react";

const useScrollReveal = (dependencies: any[] = []) => {
    useEffect(() => {
        // Observer options
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        // Stop observing once active to prevent flickering
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Reduced threshold for better triggering
                rootMargin: "0px 0px -20px 0px",
            }
        );

        // Wait a bit for DOM to be fully ready
        let elements: NodeListOf<Element>;
        const timer = setTimeout(() => {
            elements = document.querySelectorAll(".reveal");
            elements.forEach((el) => observer.observe(el));
        }, 200);

        return () => {
            clearTimeout(timer);
            if (elements) {
                elements.forEach((el) => observer.unobserve(el));
            }
            observer.disconnect();
        };
    }, dependencies);
};

export default useScrollReveal;
