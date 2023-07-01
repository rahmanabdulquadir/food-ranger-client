import React from 'react';

const CustomerReviews = ({rev}) => {
  const { photoURL, name, review, rating, date } = rev;
  console.log(rev)
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-600 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{rev.customer}</h4>
				<span className="text-xs dark:text-gray-400">Review posted at : {date}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<span className="text-xl font-bold">{rating}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
		<p>{review}</p>
	</div>
</div>
  );
};

export default CustomerReviews;