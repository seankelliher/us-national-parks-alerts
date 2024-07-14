[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-national-parks-alerts?style=flat-square)](/LICENSE.txt)
## US National Parks Alerts

Searchable directory for alerts on conditions at National Park Service (NPS) parks in the US and overseas. There are 471 areas. Alerts are drawn through an API managed by NPS. This project is built with Vue.js and Express.js. [View working component](https://us-national-parks-alerts-fa601db96052.herokuapp.com). **"Eco" dyno, takes a few seconds to wake up.** 

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## Project Screen Shots

* Starting view.
![screen shot of project](/screenshots/us-national-parks-alerts-screenshot1.png?s=600)

* Alerts for Great Smoky Mountains National Park.
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

## Acknowledgments

* Park alerts and logo from the [National Park Service](https://www.nps.gov/index.htm).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Accessibility guidance form Firefox's Developer Tools.
* Helpful post on passing variables between Vue and Express [Stackoverflow](https://stackoverflow.com/questions/72233660/pass-variables-from-front-to-backend).
* Shields from [Shields](https://shields.io).