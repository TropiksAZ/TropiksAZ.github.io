import { useEffect } from 'react';

//** Code to insert in every page to change the document's <meta> title tag */

const useTitle = (titleString) => {
    useEffect(() => {
        //** Get current title */
            const prevTitle = document.title;
        
        //** Change title to input */
            document.title = titleString;
        
        return () => {
            document.title = prevTitle;
        }
    })
  }

export default useTitle;