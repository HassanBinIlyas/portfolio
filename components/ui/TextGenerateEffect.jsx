"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export default function TextGenerateEffect({ words, className, extraClasses }) {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
            animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
    }, [animate]);

    return (
        <div className={`${className} ${extraClasses}`}>
            <div ref={scope} className="!leading-[1.05] tracking-wide">
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className="opacity-0 inline-block mr-1"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
