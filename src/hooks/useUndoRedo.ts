import { useState, useEffect, useRef } from "react";

export const useUndoRedo = (initialValue:any, limit = 10) => {
  const [history, setHistory] = useState([initialValue]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef(null);
  const set = (value: any) => {
    let newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(value);
    if (newHistory.length > limit) {
      newHistory = newHistory.slice(newHistory.length - limit);
    }
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };
  const undo = () => {
    setCurrentIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  };
  const redo = () => {
    setCurrentIndex((currentIndex) =>
      Math.min(currentIndex + 1, history.length - 1)
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (inputRef.current && inputRef.current === document.activeElement) {
        if (event.ctrlKey && event.key === "z") {
          event.preventDefault();
          undo();
        } else if (event.ctrlKey && event.key === "y") {
          event.preventDefault();
          redo();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return [history[currentIndex], set, undo, redo, inputRef];
};
