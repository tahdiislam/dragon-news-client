import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Shared/NewsSummaryCart';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>Dragon news holme data {allNews.length}</h2>
            <div>
                {
                    allNews.map(news => <NewsSummaryCart key={news._id} news={news}/>)
                }
            </div>
        </div>
    );
};

export default Home;