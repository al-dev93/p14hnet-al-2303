# HRnet project manages the records of employees of the company WealthHealth

## Context of the project

This project aims to develop the HRnet application by using javascript React library instead jQuery.

## 1. About this repository

3 node modules are used for this development:

- [react-select](https://www.npmjs.com/package/react-select)
- [react-datepicker](https://www.npmjs.com/package/react-datepicker)
- [react-data-table-plugin](https://www.npmjs.com/package/react-data-table-plugin)

the react-data-table-plugin module was specifically developed for this project. The other two modules were created by the developer community posting to npm.

## 2. Installation

Once the repository is cloned on your computer, go to your terminal in the folder /app and use the `npm install` command to install the project dependencies.

## 3. Run project

### 3.1 With an empty database

- Use the command `npm run start`
- The browser opens to the homepage, otherwise enter `http://localhost:3000` in the address bar of the browser
- The homepage is loaded. You can complete the form to create a record and save it or go to the data table using the button `view current employee`

### 3.2 With a pre-filled database

- Use the command `npm run dev`
- The browser opens to the homepage, otherwise enter `http://localhost:3000` in the address bar of the browser
- The homepage is loaded. You can go to the data table using the button `view current employee`to see the mocked data.
- You can add data to the mocked data by going to the form on the home page
