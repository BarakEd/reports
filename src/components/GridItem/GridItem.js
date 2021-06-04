import React from 'react';
import styles from './GridItem.style';

const GridItem = ({ name, updated, location, type }) => {
  const dateTime = new Date(updated);
  const month = dateTime.toLocaleString('en-us', { month: 'short' })
  const day = dateTime.getDate()
  const minutes = new Intl.DateTimeFormat('en', { minute: '2-digit', hour12: false }).format(dateTime);
  const hour = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(dateTime);
  const hourParts = hour.split(' ');
  const timeString = `${hourParts[0]}:${minutes} ${hourParts[1]}`;


  return (
    <styles.GridItem>
      <styles.NameTestWrapper>
        <styles.NameWrapper>
          {name}
        </styles.NameWrapper>
        <styles.DetailsWrapper>
        <styles.TestWrapper>
          {type}
        </styles.TestWrapper>
        <styles.LocationWrapper>
          {location}
        </styles.LocationWrapper>
        </styles.DetailsWrapper>
      </styles.NameTestWrapper>
      <styles.DateTimeWrapper>
        <styles.DateWrapper>
          {month} {day}
        </styles.DateWrapper>
        <styles.TimeWrapper>
          {timeString}
        </styles.TimeWrapper>
      </styles.DateTimeWrapper>
    </styles.GridItem>
  );
};

export default GridItem;