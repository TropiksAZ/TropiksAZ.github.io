//** Import data to be used in this page */
    import contactPageData from "../data/pages/contactPageData";

//** useEffectHooks */
    import useTitle from "../functions/useTitle";
    import useToTop from '../functions/useToTop'

//** Page to be used as the '/contact/' route */

const ContactPage = () => {

    //** FUNCTION HEAD */

    //** If the user is not at the top of the page on page render, the user will be taken to the top */
        useToTop();

    //* Dinamicaly change the title of the current page - since react does not have pages */
        useTitle('"Tropiks AZ" kontaktinformācija');

    //** FUNCTION RETURN */
    return (
        <main
            className='contact-page'
        >

            <section
                className='main-page-title'
            >
                <h1>
                    Mūsu <span>KONTAKTI</span>
                </h1>
            </section>

            {/*
            <iframe 
                title='Tropiks veikala atrašānās vietas attēlojums, izmantojot "Google Maps"'
                    src=
                        {
                            contactPageData[0].googleMap
                        }
                allowFullScreen='' 
                referrerPolicy='no-referrer-when-downgrade'
                className='google-maps-frame standart-margin'
            />
            */}

            <address
                className=' standart-margin align-center'
            >
                <b>
                    VEIKALA ADRESE:
                    <br></br>
                        <a 
                            href=
                                {
                                    contactPageData[0].contacts.googleMapsLink
                                } 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            {
                                contactPageData[0].contacts.adress
                            }
                        </a>
                </b>

                <b>
                    KONTAKTTĀLRUNIS:
                    <br></br>
                        <a 
                            href=
                                {
                                    'tel:' + contactPageData[0].contacts.countryCode + contactPageData[0].contacts.phoneNumber
                                } 
                            rel='noopener noreferrer'
                        >
                            {
                                contactPageData[0].contacts.countryCode + ' ' + contactPageData[0].contacts.phoneNumber
                            }
                        </a>
                </b>
                
                <b>
                    E-PASTS:
                    <br></br>
                        <a 
                            href=
                                {
                                    'mailto:' + contactPageData[0].contacts.eMail
                                } 
                            rel='noopener noreferrer'
                        >
                            {
                                contactPageData[0].contacts.eMail
                            }
                        </a>
                </b>
            </address>

                <h2
                    className=' standart-margin'
                >
                    Veikala darba laiks
                </h2>

                <section
                    className='contact-table-container standart-margin'
                >
                    <table>
                        <thead>
                            <tr>
                                <h3>Svētku dienās</h3>
                            </tr>
                            <tr>
                                <th>
                                    Diena
                                </th>
                                <th>
                                    Laiks
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contactPageData[0].holidayworkingHours.map(e => {
                                    return (
                                        <tr
                                            key=
                                                {
                                                    e.day
                                                }
                                        >
                                            <td>
                                                {
                                                    e.day
                                                }
                                            </td>
                                            <td>
                                                {
                                                    e.time
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>                    
                </section>

                <section
                    className='contact-table-container standart-margin'
                >
                    <table>
                        <thead>
                            <tr>
                                <h3>Ikdienā</h3>
                            </tr>
                            <tr>
                                <th>
                                    Diena
                                </th>
                                <th>
                                    Laiks
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contactPageData[0].workingHours.map(e => {
                                    return (
                                        <tr
                                            key=
                                                {
                                                    e.day
                                                }
                                        >
                                            <td>
                                                {
                                                    e.day
                                                }
                                            </td>
                                            <td>
                                                {
                                                    e.time
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>                    
                </section>

                <section
                    className=' standart-margin'
                >
                    <p>
                        {
                            contactPageData[0].intro
                        }
                    </p>

                    <br/>

                    <p>
                        {
                            contactPageData[0].mission
                        }
                    </p>

                    <br/>

                    <p>
                        {
                            contactPageData[0].principleIntro
                        }
                    </p>

                    <br/>

                    <ul>
                    {
                        contactPageData[0].principles.map(e => {
                            return (
                                <li 
                                    key=
                                        {
                                            e.principle
                                        }
                                    className='comet-li'
                                >
                                    <b>{e.principle}</b> {' - ' + e.value}
                                </li>
                            )
                        })
                    }
                    </ul>
                </section>
                
                <h2
                    className=' standart-margin'
                >
                    {
                        contactPageData[0].propsIntro
                    }
                </h2>

                <section
                    className='contact-table-container'
                >
                    <table>
                        <thead>
                                <tr>
                                    <th>
                                        REKVIZĪTS
                                    </th>
                                    <th>
                                        DATI
                                    </th>
                                </tr>
                        </thead>
                        <tbody>
                        {
                            
                            contactPageData[0].props.map((e, i) => {
                                return (
                                    <tr
                                        key=
                                            {
                                                e.name
                                            }
                                    >
                                        <td>
                                            {
                                                e.name
                                            }
                                        </td>
                                        <td>
                                            {
                                                e.value
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>                    
                </section>
        </main>
    )
};

export default ContactPage;