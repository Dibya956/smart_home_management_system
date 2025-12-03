# smart_home_management_system

## Table of Contents

- [Description](#description)
- [Components Used](#components-used)
- [Installation And Run](#installation)

## Description📝

The Smart Home Automation project is designed to create an efficient, user-friendly, and cost-effective system for controlling and monitoring various home appliances and environmental parameters. By integrating a web interface and ESP8266 module, users can remotely access and control their home devices, ensuring convenience and energy conservation.

## Components Used🔧🖥️

- Arduino Uno: A microcontroller board based on the ATmega328P, used as the central processing unit for the system.
- ESP8266: A low-cost Wi-Fi module that enables wireless communication and remote access to the system.
- 4 Channel Relay Module: An interface that allows the Arduino to control high-voltage appliances safely.
- Water Level Sensor: A sensor that detects the water level in a container, providing feedback for water management.
- Magnetic Reed Switch: A switch that detects the opening and closing of doors or windows, enhancing home security.
- DHT11 Temperature/Humidity Sensor: A sensor that measures ambient temperature and humidity, providing data for climate control.

  ## Installation⬇️ And Run🚀

To set up the system, follow these steps:

- Use `npm install` to install the required dependencies at /backend/server and /start/frontend.
- Install ngrok at C:\ngrok or use pyngrok.
- Compile and upload firmware.ino by connecting ESP8266 Module.
- Run `npm start` and `npm run dev` to start frontend and backend.
