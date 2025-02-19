import { useState, useEffect } from 'react';
import { FiBookOpen } from 'react-icons/fi'; 
import s from './HomePage.module.css';

const HomePage = () => {
  const fullText = "Manage your contacts with our app! Keep all your contacts in one place. Create, edit, and delete contacts anytime, anywhere.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); 
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className={s.homePage}>
      <h1 className={s.title}>
        <FiBookOpen className={s.icon} /> Welcome to the Phonebook App
      </h1>
      <div className={s.descriptionBox}>
        <p className={s.typing}>{displayedText}</p>
      </div>
    </div>
  );
};

export default HomePage;
