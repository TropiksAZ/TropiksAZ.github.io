import { useLocation } from "react-router-dom";

//** useEffectHooks */
    import useTitle from "../functions/useTitle";
    import useToTop from '../functions/useToTop'

import productData from '../data/fireworks/productData.js';

//** Page to be used as the '/product/:id' route */

const ProductPage = () => {

    //** FUNCTION HEAD */

    //** If the user is not at the top of the page on page render, the user will be taken to the top */
        useToTop();

    //** Gain the product id that react-router-dom passed into the url */
        //** Get the current location object */
            const location = useLocation();
        //** Get the current url(pathname) and the last part of the url or the :id of the product */
            const productId = location.pathname.split('/').pop();
        //** Using the product id, find all the data of the product in question, by filtering the product list */
            const singleProductData = productData.filter(product => product.id === productId);

    //* Dinamicaly change the title of the current page - since react does not have pages */
        useTitle(productData[0].id + ' - ' + productData[0].name);

    //** FUNCTION RETURN */
    return (
        singleProductData.map(el => {
            return (
                <main
                    key=
                        {
                            el.id
                        }
                    className='product-page'
                >
                    <section
                        className='main-page-title standart-padding'
                    >
                        <h1>
                            {el.id}<br/><span>{el.name}</span>
                        </h1>

                        <h2
                            className='product-page-price'
                        >
                            {
                                el.price[0].value + ' ' + el.price[0].symbol
                            }
                        </h2>
                    </section>

                    <section
                        className='standart-padding standart-margin'
                    >
                        <figure>
                            <img 
                                alt=
                                    {
                                        "Bilde ar pirotehnisko izstrādājumu " + el.id + ' - ' + el.name
                                    }
                                src=
                                    {
                                        el.media[0].img
                                    }
                                height={'auto'}
                                width={'auto'}
                            />
                        </figure>
                    </section>

                    <section
                        className='standart-margin product-video-container'
                    >
                        {
                            el.media[0].video === '-' 
                            ? 
                                <p
                                    className='standart-padding'
                                    style={{
                                        textAlign:'center'
                                    }}
                                ><i>*Pašlaik šim pirotehnikas izstrādājumam "{el.id + ' - ' + el.name}" <br/> nav pieejams demonstrācijas video</i></p>
                            :
                                <iframe
                                    className='product-video-frame'
                                    name='youtube-player'
                                    title='Youtube video, kurā var redzēt pirotehnisko izstrādājumu darbībā'
                                    src=
                                        {
                                            el.media[0].video + "?rel=0"
                                        }
                                    allowFullScreen
                                />
                        }
                    </section>

                    <table>
                        <thead>
                            <tr>
                                <th>
                                    PRODULTA ĪPAŠĪBA
                                </th>
                                <th>
                                    RAKSTUROJUMS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            el.info.map(data => {
                                return (
                                    <tr
                                        key=
                                            {
                                                data.name
                                            }
                                    >
                                        <td>
                                            {
                                                data.name
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.value
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <i>*Preču cena norādīta ar iekļautu PVN 21%</i>

                </main>
            )
        })
    )
};

export default ProductPage;