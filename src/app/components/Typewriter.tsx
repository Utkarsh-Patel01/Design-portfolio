import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeDelete = 2000,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return (
    <span className="inline-block relative">
      {currentText}
      <span className="animate-pulse ml-[1px] inline-block w-[2px] h-[0.9em] bg-current align-middle -translate-y-[1px]" />
    </span>
  );
}
