import React, { useState, useEffect } from 'react';
import { Context } from "context/Context.js";
import Header from 'components/header';
import MoviesList from 'components/list';
import Footer from 'components/footer';
import ErrorBoundary from 'components/error';

const objectToQueryString = (obj) => {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

const Home = () => {
    const url = 'https://reactjs-cdp.herokuapp.com/movies';
    const params = {
        limit: 12
    };
    const requestUrl = url + '?' + objectToQueryString(params);
    const [isLoaded, setIsLoaded] = useState(false);
    const [context, setContext] = useState(Context);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(requestUrl);
            response = await response.json();
            setContext(response);
            setIsLoaded(true);
        }
    
        fetchMyAPI()
    }, []);

    return (
        <Context.Provider value={[context, setContext]}>
            <Header />
            <ErrorBoundary>
                <MoviesList isLoaded={isLoaded} />
            </ErrorBoundary>
            <Footer />
        </Context.Provider>  
    )
}

export default Home;