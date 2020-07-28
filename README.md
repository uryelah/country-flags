[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://countries-db.web.app/">
    <img src="./public/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">
    <a href="https://countries-db.web.app/">
    Country-flags
    </a>
  </h1>

  <p align="center">
    A simple SPA country-flags webapp
    <br />
    <a href="https://countries-db.web.app/"><strong>Use it live here »</strong></a>
    <br />
    <br />
    <a href="https://github.com/uryelah/country-flags/issues">Report Bug</a>
    ·
    <a href="https://github.com/uryelah/country-flags/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About](#about)
* [Features](#features)
* [Views](#views)
* [Routes](#routes)
* [Prerequisites](#prerequisites)
* [Built With](#built-with)
* [Commands](#available-commands)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)
* [CopyRight/Attributions](#copyRight/Attributions)


## About

This project is a simple SPA country database made with the data from [REST Countries API](https://restcountries.eu).

It was made mainly with [React](https://reactjs.org), [Material UI](https://material-ui.com), and [Redux](https://redux.js.org/), and deployed with [Firebase](https://firebase.google.com).
You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org).

## Features

<img src="./public/demo.gif">

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

## Views

This app includes 4 different views:

- Countries list page

- Countries search page

- Country details page

## Routes

| Route | Description |
|---------|-------------|
| `/` | Root route, you can select a country from the list or search a country here |
| `/:<COUNTRY NAME>` | Details route, you can see information about a specific country here |

## Prerequisites

If you want to...

**View this app online**

Simply access [this link](https://countries-db.web.app/) and enjoy the game!

**Run it locally**

1. Make sure you have [node installed](https://nodejs.org/en/download/) in your local environment.

2. Download or clone this repository

3. Navigate to the game root directory in your terminal

4. Install the required packages:
```sh
npm i
```
5. Start the game in your browser:
```sh
npm run start
```

### Built With
This project was built using the React SPA framework, consuming the data from the [REST Countries API](https://restcountries.eu), together with Redux for state management.

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Learn to read and write Japanese kanji API](https://rapidapi.com/KanjiAlive/api/learn-to-read-and-write-japanese-kanji/endpoints)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)


## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm eject` | Eject configuration files for customization
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |
| `npm run test` | Run the available tests |
| `npm run predeploy` | Build code for deployment |
| `npm run deploy` | Pushes built code to gh-pages |

<!-- CONTACT -->
## Contact

👤 **Sarah Uryelah Silva Chamorro**

- Github: [@uryelah](https://github.com/uryelah)
- Twitter: [@sarah_chamorro](https://twitter.com/sarah_chamorro)
- Linkedin: [Sharah Chamorro](https://www.linkedin.com/in/uryelah/)
- Email: [sarahchamorro@gmail.com](sarahchamorro@gmail.com)

## Acknowledgements
* [StackOverflow](stackoverflow.com/)
* [Create React App](https://github.com/facebook/create-react-app)
* Microverse
* Team 54

## CopyRight/Attributions

This project was only possible thanks to the creators bellow:

[REST Countries API](https://restcountries.eu)

-------

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/uryelah/country-flags/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/uryelah/country-flags/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/uryelah/country-flags/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/uryelah/country-flags/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/uryelah/country-flags/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/uryelah/
