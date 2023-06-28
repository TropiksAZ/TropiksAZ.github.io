
//** Video for the hero section - the be looped without audio */
    import heroVideo from '../assets/video/heroBackground.mp4';

//** Hero section to be used on LandingPage.js before the main content */

const HeroSection = () => {

    //** FUNCTION HEAD */


    
    //** RETURN FUNCTION */
    return (
        <section
            className='hero-section'
        >
                <video
                    autoPlay loop playsInline muted
                    className='hero-video'
                >
                    <source 
                        src=
                        {
                            heroVideo
                        }
                        type='video/mp4'
                    />
                </video>

                <h2
                    className='hero-text'
                >
                    Noslēdz svētkus<br/>
                    ar <span>UGUŅOŠANU!</span>
                </h2>

        </section>
    )
};

export default HeroSection;