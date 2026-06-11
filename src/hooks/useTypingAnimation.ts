import { useState, useEffect, useCallback } from 'react';

interface UseTypingAnimationOptions {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdDuration?: number;
  pauseDuration?: number;
}

export function useTypingAnimation({
  phrases,
  typeSpeed = 80,
  deleteSpeed = 40,
  holdDuration = 2000,
  pauseDuration = 500,
}: UseTypingAnimationOptions) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  const typeNext = useCallback(() => {
    const phrase = phrases[phraseIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < phrase.length) {
        setDisplayText(phrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          let delIndex = phrase.length;
          const deleteInterval = setInterval(() => {
            if (delIndex > 0) {
              setDisplayText(phrase.slice(0, delIndex - 1));
              delIndex--;
            } else {
              clearInterval(deleteInterval);
              setTimeout(() => {
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
              }, pauseDuration);
            }
          }, deleteSpeed);
        }, holdDuration);
      }
    }, typeSpeed);

    return () => clearInterval(typeInterval);
  }, [phraseIndex, phrases, typeSpeed, deleteSpeed, holdDuration, pauseDuration]);

  useEffect(() => {
    const cleanup = typeNext();
    return cleanup;
  }, [typeNext]);

  return { displayText };
}
