# React Pokemon Code Along

## Getting strated
Remember to npm install
This code is complete. Create a new Vite Project and follow the steps below to code as you go.

-Create Vite App
-npm i
-package.json - view scripts
-Empty App.jsx, App.css, index.css
-Copy completed index.css from this repo
-create App component
    -use RFC snippet from React extension?
-create static Card component
-Populate App with a couple <Card> components

-Perform fetch request to static URL
-parse data....data.name, data.sprite, data.id
-Create team array with useState
-have each fetch request search using a random index (1-151 for generation 1 pokemon) and append the new data onto the end of team
-Use team.map() to display a unique Card for each pokemon in 'team'. You'll need to pass in a unique value for eahc 'key' and you'll need to pass the element itself into the Card component.
-Have the card componenet render dynamic data.
-Add "Clear" button which resets team to an empty array.

