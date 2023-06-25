import { useEffect } from "react";

//** Function ment to be used on every page where the user should be redirected to the top of the page */
//** This is to fix the react-router-dom issue where it sends the user to random spots on the page on render */

const useToTop = () => {

    useEffect(() => {
        window.scrollTo(0, 0) //* "0, 0" = to the very top of the document */
    }, []);

};

export default useToTop;