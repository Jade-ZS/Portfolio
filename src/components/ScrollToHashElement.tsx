import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHashElement() {
  let location = useLocation();

  let hashElement = useMemo(() => {
    let hash = location.hash;
    // const removeHashCharacter = (hash : string) => hash.slice(1);
    if (hash) {
      return document.getElementById(hash.slice(1))
    } 
  }, [location]);

  useEffect(() => {
    if(hashElement) {
      hashElement.scrollIntoView({
        behavior: 'smooth',
        inline:'nearest',
      })
    }
  }, [hashElement])

  return null;
}