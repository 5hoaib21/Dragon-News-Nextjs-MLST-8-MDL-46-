import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col gap-9'>
      <h2 className='font-bold text-5xl text-pink-400'>This is not found Page</h2>
     <Link href={'/'}> <button  className='btn btn-accent'>Back to Home</button></Link>
    </div>
  );
};

export default NotFoundPage;