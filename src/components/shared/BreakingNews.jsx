import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    id: '1',
    title: 'Breaking News: Major Event Unfolds in the city',
  },
  {
    id: '2',
    title: 'Breaking News: New Policy Announced by the government',
  },
  {
    id: '3',
    title: 'Breaking News: Sports team wins championship',
  },
]

const BreakingNews = () => {
  return (
    <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-3 rounded-xl container mx-auto'>
    <button className='btn bg-pink-300'>Latest News</button>
      <Marquee pauseOnHover={true} speed={50}>
        {news.map(n => {
         return <span key={n.id}>{n.title}</span>
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;