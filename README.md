# weather-forecast

[Demo Weather-Forecast](#)

## How to use:

Clone the project:

```sh
git clone https://github.com/LiliyaGavrishchishena/weather-forecast.git
cd weather-forecast
```

Install all dependencies and run:

```sh
npm install
npm run serve
```

Open your browser [http://localhost:3000](http://localhost:3000/):

## Requirements

- Do not use create-react-app, use Webpack to build application and modules.
- The user enters a city into input field and has a detailed, visualised
  forecast for today
- Clicking on the link below this forecast, user is going to another page, which
  containsforecast for a couple days ahead (3, 5, week), no matter.
- From there user can go back. (useReact Router).
- Under the input field is needed to see last 5 cities you’ve looked for and
  clicking on them wesee forecast for today again.
- Request to API is going just once for one city in time till the page is
  reloaded, so it’s neededto use Redux state, please don’t use Local Storage.
- Design is important for us, but we don’t have strong rules, use your
  imagination, CSSkeyframes, transform and transitions are welcome. You can use
  reactstrap libraries.
- You can use this (https://openweathermap.org/api) or another API you like.
