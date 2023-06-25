//** onlyUnique - Schema for filtering only unique values from a list by using .filter() */

const onlyUnique = (value, index, array) => {
    return array.indexOf(value) === index;
};

export default onlyUnique;