# Dungeon Master's Player Tracker

This app will help dungeon masters to keep track of their players.
Once complete you will be able to

* See an overview of all players
  * See players name and level
  * See players class and race
  * See players passive stats
  * See players max health
  * See players AC, spell save DC, initiative
  * Click player for individual player tracking
* See an individual players stats
  * See all the players base stats and proficiencies
  * See players cantrips and spells
  * See players abilities and feats
  * See note and items of interest
  * Update players stats as they level


## Current status of project

### Currently at MVP


## Setup

* clone this repository
* Backend:
  * run `bundle install` to install dependancies
  * run `rake db:setup` to setup the database
  * run `rails s` to start the server
* Frontend:
  * in another console change to the client directory `cd client`
  * run `npm install` to install dependancies
  * run `npm start` to start the application
  * navigate to [http://localhost:3000](http://localhost:3000) in your browser
  * become an expert DM - add your players and important NPCs and keep track of them easily

![DM Player Tracker September 2019](/client/public/images/dmplayertracker.gif)
