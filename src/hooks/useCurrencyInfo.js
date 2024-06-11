// hooks are nothing but functions 
// custom hooks
// custom hooks can also use built-in hooks

import {useState, useEffect} from 'react'

function useCurrencyInfo(currency) {
     // we will convert the data into json and hold it in a hook (because if we hold the data in a varibale it will doesn't update in the ui)
     // in useState we have added an empty object by default in case any response is not come it will show an empty object and the object willl act as an defaulyt vallue that will store the deafult value of the currency
     const [data, setData] = useState({})

     // defining date 
     const date = new Date();
     const todayDate = date.toLocaleDateString('en-CA');

    // we will use a hook here to load this useCuurency hook when some event is  triggered --- useEffect hook
    useEffect(() => {
        // we will call an api here to conversion
        // we can call api using fetch method
        // note: most api data returned in string, so to use them we should convert them into json
        // so we will convert it into json using optional chaining (then)
        fetch(`https://${todayDate}.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())  // this will convert the data into json
        .then((res) => setData(res[currency]))
        console.log(data);

    }, [currency])  // here dependency is cuurency as we need to reload the hook when currency value is changed

    console.log(data);
    return data;

}

export default useCurrencyInfo;