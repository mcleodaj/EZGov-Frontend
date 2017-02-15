import React from 'react';
import { Link } from 'react-router';


class PersonCard extends React.Component {

  render() {
    return (
      <div className="card white darken-1">
        <div className="card-content black-text">
          <Link to={`/people/${this.props.person.id}`}>
            <span className="card-title centered">{this.props.person.firstname} {this.props.person.lastname} </span>
          </Link>
        </div>
      </div>
    );
  }

}

export default PersonCard;
