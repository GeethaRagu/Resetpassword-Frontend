import React from 'react';

const Home = () => {
    return (
        <section className='home_container'>
            <h5>Welcome to our site.Login to explore more</h5>
            <a href="/login" className='btn btn-primary'>Login</a>
        </section>
    );
};

export default Home;