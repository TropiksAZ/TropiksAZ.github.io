import { useEffect } from 'react';

// Custom hook to set the document title on any page
const useTitle = (titleString) => {
  useEffect(() => {
    const prevTitle = document.title;    // save current title
    document.title = titleString;        // set new title

    return () => {
      document.title = prevTitle;        // restore when unmounted
    };
  }, [titleString]); // <-- important dependency
};

export default useTitle;