import { useEffect, useState } from 'react';

type TypingTextProps = { text: string };

const TypingText = ({ text }: TypingTextProps) => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, index + 1));
      index += 1;
      if (index >= text.length) clearInterval(interval);
    }, 55);

    return () => clearInterval(interval);
  }, [text]);

  return <h1 className="text-4xl font-bold md:text-6xl">{display}<span className="animate-pulse">|</span></h1>;
};

export default TypingText;
