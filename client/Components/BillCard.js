import React from 'react';
import { Link } from 'react-router';


class BillCard extends React.Component {

    render() {
      return (
        <div className="card white darken-1">
          <div className="card-content black-text">
            <Link to={`/bills/${this.props.bill.id}`}>
              <span className="card-title centered">Blah</span>
            </Link>
          </div>
        </div>
      );
    }

  }

export default BillCard;
