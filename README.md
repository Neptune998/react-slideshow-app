# React: Slideshow App

# Check below Link for complete guide to react SlideShow app
[https://neptuneworld.in/blog/react-slideshow-app-hackerrank](https://neptuneworld.in/blog/react-slideshow-app-hackerrank)

## Environment 

- React Version: 16.13.1
- Node Version: ^12.18.3
- Default Port: 8000

## Project Specifications 

Create a basic slideshow application, as shown below. Application requirements are given below, and the finished application must pass all of the unit tests.

![Gif](https://hrcdn.net/s3_pub/istreet-assets/j3Q6jXZ3DOOPRlCs9hFcnQ/slideshow.gif)

Your task is to complete the implementation of `src/components/Slides.js` according to the following requirements:

- The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with 2 properties: string title and string text.
- On application launch, the first slide must be rendered.
- Clicking on the "Next" button shows the next slide. This button is disabled when the current slide is the last one.
- Clicking on the "Prev" button shows the previous slide. This button is disabled when the current slide is the first one.
- Clicking on the "Restart" button returns to the first slide. This button is disabled when the current slide is the first one.
- You can assume that the passed slides array contains at least one slide.


Initially, the file is filled with boilerplate code. Note the following:

- The "Restart" button must have `data-testid="button-restart"`.
- The "Prev" button must have `data-testid="button-prev"`.
- The "Next" button must have `data-testid="button-next"`.
- Each slide's title must be rendered as an `<h1>` element with `data-testid="title"`.
- Each slide's text must be rendered as a `<p>` element with `data-testid="text"`.

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

**Read-Only Files**
- `src/App.test.js`

**Commands**
3. Run the App: 
With the dependencies installed, start the Slideshow App by running:

>>>  npm start

This command will launch a development server and open the app in your default web browser. You'll be able to interact with the slideshow just like in the online demo.

4. Testing the App

To ensure the correctness of your Slideshow App, you can run the provided tests using the following command:

>>>  npm test

These tests will evaluate whether the app meets the specified requirements and functions as expected.
