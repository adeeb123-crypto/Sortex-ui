import React from 'react';
import Styles from './Canvas.module.css';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import AnimatedShinyText from "../ui/animated-shiny-text";
import WordFadeIn from "../ui/word-fade-in";
import TypingAnimation from "../ui/typing-animation";

function Canvas() {
    return (
        <>
            <div className={Styles.magicpattern}>
                <div className="z-10 flex min-h-[16rem] items-center justify-center">
                    <div
                        className={cn(
                            "group rounded-full border border-black/5 bg-neutral-100 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-indigo-100 dark:hover:bg-indigo-800",
                        )}
                    >
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Introducing Sortex</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
                </div>
                <WordFadeIn words="Explore New" />
                <TypingAnimation
                    className="text-4xl font-bold text-black dark:text-white"
                    texts={["Possibilities", "Opportunities", "Challenges"]}
                />
            </div>

        </>
    );
}

export default Canvas;