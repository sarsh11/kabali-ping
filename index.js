'use strict'
const request = require("request"),
    open = require('open'),
    moment = require('moment'),
    _ = require('lodash'),
    config = require('./config'),
    _options = config._options,
    _callers = config._callers;

let _timers = {};
/** THINGS YOU CAN CHANGE */
let _checkInterval = 30000; // 30s.
let _youtubeURL = 'https://www.youtube.com/watch?v=LHaGDT6Pdbk'; // Alert URL
/** END OF THINGS YOU CAN CHANGE */


function _computeTicketNewStatus(data) {
    return data.Venues && data.Venues.length > 1;
}

function _computeBookMyShowStatus(events) {
    if (events.length === 0) {
        throw new Error("BookMyShow: Returning no events..");
    }
    let found = _.find(events, (event) => {
        return event.EventTitle.toLowerCase().includes('kabali')
    });
    return found ? true : false;
}

function computeStatus(data) {
    if (data.d) {
        return _computeTicketNewStatus(data.d);
    }
    else if (data.moviesData) {
        return _computeBookMyShowStatus(data.moviesData.BookMyShow.arrEvents)
    }
    else {
        throw new Error('Something went wrong.');
    }
}

function updateStatus(result, caller) {
    if (result) {
        console.log(`[${moment()}]:[${caller}]: Showtimings updated, bookings openah nu therila"`);
        open(_youtubeURL);
        clearInterval(_timers[caller]);
    }
    else {
        console.log(`[${moment()}]:[${caller}]: Still waiting..`);
    }
}

function isBookingOpened(caller) {
    let options = _options[caller];
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        else {
            let data = body;
            if (caller === _callers.BookMyShow)
                data = JSON.parse(body);
            if (data.d) {
                return updateStatus(_computeTicketNewStatus(JSON.parse(data.d)), _callers.TicketNew);
            }
            else if (data.moviesData) {
                return updateStatus(_computeBookMyShowStatus(data.moviesData.BookMyShow.arrEvents), _callers.BookMyShow)
            }
            else {
                throw new Error('Something went wrong.');
            }
        }
    });
}

// Call once as soon as the App is started.

isBookingOpened(_callers.BookMyShow);
isBookingOpened(_callers.TicketNew);

// Setting timers to call every _checkInterval/1000 s.

_timers[_callers.BookMyShow] = setInterval(() => {
    isBookingOpened(_callers.BookMyShow);
}, _checkInterval);

_timers[_callers.TicketNew] = setInterval(() => {
    isBookingOpened(_callers.TicketNew);
}, _checkInterval);