import React, {useState} from 'react';
import BkCalendar from './BkCalendar.jsx';

const plur = (thing, count) => {
  return thing + (count !== 1 ? 's' : '');
}

const fmt = (date) => {
  return date ? new Intl.DateTimeFormat('en-US').format(date) : 'Add a date';
}

const BkForm = function({book, now}) {
  const [open, setOpen] = useState(false);
  const [calOpen, setCal] = useState(false);
  const [total, setTotal] = useState(1);
  const [infants, setInfants] = useState(0);
  const [checkin, setCheckin] = useState(null);
  return <div className="bkform">
    <div className="bkhead">
        <span>
          <span className="bkprice">${book.price * total}</span>
          <span className="bkper"> / night</span>
        </span>
        <span className="bkrate">
          <span className="bkstar">★ </span>4.30
          <span className="bkper"> (331)</span>
        </span>
    </div>
    <div id="bkopts">
      {calOpen ? <BkCalMenu closefn={() => setCal(false)}
                            book={book}
                            now={now}
                            checkin={checkin}
                            setCheckin={setCheckin}/>
               : null}
      <div id="bkdates" onClick={() => setCal(!calOpen)}>
        <div id="bkcheckin">
          <strong>CHECK-IN</strong><br></br>
          <span id="bkin">{fmt(checkin)}</span>
        </div>
        <div id="bkcheckout">
          <strong>CHECKOUT</strong><br></br>
          <span id="bkout">Add date</span>
        </div>
      </div>
      <div id="bkguests">
        <div id="bklisthead" onClick={() => setOpen(!open)}>
          <div>
            <strong>GUESTS</strong><br></br>
            <span id="bkcount">
              {total} {plur('guest', total)}{infants ? `, ${infants} ${plur('infant', infants)}`: ''}
            </span>
          </div>
          <span id="bkarr">{open ? '▲' : '▼'}</span>
        </div>
        <div id="bklist" style={{display: open ? 'block' : 'none', position: 'absolute'}}>
          <BkGuests name="Adults" desc="" min={1} max={book.max} total={total} setTotal={setTotal}/>
          <BkGuests name="Children" desc="Ages 2-12" min={0} max={book.max} total={total} setTotal={setTotal}/>
          <BkGuests name="Infants" desc="Under 2" min={0} max={5} total={infants} setTotal={setInfants}/>
          <aside>{book.max} {plur('guest', book.max)} maximum. Infants don't count toward the number of guests.</aside>
          <button id="bkclose" onClick={() => setOpen(false)}>Close</button>
        </div>
      </div>
    </div>
    <button id="bkgo">Check availability</button>
  </div>
};

const BkGuests = function({name, desc, min, max, total, setTotal}) {
  const [count, setCount] = useState(min);
  const add = (n) => {
    if (total + n <= max && total + n >= min) {
      setTotal(total + n);
      setCount(count + n);
    }
  };
  return <div className="bkguests">
    <div>
      <strong>{name}</strong>
      {desc ? <aside>{desc}</aside> : null}
    </div>
    <span>
      <button disabled={count <= min || total - 1 < 0}
              className="bkbutton"
              onClick={() => add(-1)}>-</button>
      <span className="bkcount">{count}</span>
      <button disabled={total + 1 > max}
              className="bkbutton"
              onClick={() => add(1)}>+</button>
    </span>
  </div>
};

const BkCalMenu = function({closefn, book, now, checkin, setCheckin}) {
  const [month, setMonth] = useState(now.getMonth());
  const getDate = (d) => {
    console.log(d);
    setCheckin(d);
  };
  return <div id="bkcals">
    <div id="bkcaldates">
      <div className="bkselect">
        <strong>CHECK-IN</strong><br></br>
        <span id="bkin">{fmt(checkin)}</span>
      </div>
      <div>
        <strong>CHECKOUT</strong><br></br>
        <span id="bkout">Add date</span>
      </div>
    </div>
    <div id="bkscroll">
      <button onClick={() => setMonth(month - 1)}
              className="bkbutton">⟨</button>
      <button onClick={closefn}
              className="bkbutton">X</button>
      <button onClick={() => setMonth(month + 1)}
              className="bkbutton">⟩</button>
    </div>
    <div id="bkpages">
      <BkCalendar dates={book.days}
                  year={now.getFullYear()}
                  month={month}
                  get={getDate}
                  active={checkin}/>
      <BkCalendar dates={book.days}
                  year={now.getFullYear()}
                  month={month + 1}
                  get={getDate}
                  active={checkin}/>
    </div>
  </div>
};

export default BkForm;