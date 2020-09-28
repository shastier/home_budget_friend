# Wireframes and User Stories

Right-click & open in new window to see better!

## Home page
- Show welcome message. 
- Header right side: has a link to Sign Up, Login and Log out.
- Header left side: has a link to user's page: My Account and Home page.

![home](./assets/home.jpg)

### No-Authorization require
- Will only see "Home" and "About" pages.

## About page
- Will explain step by step how to use the app and why it is needed.

![about](./assets/about.jpg)

### Authorization require
- Will allow the user to register. Got to "Sign Up" page if first time user. 
- If the user has already an account, allow it to login and go to its "Account" page.

## Login / Registration flow

### Registration. First time user
- Allow user to register.
- Register button, will redirect to user's "Home" page.

![sign_up](./assets/sign_up.jpg)

### Login. User who was previously registered. 
- Allow user to enter username & password. If that information matches with the DB's user login credentials then, redirect to user's "Account" page.
- Else, don't allow the user to login until the correct information is entered.

![login](./assets/login.jpg)

## User "Account" page
- Show all user's posted expenses.

![dashboard](./assets/dashboard.jpg)

## Add expenses
- This page is accessible from the "navigation bar" My Account / Add Expense 
- Allow user to enter new expense.

![add_new_expense](./assets/add_new_expense.jpg)

- Select expense type.

![add_new_expense_type](./assets/add_new_expense_type.jpg)

- Select expense due date.

![add_new_expense_date](./assets/add_new_expense_date.jpg)

- When all data is entered, the user will click "Add" button. The database will be updated accordingly. 

![add_new_expense_view](./assets/add_new_expense_view.jpg)

- Then, the user will click all expenses in order to be redirected to it's dashboard and see the new posted expense added and the total updated accordingly.

![dashboard_added](./assets/dashboard_added.jpg)

## See All Posted Expenses / Edit / Delete
- This page is accessible from "navigation bar" My Account / "All expenses" 

### Will allow user to:
- See a list of all posted expenses.
- Show total at bottom of page.
- Edit / Delete options on each posted expense.

![dash_more_added_total_updated](./assets/dash_more_added_total_updated.jpg)

## Edit a posted expense
- This page is accessible from "navigation bar" My Account / "All expenses" / Edit desired posted expense.

- Will be pre-filled with the selected expense data. 
- User will update the expense as needed.

![edit_ispaid](./assets/edit_ispaid.jpg)

- When done, the user will click Edit button.
- The database will be updated accordingly. 

![edit](./assets/edit.jpg)

## Delete a posted expense
- This page is accessible from "navigation bar" My Account / "All expenses" / Delete desired posted expense.
- Once the user click Delete button and refresh the page, that posted expense will be removed from the list and total amount will be updated.