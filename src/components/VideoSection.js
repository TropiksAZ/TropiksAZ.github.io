
//** Video for the hero section - the be looped without audio */
    // import backgroundVideo from '../assets/video/backgroundVideo.webm';
    import videoPoster from '../assets/video/backgroundVideoPoster.png';

//** Hero section to be used on LandingPage.js before the main content */

const VideoSection = () => {

    //** FUNCTION HEAD */


    
    //** RETURN FUNCTION */
    return (
        <section
            className='header-element-section'
        >

                <img 
                    alt='Uguņošana uz laipas'
                    src={videoPoster}
                    className='header-element'
                />
                
                {/*
                <video
                    autoPlay 
                    loop 
                    playsInline 
                    muted
                    poster=
                        {
                            videoPoster
                        }
                >
                    <source 
                        src=
                        {
                            backgroundVideo
                        }
                        type='video/mp4'
                    />
                There should be a background video here, but your browser does not support the HTML video tag.
                </video>
                */}

                <h2
                    className='header-element-text'
                >
                    Noslēdz svētkus<br/>
                    ar <span>UGUŅOŠANU!</span>
                </h2>

        </section>
    )
};

export default VideoSection;