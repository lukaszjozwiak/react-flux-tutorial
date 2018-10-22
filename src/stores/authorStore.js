"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmiter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _ = require('lodash');
var _authors = [];

var AuthorStore = assign({}, EventEmiter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function () {
        return _authors;
    },

    getAuthorById: function (id) {
        return _.find(_authors, { id: id });
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existintAuthor = _.find(_authors, { id: action.author.id });
            var existintAuthorIndex = _.indexOf(_authors, existintAuthor);
            _authors.splice(existintAuthorIndex, 1, action.author);
            break;
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function (author) {
                return action.id === author.id;
            });
            break;
        default:
        //nothing to do
    }
    AuthorStore.emitChange();
});

module.exports = AuthorStore; 