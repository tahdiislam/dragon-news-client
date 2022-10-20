import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Shared/NewsSummaryCart';

const Catagory = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <div>
                {
                    allNews.map(news => <NewsSummaryCart key={news._id} news={news} />)
                }
            </div>
        </div>
    );
};

export default Catagory;