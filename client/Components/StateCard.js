import React from 'react';
import { Link } from 'react-router';


class StateCard extends React.Component {

  render() {
    return (
      <div className="card white darken-1">
        <div className="card-content black-text">
          <Link to={`/states/${this.props.state.id}`}>
            <span className="card-title centered">{this.props.state.name} </span>
          </Link>
        </div>
      </div>
    );
  }

}

export default StateCard;
