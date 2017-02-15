import React from 'react';
import { Link } from 'react-router';
import BillCard from './BillCard';


class BillContainer extends React.Component {
  componentWillMount(){
      this.props.fetchBills();
    }

    createBillArray(bills) {
      return bills.map((bill, i) => {
        return (
          <div className="col s12 l12" key={i}>
            <BillCard bill={bill}/>
          </div>
        );
      });
    }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        {this.createBillArray(this.props.bills.bills)}
      </div>
    );
  }
}

export default BillContainer;
