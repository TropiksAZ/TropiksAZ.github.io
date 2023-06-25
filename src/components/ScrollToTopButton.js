
//** Code for the scroll to top button to appear through the App */

const ScrollToTopButton = () =>{
  
  //** FUNCTION HEAD */

    //** Function to toogle when to show and when to hide the button */

    const toggleVisible = () => {
      //** Get current scroll position */
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;

      //** Get the scroll to top button */
        const button = document.getElementById('scrollToTop');
      
      //** If the user has scrolled X away from the top, add animation to show the button */
        //** Animations: slide-out and slide-in */
      if (scrolled > 1500){
        button.classList.remove('slide-out');
        button.classList.add('slide-in');
      } 
      //** If the user has scrolled X closer to the top, add animation to hide the button */
        //** Animations: slide-out and slide-in */
      else if (scrolled <= 1500){
        button.classList.remove('slide-out');
        button.classList.add('slide-out');
      }
    };
  
  //** Function to determine what will happen when the user clicks on the button - the user is "scrolled" to the top of the screen */
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
  
  //** Adds an EventListener to keep track of user's scrolling habbits and to hide/show the button reseptively */
    window.addEventListener('scroll', toggleVisible);
  
  //** RETURN FUNCTION */
  return (
    <section
      onClick=
      {
        scrollToTop
      }
      
      id='scrollToTop'
      
      className='scroll-to-top-button'
    >
      <section
        className='scroll-to-top-icon'
      >
        &#10569;
      </section>
    </section>
  );
};
  
export default ScrollToTopButton;