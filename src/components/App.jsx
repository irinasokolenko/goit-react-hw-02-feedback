import React, { Component } from "react";

import { Section } from `./Section`
import { FeedbackOptions } from `./FeedbackOptions`
import {Statistics} from `./Statistics`
import { Notification } from `./Notification`

export class App extends Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
}
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
