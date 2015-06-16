# Testing Project Overview

This project includes a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite.

## How to Run this Project

Load the index.html page and it includes a spec runner with jasmine testing integrated into the browser. Simply loading the page will run each test individually and give the user feedback as each test passes. The final test is for experimental features and you should have 1 failure.

## What to do if a test fails (And I don't expect it to)?

Analyze the test message, many times it could be that during development the name of an element is changed and this results in segements of the code breaking. Since each test is highly tied to the DOM classes and ids the user should be careful of changing names of elements within the DOM.

-If your test fails because ajax call fails, the user should double check their ajax function has a proper callback and failing situations are being handled appropriately.

## 10 Included tests:
- RSS Feeds
	1. are defined
	2. should have a defined url and url not empty
	3. should have a defined name and name not empty
- The menu
	4. should be hidden at the start
	5. should toggle visibility when clicked
- Clicking Menu Items
	6. Menu Items should be shown on click
- Initial Entries
	7. should have one entry in the feeder
- News Feed Selection
	8. should have some new content
	9. should load a new feed with content that actually changes
- Experimental Testing (!this suite should fail)
	10. should have images for each entry (!this test should fail)

## Information on resources to develop your own tests
- [Jasmine](http://jasmine.github.io/)
- Udacity blog on jasmine testing suite
- [Using Jasmine Framework](http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html)