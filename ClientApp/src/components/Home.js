import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
            <p>Welcome to the Headversity sorting test.</p>
            <p>Go to fetch grocery data page to begin testing.</p>
      </div>
    );
  }
}
