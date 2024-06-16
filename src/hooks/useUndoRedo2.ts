import { StoreContext } from "@/store";
import { useState ,useContext } from "react";

export const useUndoRedo2 = (initialValue: any, limit = 10) => {
    const store = useContext(StoreContext);
  const [history, setHistory] = useState(initialValue);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    
    // store.removeEditorElement(store.editorElements[store.editorElements.length-1].id);
    // store.refreshElements();
  };
  const redo = () => {
    setCurrentIndex((currentIndex) =>
      Math.min(currentIndex + 1, history.length - 1)
    );
    
    // console.log(history[currentIndex][history[currentIndex].length-1]);
    // store.addEditorElement(history[currentIndex][history[currentIndex].length-1]);
    
  };

  return [history[currentIndex], set, undo, redo];
};
