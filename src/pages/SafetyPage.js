//** Import data to be used in this page */
    import safetyPageData from "../data/pages/safetyPageData";

//** useEffectHooks */
    import useTitle from "../functions/useTitle";
    import useToTop from '../functions/useToTop'

//** Page to be used as the '/safety/' route */

const SafetyPage = () => {

    //** FUNCTION HEAD */

    //** If the user is not at the top of the page on page render, the user will be taken to the top */
        useToTop();

    //* Dinamicaly change the title of the current page - since react does not have pages */
        useTitle(safetyPageData[0].intro);

    //** FUNCTION RETURN */
    return (
        <main
            className='safety-page'
        >

            <section
                className='main-page-title standart-padding'
            >
                <h1>
                    Šaujiet <span>DROŠI!</span> 
                </h1>
            </section>
            
            <section
                className='standart-padding'
            >
                {
                    safetyPageData[0].subText.map(e => {
                        return (
                            <section
                                key=
                                    {
                                        e.id
                                    }
                            >
                                <p>
                                    {
                                        e.text
                                    }
                                </p>
                                <br/>
                            </section>
                        )
                    })
                }
            </section>

            <iframe 
                src=
                    {
                        safetyPageData[0].safetyVideo
                    } 
                title='"Youtube" video, kurā ir izskaidroti pirotehnikas lietošanas noteikumi' 
                className='safety-video-frame standart-margin'
                allowFullScreen
            />

            <section
                className='standart-padding standart-margin'
            >
                <h2>
                    {
                        safetyPageData[0].rulesIntro
                    }
                </h2>
            </section>

            <section
                className='standart-padding'
            >
                <ul>
                    {
                        safetyPageData[0].otherRules.map(e => {
                            return (
                                <li
                                    key=
                                        {
                                            e.id
                                        }
                                    className='comet-li'
                                >
                                    {
                                        e.text
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

        </main>
    )
};

export default SafetyPage;