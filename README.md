An web app shows the weather based on search and location


## App structure

- App 
  - WeatherCard 
    - CurrentCity 
      - Temperature 
      - Meta 
        - Humidity 
        - Wind 
      - Name 
    - OtherCities 
      - City[] 
        - Name 
        - Temperature 
        - WeatherIcon 
    - Forecast
      - DayOfWeek[] 
        - Name 
        - WeatherIcon 
        - Temperature


增加责任：

- App （渲染 App 样式，背景图片和布局）
  - WeatherCard （渲染 WeatherCard 样式，细节样式 + 布局）
    - CurrentCity （渲染 CityWeather 样式，背景图片和布局）
      - Temperature （渲染 Temperature 样式，细节样式）
      - Meta （渲染 Meta 样式，布局）
        - Humidity （渲染 Humidity 样式，细节样式）
        - Wind （渲染 Wind 样式，细节样式）
      - Name （渲染 Name 样式，细节样式）
    - OtherCities （渲染 OtherCities 样式，布局 + 统筹所有cities）
      - City[] （渲染 City 样式，布局）
        - Name （渲染 Name 样式，细节样式）
        - Temperature （渲染 Temperature 样式，细节样式）
        - WeatherIcon （渲染 WeatherIcon 样式，细节样式）
    - Forecast （渲染 Forecast 样式，布局和统筹所有 days of week）
      - DayOfWeek[] （渲染 DayOfWeek 样式，布局）
        - Name （渲染 Name 样式，细节样式） 
        - WeatherIcon （渲染 WeatherIcon 样式，细节样式）
        - Temperature（渲染 Temperature 样式，细节样式）