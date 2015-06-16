/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a defined url and url not empty', function() {
            allFeeds.forEach( function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a defined name and name not empty', function() {
            allFeeds.forEach( function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });


    /* A new test suite named "The menu" */
    describe('The menu', function() {
        var $menu = $('body')[0];
        console.log($menu);

        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden at the start', function() {
            expect($menu.className).toMatch('menu-hidden');
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should toggle visibility when clicked', function() {
            //click once
            $('.menu-icon-link').click();
            expect($menu.className.length).toMatch(0);
            // click again
            $('.menu-icon-link').click();
            expect($menu.className).toMatch('menu-hidden');
        });


    });

    // A test suite for seeing if clicking the menu items changes the page
    describe('Clicking Menu Items', function() {
        var entries = $('.feed .entry h2').html();
        beforeEach(function () {
            // initial click to load menu
            $('.menu-icon-link').click();
        })

        // A test which ensures that the page content changes when element is clicked
        it('Menu Items should be shown', function() {
            // console.log($('ul.feed-list li'),$('menu-icon-link'));
            expect($('ul.feed-list li').length).not.toBe(0);
            expect($('ul.feed-list li').length).toBe(4);
        });
        afterAll(function () {
            $('ul.feed-list li')[0].click();
            $('.menu-icon-link').click();
        });

    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            setTimeout(function() {
                // invoke done as callback inside loadfeed
                loadFeed(0, done());
            }, 2000);
        });
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should have one entry in the feeder', function(done) {
            // console.log($('.feed').children()[0].className);
            expect($('.feed').children().length).not.toBe(0);
            expect($('.feed').children()[0].className).toMatch('entry');
            done();
        });

    });

    /* A new test suite named "New Feed Selection" */
    describe('News Feed Selection', function(done) {
        var title, header;

        beforeEach(function(done) {
            loadFeed(0, function() {
                title = $('.feed .entry h2').html();
                header = $('h1.header-title').html();           
            // load feeds 
            loadFeed(1, done);
            });
        });
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('should have some new content', function(done) {
            console.log($('.feed .entry h2').html());
            console.log(header);
            // content should change
            expect($('.feed .entry h2').html()).not.toBe(header);
            // invoke the done callback function
            done(); 
        }); 
        /* test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */
        it('should load a new feed with content that actually changes', function(done) {
            console.log($('h1.header-title').html());
            console.log(title);
            // content should change
            expect($('h1.header-title').html()).not.toBe(title);
            // invoke the done callback function
            done(); 
        });

        // restore original state 
        afterAll(function(done) {
            loadFeed(0, done); 
        });
   });
    // New Features Testing
    describe('Experimental Testing', function() {
        beforeEach(function(done) {
            setTimeout(function() {
                // invoke done as callback inside loadfeed
                loadFeed(0, done());
            }, 2000);
        });

        // make sure when content is loaded, blog post images are included
        it('should have images for each entry', function(done) {
            expect($('.feed .entry img').length).not.toBe(0);
            done();
        });

    });


}());
