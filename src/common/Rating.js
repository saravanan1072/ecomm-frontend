import React from 'react';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline } from '@mdi/js';



function Rating({ rating, maxRating, size = .8 }) {
  return (
    <div className="rating">
      {new Array(maxRating).fill(0).map((_, index) => {
        const isActive = rating >= index + 1;
        return (
          <Icon key={index} size={size} path={isActive ? mdiStar : mdiStarOutline } />
        );
      })}
    </div>
  );
}

export default Rating;
