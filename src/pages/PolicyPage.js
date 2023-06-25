//** useEffectHooks */
    import useTitle from "../functions/useTitle";
    import useToTop from '../functions/useToTop';

//** Image to represent each PDF file */
    import pdfIMG from '../assets/documents/pdf-file.png';
//** Documents to show on page */
    import policyFile from '../assets/documents/policy.pdf';



//** Page to be used as the '/safety/' route */

const PolicyPage = () => {

    //** FUNCTION HEAD */

    //** If the user is not at the top of the page on page render, the user will be taken to the top */
        useToTop();

    //* Dinamicaly change the title of the current page - since react does not have pages */
        useTitle('"Tropiks AZ" noteikumi');

    //** Function for inserting the imported documents into the page by using different methods, based on screen size */
        const showDocuments = (document) => {
        
            //** If the screen is mobile sized - display the file as a clicable img section */
                if (window.innerWidth < 867) {
                    return (
                        <section
                            className='document-container'
                            onClick={() => window.open(document)}
                        >
                            <figure>
                                <img
                                    alt='An icon representing each pdf file displayed on this page'
                                    src={pdfIMG}
                                />
                            </figure>
                            <i>SIA 'Tropiks AZ' noteikumi un privātuma politika.pdf</i>
                        </section>
                    )
            //** If the screen is desktop sized - display the pdf file and it's content in an iframe */
                } else {
                    return (
                        <iframe
                            className='document-frame'
                            src={document}
                            type='application/pdf'
                            title='PDF fails, kas satur SIA "Tropiks AZ" privātuma politiku un mājas lapas lietošanas noteikumus'
                        />
                    )
                }
        };

    //** FUNCTION RETURN */
    return (
        <main
            className='policy-page'
        >

            <section
                className='main-page-title'
            >
                <h1>
                    MŪSU <span>NOTEIKUMI</span>
                </h1>
            </section>

            {
                showDocuments(policyFile)
            }
        
        </main>
    )
};

export default PolicyPage;