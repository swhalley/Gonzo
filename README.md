[![Build Status](https://travis-ci.org/peidevs/Gonzo.svg?branch=master)](https://travis-ci.org/peidevs/Gonzo)
# Gonzo
Gonzo is a PEI Developers project which is the new version of the Scooter project. Scooter is a door prize picking application. In the past Scooter has been used by the PEI Developers group as a [Code Kata] (https://en.wikipedia.org/wiki/Kata_(programming)) used to learn new skills.

Gonzo is a rewrite of the application which will focus on being a team project using newer technologies that are of interest to the team. Specs, features and anything else is currently up in the air. See the issues list 

# Scooter 1.0
The original version of Scooter was written in javascript framework Dojo by CodeToJoy. Future Enhancements were later added by swhalley and evanepio.

http://peidevs.github.io/Event_Resources/


# Scooter 2.0
The second version of scooter was a port to AngularJS. This version interoduced more features. A configuration menu was introduced which allowed for player configuration and integration with meetup.com to auto populate the attendance at events.

http://peidevs.github.io/Scooter/

# Why the Rewrite?
Both of the original versions were great, but they were both written in a javascript framework that are getting to be older now. Since the early releases of v1, there has not been great team collaboration or vision on the project. The hope with Gonzo is that the community comes together to build out an exciting new product that will using cutting edge technology. 

The project will be open and we encourage anyone, even outside the PEI Developers group to contribute.

# Tech Stack
   * React
   * React-Router
   * React-Native
   * Jest
   * Firebase (database, hosting, OAuth)
   * TravisCI or Jenkins Blue Ocean (TODO)

# Getting Started
Requires `nodejs` to be installed on the system. Recomend LTS version.

## Development
Run the following to get all the dependencies
```
npm install -g firebase-tools
npm install
```

Run the application
```
npm start
```

Run Tests
```
npm test
```

## Build and Deploy 
Build The Application
```
npm run build
```

Deploy to firebase. 
```
firebase deploy
```
This command will force you to log into google account. And it will ask you where to deploy the application.

# Current Status
Proof of concept code is complete. Ready for first views. Code is in bad shape, alot of hard coding. Components need to split out View parts as there are too many responsibilies in each component. Tests aren't written but the plumbing is in place. Database is wide open. Rebase store has value hard coded instead of initializing at startup. 
