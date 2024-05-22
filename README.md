## Singapore 2-Hour Weather Forecast React App

![Singapore 2-Hour Weather Forecast React App](/public/app-landing.png)

This React application fetches and displays the 2-hour weather forecast for different locations in Singapore from the Singapore's 2-Hour Weather Forecast API: [https://api.data.gov.sg/v1/environment/2-hour-weather-forecast](https://api.data.gov.sg/v1/environment/2-hour-weather-forecast).

**Features:**

- Displays a list of selectable locations in Singapore with its latitude and longitude.
- Shows the current weather forecast (type of weather and area) for the selected location.

**Getting Started:**

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start` (or `yarn start` if using yarn)

The application will be available at http://localhost:3000/

**Code Structure:**

- `App.js`: Main application component.
- `LocationList.js`: Component to display the list of locations.
- `WeatherDetails.js`: Component to display the weather information for a location.
- `AlertDismissable.js`: Component to display API errors.

**Evaluation:**

This code prioritizes the following:

- **Correctness of API integration:** Ensure the implemented API calls match the API documentation.
- **Efficiency:** Minimize unnecessary network requests and optimize state management.
- **Code organization and readability:** Maintain clean and well-structured code for future modifications.
- **Handling of asynchronous operations:** Asynchronous data fetching should not block the UI rendering and updates should reflect retrieved data.

**Further Enhancements:**

- Implement error handling for API calls and display appropriate messages to the user.
- Include loading states while data is being fetched.
- Enhance the UI design with styles and additional weather details.

**All credits goes to**

- Weather icons are free to use created by [Bas Milius](https://github.com/basmilius/weather-icons)
- Background image from [Gov.sg](https://www.gov.sg/article/meet-the-kumars)
