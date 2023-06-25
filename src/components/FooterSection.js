
//** Code for the <footer> section to be used through the App */

const FooterSection = () => {

    //** FUNCTION HEAD */
    
    //** Gets the current year */
        const currentYear = new Date().getFullYear();

    //** RETURN FUNCTION */
    return (
        <footer>

            <section
                aria-hidden='true'
                className='footer-line-break'
            >
            </section>

            <p>
                &#xa9; Copyright {currentYear}<br />
                SIA "TROPIKS AZ"<br/>
                Visas tiesības aizsargātas
            </p>
        </footer>
    )
};

export default FooterSection;

