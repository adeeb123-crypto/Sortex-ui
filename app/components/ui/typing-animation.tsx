// "use client";

// import { useEffect, useState } from "react";

// import { cn } from "../../lib/utils";

// interface TypingAnimationProps {
//   text: string;
//   duration?: number;
//   className?: string;
// }

// export default function TypingAnimation({
//   text,
//   duration = 200,
//   className,
// }: TypingAnimationProps) {
//   const [displayedText, setDisplayedText] = useState<string>("");
//   const [i, setI] = useState<number>(0);

//   useEffect(() => {
//     const typingEffect = setInterval(() => {
//       if (i < text.length) {
//         setDisplayedText(text.substring(0, i + 1));
//         setI(i + 1);
//       } else {
//         clearInterval(typingEffect);
//         setTimeout(() => {
//             setDisplayedText("");
//             setI(0);
//           }, 3000);
//       }
//     }, duration);

//     return () => {
//       clearInterval(typingEffect);
//     };
//   }, [duration, i]);

//   return (
//     <h1
//       className={cn(
//         "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
//         className,
//       )}
//     >
//       {displayedText ? displayedText : text}
//     </h1>
//   );
// }


"use client";

import { useEffect, useState } from "react";

import { cn } from "../../lib/utils";

interface TypingAnimationProps {
  texts: string[];
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  texts,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < texts[textIndex].length) {
        setDisplayedText(texts[textIndex].substring(0, i + 1));
        setI(i + 1);
        if(displayedText == "Possibilities" || displayedText == "Opportunities" || displayedText == "Challenges"){
            setDisplayedText("");
            return;
        }
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          setDisplayedText("");
          setI(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2500);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, textIndex, texts]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : texts[textIndex]}
    </h1>
  );
}

