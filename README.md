# Thriday Front End Technical Challenge

## Introduction

Our React technical interview process involves candidates doing an at-home project to test your React knowledge and problem solving abilities, while also giving you a chance to write code in a way that you find comfortable.
Using Google/StackOverflow/whatever for help is allowed, but ultimately you should write and be able to justify every piece of the code being submitted.
Your solution should be shared on a public Github or Bitbucket repo showing all commit history.

## Requirements

* Use React
* Use TypeScript
* Think about the use of state management and props, as well as component abstraction (i.e. breaking down the UI into a set of reusable components)
* Don't worry about testing this in multiple browsers; just use whichever one you're most comfortable with, and let us know so we can test in the same one

## The Challenge

We have [provided a JSON file](data/db.json) that powers a mock API (see [available scripts](#available-scripts) for instructions on running the mock API); it contains a list of Transactions. 

### Step 1

Using the data from the API, create React components that implement the Transaction list shown in the following desktop/mobile designs:

| Breakpoint      | Design      |
|------------|-------------|
| Desktop | <img src="screens/desktop.png" width="75%" height="75%" />  |
| Mobile | <img src="screens/mobile.png" width="50%" height="50%" /> |


### Step 2

Implement a toolbar with 3 buttons to filter the list of Transactions:

* All
* Income
* Expense

<img src="screens/toolbar.png" />


### Assets

* You can find [the designs on Figma](https://www.figma.com/design/CkejoJbdFNwKJGv0aBSzWE/Transactions-(Dev-test)?m=auto&t=8AccDG8Ku6jzoTzD-6).

### Acceptance Criteria

#### Step 1

The list of transactions should be grouped by date (the "date" property).

Each group of transactions should display a title showing the date of the group (don't worry about handling the "Today" and "Yesterday" titles).

All Transactions should display:

* a logo (the "logoUrl" property)
* a title (the "transactionTitle" property)
* a subtitle
  * the "suburb" property, if it has a value
  * the "shortCategory" property, if it has a value
  * if both properties have values, display a separator between them
* an amount (the "amount" property)
  * styled differently based on the "cashflow" property
    * when cashflow == "inflow"
      * prefix with green "+"
    * when cashflow == "outflow"
      * prefix with red "-"
* There is no need to implement the "Pending"/"Bookkeeping in progress" states as shown in some of the designs.

#### Step 2

The 3 toolbar buttons are mutually exclusive; only one can be selected at a time. The "All" button should be selected by default.

When a button is selected, the list of transactions should be filtered to only show transactions that match the selected filter.

The "All" filter should show all transactions.

The "Income" filter should show only transactions with a "cashflow" of "inflow".

The "Expense" filter should show only transactions with a "cashflow" of "outflow".

When a button is selected, the background colour should be green and the text colour should be white.
When not selected, the background should be white and the text should be black.
The check icon is only shown on the "All" button, and only when the button is selected.
We have also provided SVG icons for the Income and Expense buttons.


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run api`

Runs the mock API server.\
Open [http://localhost:3004](http://localhost:3004) to view it in your browser.

**List**

Get a list of all Transactions
http://localhost:3004/transactions

**Paginate**

Use \_page and optionally \_limit to paginate returned data.

```
GET /transactions?_page=3
```

```
GET /transactions?_page=3&_limit=20
```

_10 items are returned by default_

**Filtering**

You can filter the data by particular attributes via query string parameters.

http://localhost:3004/transactions?cashflow=outflow