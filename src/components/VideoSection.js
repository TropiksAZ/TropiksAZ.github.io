
//** Video for the hero section - the be looped without audio */
    import heroVideo from '../assets/video/heroBackground.mp4';

//** Hero section to be used on LandingPage.js before the main content */

const VideoSection = () => {

    //** FUNCTION HEAD */


    
    //** RETURN FUNCTION */
    return (
        <section
            className='video-section'
        >
                <video
                    autoPlay 
                    loop 
                    playsInline 
                    muted
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
                    className='video-text'
                >
                    Noslēdz svētkus<br/>
                    ar <span>UGUŅOŠANU!</span>
                </h2>

        </section>
    )
};

export default VideoSection;