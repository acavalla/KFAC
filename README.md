# KrakenFlex Back End Test: Annie Cavalla

## Explanation

I have produced a class named OutageFetcher which defines two functions that make the API calls, `getEvent` and `postEvent`,
and `wrangle`, a function that iterates over the retrieved device IDs, compares this to the list of outages reported, removes any
from before the cut-off date, and outputs the result. Beyond this there are three interfaces for the json structures,
a test file of three tests, and an `index.ts` which puts the functions together.

Weaknesses:
- It's probably not good practice to take the `.devices` property directly from the API response (my IDE has it in an angry red)
- I didn't want to commit the API key to Github, so you will need to copy & paste it directly back into the index file. I wanted to get the index file to pull it from a .env file, but I couldn't get it to work.

## The Task

* A `README.md` file that documents what you have produced and explains how to run the program and tests (including installing any dependencies)
