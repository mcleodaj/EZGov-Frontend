import React from 'react';
import { Link } from 'react-router';
import { chunk } from 'lodash';
import PersonCard from './PersonCard';



class PersonContainer extends React.Component {
  componentWillMount(){
      this.props.fetchPeople();
    }

    createPersonArray(people) {
      return people.map((person, i) => {
        return (
          <div className="col s6 l3 valign" key={i}>
            <PersonCard person={person}/>
          </div>
        );
      });
    }

    createRowsWithPeople(people) {
      const personArray = this.createPersonArray(people);
      return chunk(personArray, 4).map(function(group, i) {
        return (
          <div className="row valign-wrapper" key={i}>{group}</div>
        );
      });
    }

    render() {
      return (
        <div>
          <h3>Senators</h3>
          <h3>Representatives</h3>
            {this.createRowsWithPeople(this.props.people.people)}
        </div>
      );
    }
}

export default PersonContainer;
