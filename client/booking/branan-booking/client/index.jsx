import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BkForm from './BkForm.jsx';

const BLUE = 'http://localhost:1020';

const Booking = function(props) {
  const [book, setBook] = useState({price: -1, days: []});
  if (book.price === -1) {
    axios.get(`${BLUE}/book/${props.placeID}`)
      .then(data => setBook(data.data))
      .catch(why => console.log(why));
  }
  const now = new Date();
  return (
    <div className="bkbox">
      <BkForm book={book} now={now}/>
    </div>
  );
};

ReactDOM.render(<Booking placeID={20}/>, document.getElementById('calendar'));