import React from 'react';

const CurrentReviews = ({rvw,handleDeleteReview}) => {
  const {customer, email, review, serviceName, serviceImage, _id} = rvw;
  return (
    <tr>
        <div className='flex items-center'>
        <th>
          <label>
            {/* <input type="" value={'X'} className=" btn btn-ghost btn-xs" /> */}
            <button onClick={() => handleDeleteReview(_id)} className="btn btn-ghost btn-lg">X</button>
          </label>
        </th>
        <button className="btn btn-ghost btn-lg">Edit</button>
        </div>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          {customer}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{review}</td>
        
      </tr>
  );
};

export default CurrentReviews;