import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const SLIDES = [
    {
        title: "Welcome to Slideshow App",
        text: "Slideshow App, a simple yet impactful application that allows users to navigate through a collection of slides."
    },
    {
        title: "The project requirements outline.",
        text: "The Slides component should take an array of slides as a prop. Each slide is represented by an object with two properties: title (string) and text (string)."
    },
    {
        title: "Clicking the 'Next' button",
        text: "Clicking the 'Next' button should display the next slide. This button should be disabled when the current slide is the last one."
    },
    {
        title: "Clicking the 'Prev' button",
        text: "Clicking the 'Prev' button should display the previous slide. This button should be disabled when the current slide is the first one."
    },
    {
        title: "Clicking the 'Restart' button",
        text: " Clicking the 'Restart' button should return the app to the first slide. This button should be disabled when the current slide is the first one."
    },
    {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!"
    }
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
