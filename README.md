# Express Note Taker

[![License: MIT](https://img.shields.io/github/license/tiffany-brand/express-note-taker?style=plastic)](./LICENSE)

## Description

This application allows a user to write, save, delete, and view previously saved notes. It uses an Express backend to save and retrive note data from a JSON file. The front end was created previously. The back end contains the following routes:

### HTML Routes

* GET /notes - Returns the notes.html file.
* GET * - Returns the index.html file

### API Routes

* GET /api/notes - Reads the db.json file and returns all saved notes as JSON.
* POST /api/notes - Receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.
* DELETE /api/notes/:id - Receives a query parameter containing the id of a note to delete, removes the note with the given id property, and then rewrites the notes to the db.json file.

### User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Table of Contents

* [Description](#description)
* [Deployed Link](#deployed-link)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)


## Deployed Link

Deployed on Heroku at:  [Express Note Taker](https://mysterious-bastion-50165.herokuapp.com/)


## Screenshots

![Express-Note-Taker](https://user-images.githubusercontent.com/16748389/92150660-ba7ce200-eded-11ea-802d-8bb37e35ec01.gif)

![note-taker-screen](https://user-images.githubusercontent.com/16748389/92150822-0891e580-edee-11ea-8df6-b8b9cf2b4877.JPG)



## Technologies

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Heroku](https://heroku.com)

## Installation

To install dependencies, run the following:

`
npm i
`

## Usage

After downloading the files and installing dependencies, run 

`
node server.js
`

## License

This repository is licensed under the [MIT license](./LICENSE).

## Questions

Questions about this repository? Please contact me at [tiffanylbrand@outlook.com](mailto:tiffanylbrand@outlook.com). View more of my work in GitHub at [tiffany-brand](https://github.com/tiffany-brand) 
