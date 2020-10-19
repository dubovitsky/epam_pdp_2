import React, { Component } from 'react';
// import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/header';
import MoviesList from 'components/list';
import Footer from 'components/footer';

export default function App () {
    return (
        <>
            <Header />
            <MoviesList />
            <Footer />
        </>
    )
}