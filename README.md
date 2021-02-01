# Da Bus Hawai'i

Travel da aina with this (in-progress) revamped version of the Hawai'i Transit System! [Da Bus Hawaii](https://dabushawaii.com). 

<img align="center" alt="redesign of thumbnails" width="500px" src="https://github.com/loreleim/da-bus/blob/master/dabus/src/images/readme/bus-thumbnail.jpg?raw=true" />

## Table of Contents
1. [Development Setup](#development-setup)
  1. [Running](#running)
  1. [Dependencies](#dependencies-overview)
  1. [Workflow](#workflow)
2. [UX Research](#ux-research)

## Development Setup

This project uses the node and npm ecosystem to build the tool. Before running or installing the 
project please download and run [node](https://nodejs.org/en/download/). You will then clone the 
following repository to your personal computer and run it through your code editor's terminal.

To install all dependencies
```
npm install
```

### Dependencies Overview

As of 2020, React-Google-Maps requires a payment plan, utilize Mapbox GL for a workaround
```
npm install mapbox-gl --save
```
Firebase
```
npm install firebase
```

### Running

To build DaBus/open up a local development server to view live changes, you will open up your code editor's terminal and run the following code:

```
npm run start
```

This way you will be able to view the website in a browser via http://localhost:3000/.

### Workflow

Within are two main branches of the repository. 

Master - features the most recent version of the application, currently live. 
Develop - is where updates and working versions will be pushed, committed and compared branches will be merged here.

For co-development, create your own brach, and commit your changes there. Do a compare call via github, and it will then be merged back into develop.

## UX Research
