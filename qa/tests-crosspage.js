/*
* npm install -g mocha
* mocha -u tdd -R spec qa/tests-crosspage.js 2>/dev/null
*/
var Browser = require('zombie'),
    assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', () => {

    setup(() => {
        browser = new Browser();
    });

    test('requesting a group rate quote from the hood river tour page should ' +
        'populate the hidden referrer field correctly', function (done) {
            var referrer = 'http://localhost:3000/tours/hood-river';
            browser.visit(referrer, () => {
                browser.clickLink('.requestGroupRate', () => {
                    // console.log(browser.resources['0'].request.headers._headers);
                    console.log('1:' + browser.field('referrer').value);
                    console.log('2:' + referrer);
                    assert(browser.field('referrer').value === referrer);//TODO: Unspecified AssertionError
                    done();
                });
            });
        });

    test('requesting a group rate from the oregon coast tour page should ' +
        'populate the hidden referrer field correctly', function (done) {
            var referrer = 'http://localhost:3000/tours/oregon-coast';
            browser.visit(referrer, () => {
                browser.clickLink('.requestGroupRate', () => {
                    assert(browser.field('referrer').value === referrer);//TODO: Unspecified AssertionError
                    done();
                });
            });
        });

    test('visiting the "request group rate" page dirctly should result ' +
        'in an empty value for the referrer field', (done) => {
            browser.visit('http://localhost:3000/tours/request-group-rate', () => {
                assert(browser.field('referrer').value === '');
                done();
            });
        });

});