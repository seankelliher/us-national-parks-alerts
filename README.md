[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-national-parks-alerts?style=flat-square)](/LICENSE.txt)
## US National Parks Alerts

Alerts on closures, warnings, and dangers at US National Parks, built with Vue.js and Express.js. [View working component](https://us-national-parks-alerts-fa601db96052.herokuapp.com). **"Eco" dyno, takes a few seconds to wake up.** 

## Project Status

TESTING. Project is mostly complete. I am testing for bugs, accessibility, and browser compatibility.

## Project Screen Shots

* Starting view.
![screen shot of project](/screenshots/us-national-parks-alerts-screenshot1.png?s=600)

* Alerts for National Park of America Samoa.
![screen shot of project](/screenshots/us-national-parks-alerts-screenshot2.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. The Express server uses the Fetch API. You will need a later version of Node (18+) for this to work.

Installation:

`npm install`  

To Run Vue:

`npm run dev`   

To Start the Express server:

`npm run start`  

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`. You may need to disable your browser's Cross-Origin Restrictions.

## Reflection

My goal was to build an application that offers alerts for the (currently) 471 parks managed by the US National Park Service (NPS). If you were visiting a park, it would be a central asset to find what closures, warnings, and dangers are awaiting you.

Due to rate limiting, it was not practical to use NPS’s API to gather the names of all parks. I built a list and stored it locally, along with multiple searchable names for some parks - for example, park names with and without accent marks; World War II and World War Two; with and without someone’s middle initial.

For process - the user inputs a park name or part of a park name into a search bar; the application returns the matching results. From here, the user chooses the desired park; the application adds the park's ID to front-end's request URL; passes it to the back-end's request URL; the back-end fetches the alerts using NPS’s API; and passes the results to the front-end to be displayed.

There were several challenges. I wanted to emulate the style of the real NPS website so I studied it and made my design accordingly. Error handling was also challenging. I wanted to ensure users received an error message if the fetch didn’t work properly. I was also concerned about user behavior. I ran searches over and over to locate problems with both expected and odd user behavior and developed error handling to address them. For example, initially I was getting some errors and non-responsive buttons if users ran the same search repeatedly.

## Acknowledgments

* Park alerts and logo from the [National Park Service](https://www.nps.gov/index.htm).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Accessibility guidance form Firefox's Developer Tools.
* Helpful post on passing variables between Vue and Express [Stackoverflow](https://stackoverflow.com/questions/72233660/pass-variables-from-front-to-backend).
* Shields from [Shields](https://shields.io).