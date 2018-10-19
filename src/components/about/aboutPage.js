"use strict";

var React = require('react');

var About = React.createClass({

    statics: {
        // willTransitionTo: function (transition, params, query, callback) {
        //     if (!confirm('Are you sure to enter?')) {
        //         transition.abort();
        //     } else {
        //         callback();
        //     }
        // },

        // willTransitionFrom: function (transition, component, callback) {
        //     if (!confirm('Are you sure to leave?')) {
        //         transition.abort();
        //     } else {
        //         callback();
        //     }
        // }        
    },

    render: function () {
        return (
            <div>
                <h1>About</h1>
                This application uses folowing technologies:
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browsify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;