# Da Bus Hawai'i

Travel da aina with this (in-progress) revamped version of the Hawai'i Transit System! [Da Bus Hawaii](https://dabushawaii.com). 


## Table of Contents
1. [Development Setup](#development-setup)
* [Running](#running)
* [Workflow](#workflow)
1. [ACM Standards](#acm-standards)

## Development Setup

This project uses the node and npm ecosystem to build the tool. Before running or installing the 
project please download and run [node](https://nodejs.org/en/download/). You will then clone the 
following repository to your personal computer and run it through your code editor's terminal.

```
npm install
```
For XML to JSON
```
npm install
```
For Google Maps
```
npm i -s @react-google-maps/api
```
For Account Handling
```
npm install
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
