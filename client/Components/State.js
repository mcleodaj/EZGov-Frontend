import React from 'react';
import { Link } from 'react-router';
import { chunk } from 'lodash';
import PersonCard from './PersonCard';



class State extends React.Component {
  componentWillMount(){
      this.props.fetchState(this.props.params.stateId);
    }

    createPersonArray(people) {
      return people.map((person, i) => {
        return (
          <div className="col s6 l4 valign" key={i}>
            <PersonCard person={person}/>
          </div>
        );
      });
    }

    createRowsWithPeople(people) {
      const personArray = this.createPersonArray(people);
      return chunk(personArray, 3).map(function(group, i) {
        return (
          <div className="row valign-wrapper" key={i}>{group}</div>
        );
      });
    }

    render() {
      return (
        <div>
          <h3>Senators</h3>
            {this.createRowsWithPeople(this.props.stateInfo.stateInfo.people.slice(0,2))}
          <h3>Representatives</h3>
            {this.createRowsWithPeople(this.props.stateInfo.stateInfo.people.slice(2))}
        </div>
      );
    }
}

export default State;
