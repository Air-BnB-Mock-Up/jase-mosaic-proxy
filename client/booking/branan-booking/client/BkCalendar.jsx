import React from 'react';

const MONTHS = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const BkCalendar = function({year, month, dates, get, active}) {
  const now = new Date(year, month, 1);
  const day = now.getDay();
  const len = new Date(year, month + 1, 0).getDate();
  var i = 1 - day;
  const pnum = (d) => d > 0 && d <= len ? `${d}` : '';
  let rows = [];
  while (i < len) {
    rows.push(
      <tr key={i}>
        {[0, 1, 2, 3, 4, 5, 6].map(x => {
          const date = new Date(year, month, i);
          const here = dates.includes(date.toISOString());
          const cls = active && date.toISOString() === active.toISOString()
                      ? 'bkactive'
                      : (i + x) > 0 && here
                        ? 'bktaken'
                        : 'bkopen';
          return <td key={i}
                     onClick={here ? ()=>null : ()=>get(date)}
                     className={cls}>{pnum(i++)}</td> })}
      </tr>
    );
  }
  return (
    <div className="bkcalendar">
      <h3>{`${MONTHS[now.getMonth()]} ${now.getFullYear()}`}</h3>
      <table>
        <thead>
          <tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default BkCalendar;