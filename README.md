# Countries-App/Frontend-Engineer-Task
React Native application for filtering countries by continents and searching countries.
On this application, you can see a list of countries from various continents, and you can filter and search for a country.

## How to run application
- Clone the repo
- cd to project directory and `npm install` or `yarn`
- `expo start` or `react-native run-android` or `react-native run-ios` as the project supports both

## Steps to accomplish task
- Created a fake GraphQL api to mock data containing countries and their properties.
- Built a React Native application with the required UI as below

Here is a direct link to it: [Image](https://www.dropbox.com/s/3cemeg6alpeul3p/Screenshot_20220710-225206_Expo%20Go.jpg?dl=0)

## Some ideas I have about the app
- The usability is good, as first, you can filter by a specific continent and also you can search by all the columns like **name** , **population** **region** , **capital** just from the search bar
- To make the app as perfomant as posible, I did the following
  - Enabled pagination. So initially, the user loads just about 10 countries, then as the user scrolls, the app loads more 10 countries. This is a great perfomance booster.
  - Also had an idea to implement **debouncing** when searching is done, though couldn't succeed with it 100%. The `loadash` library, has a `debouncing` function that runs a function after a particular time in an interval. This greatly improves performance opun search.
