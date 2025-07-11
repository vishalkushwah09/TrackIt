// import React from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './Calender.css';

// const MyCalendar = () => {
//   const markedDates = {
//     '2025-06-01': 'green',
//     '2025-06-02': 'red',
//     '2025-06-03': 'blue',
//   };

//   const formatDate = (date) => date.toISOString().split('T')[0];

//   return (
//     <Calendar
//       tileContent={({ date, view }) => {
//         const dateStr = formatDate(date);
//         const dotColor = markedDates[dateStr];
//         return view === 'month' && dotColor ? (
//           <div className="dot" style={{ backgroundColor: dotColor }} />
//         ) : null;
//       }}
//     />
//   );
// };

// export default MyCalendar;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const App = () => {
  const [date, setDate] = useState(new Date());

  // Example data: Dates to highlight
  const highlightedDates = [
    new Date(2025, 5, 3), // June 3, 2025
    new Date(2025, 5, 10), // June 10, 2025
    new Date(2025, 5, 15), // June 15, 2025
    new Date(2025, 5, 20), // June 20, 2025
  ];

  // Function to check if a date is in the highlighted dates array
  const isHighlighted = (date) => {
    return highlightedDates.some(
      (highlightedDate) =>
        highlightedDate.getDate() === date.getDate() &&
        highlightedDate.getMonth() === date.getMonth() &&
        highlightedDate.getFullYear() === date.getFullYear()
    );
  };

  // Function to apply custom class to highlighted dates
  const tileClassName = ({ date }) => {
    return isHighlighted(date) ? 'highlighted' : null;
  };

  return (
    <div>
      <h1>Custom React Calendar</h1>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default App;
