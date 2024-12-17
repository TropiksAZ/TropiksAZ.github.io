//** REACT IMPORTS */
    import { useEffect } from 'react';
//** React-router-dom for creating <Link />'s to '/product/:id" page */
    import { Link } from 'react-router-dom';
//** REDUX IMPORTS - Alows to access (useSelector) and update (useDispatch) redux state slice */
    import { useDispatch, useSelector } from 'react-redux'; 
//** REDUX IMPORTS - import the actions that will be used to update the state of different slices */
    import { setCategoryList } from '../redux/slices/categorySlice.js';
    import { setSelectedCategory } from '../redux/slices/select/selectedCategorySlice.js';
    import { setSelectedPrice } from '../redux/slices/select/selectedPriceSlice.js';
    import { setProductList } from '../redux/slices/productSlice.js';

//* Imports data about all the products */
    import productData from '../data/fireworks/productData.js';

//** onlyUnique - Schema for filtering only unique values from a list by using .filter() */
    import onlyUnique from '../functions/onlyUnique.js';

//* Imports the hero section to be used at the top of the landing page */
    import VideoSection from '../components/VideoSection.js';

//** Page to be used as the '/' or root, or index route */

const LandingPage = () => {
    //** FUNCTION HEAD */

    //** dispatch(action) is needed to run a reducer (action) and update the state of the redux slice */
        const dispatch = useDispatch();
    //** Access the redux state (formula: state.sliceReferenceName.initialStateValue */
        //** Access to the array of all product categories */
            const categoryList = useSelector((state) => state.categoryList.categories);
        //** Access to the selected value of <select> - used to change defaultValue */
            const selectedCategory = useSelector((state) => state.selectedCategory.selected);
            const selectedPrice = useSelector((state) => state.selectedPrice.selected);
        //** Access to the list of filtered products from the full list of products - to be displayed */
            const productList = useSelector((state) => state.productList.products);

    //** Based on the full profuct list - determine product categories for <select> */
        useEffect(() => {
            //** ake the array of all categories and return a new array with each unique cateogy once */
                const categoryArray = productData.map(product => product.info[0].value).filter(onlyUnique);
            //* Set the categoryList to the newly created array and preserve it in state */
                dispatch(setCategoryList(categoryArray));
        }, [dispatch]);

    //** Determine the list of products to be displayed */
        useEffect(() => {
            //** Prepare a new array to save the new product list - do not mutate state directly */
                let products = [];

            //** Filter all products whose "Kategorija" === selectedCategory */
                products = productData.filter(product => {
                    //* Return the product that matches the filter */
                        return product.info.some(el => el.name === "Kategorija" && el.value === selectedCategory);
                })

            //* Make sure that the product list only contains products that are to be displayed */
                products = products.filter(product => {
                    return product.meta[0].display === 'yes';
                })

            //* Make sure that the product list is displayed in ascending or descending order - based on <select>) */
            if (selectedPrice === "ascending") {
                products.sort((a, b) => Number(a.price[0].value) - Number(b.price[0].value));
            } else if (selectedPrice === "descending") {
                products.sort((a, b) => Number(b.price[0].value) - Number(a.price[0].value));
            }

            //** Save the filtered product list in state */
                dispatch(setProductList(products))

        }, [dispatch, selectedCategory, selectedPrice]);

    //** Function for updating the list of filters to be used for product filtering, by using <select> */
        const updateFilters = (event) => {
            //* If the user has changes the product kategory select */
                if(event.target.name === "categorySelecter") {
                    //** Change the price select defaultValue state */
                        return dispatch(setSelectedCategory(event.target.value));
                }
            //* If the user has changes the price sorting method select */
                if(event.target.name === "priceSelector") {
                    //** Change the price select defaultValue state */
                        return dispatch(setSelectedPrice(event.target.value));
                }
        };

    //** FUNCTION RETURN */
    return (
        <section>
            
            <VideoSection />

            <main
                className='landing-page'
            >

                <section
                    className='main-landing-page-title'
                >
                    <h1>
                        MŪSU <span>PIROTEHNIKA</span>
                    </h1>
                </section>

                <section
                    className='product-filters'
                >
                    <section
                        className='product-filter'
                    >
                        <label 
                            htmlFor='categorySelect'
                        >
                            KATEGORIJA
                        </label>
                            <select
                                id='categorySelect'
                                name='categorySelecter'
                                defaultValue=
                                    {
                                        selectedCategory
                                    }
                                onChange=
                                    {
                                        updateFilters
                                    }
                            >
                                {categoryList.map((category, i) => (
                                    <option 
                                        key=
                                            {
                                                category
                                            } 
                                        value=
                                            {
                                                category
                                            }
                                    >
                                        {
                                            category.charAt(0).toUpperCase() + category.slice(1)
                                        }
                                    </option>
                                ))}
                            </select>
                    </section>

                    <section
                        className='product-filter'
                    >
                        <label 
                            htmlFor='priceSelect'
                        >
                            CENA
                        </label>
                            <select
                                id='priceSelect'
                                name='priceSelector'
                                defaultValue=
                                    {
                                        selectedPrice
                                    }
                                onChange=
                                    {
                                        updateFilters
                                    }
                            >
                                <option 
                                    value='descending'
                                >
                                    Sākot ar augstāko
                                </option>
                                <option 
                                    value='ascending'
                                >
                                    Sākot ar zemāko
                                </option>
                            </select>
                    </section>
                </section>


                <section
                    className='product-display'
                >

                    {
                        productList.length <= 0 
                        ? 
                            <section
                                className='product-display-empty animate pop'
                            >
                                <p>
                                    Pašlaik mūsu noliktavā nav pieejami pirotehniskie izstrādājumi, kas atbilstu Jūsu meklētajiem kritērījiem.
                                </p>
                            </section>
                        :
                            productList.map(product => (
                                <section
                                    key=
                                        {
                                            product.id
                                        }
                                    className='product-card animate pop'
                                >
                                    <Link
                                        to={{
                                            pathname: `/produkti/${product.id}`
                                        }}
                                        className='product-link'
                                    >
                                        <section
                                            className='product-card-img'>
                                            <picture>
                                                <source 
                                                    type='image/webp' 
                                                    srcSet=
                                                        {
                                                            product.media[0].webp
                                                        } 
                                                />
                                                <img 
                                                    alt=
                                                        {
                                                            "Foto ar pirotehnisko izstrādājumu " + product.name + ' - ' + product.id
                                                        }
                                                    src=
                                                        {
                                                            product.media[0].img
                                                        }
                                                    height={'100%'}
                                                    width={'350px'}
                                                />
                                            </picture>
                                        </section>

                                        <section
                                            className='product-card-info'
                                        >
                                            <h2>
                                                {product.id}<br />{product.name}
                                            </h2>
                                            <h3
                                                className='product-card-info-price'
                                            > 
                                                {
                                                    product.price[0].value + ' ' + product.price[0].symbol
                                                }
                                            </h3>
                                        </section>
                                    </Link>
                                </section>
                            ))
                    }

                </section>
            </main>
        </section>
    )
};

export default LandingPage;