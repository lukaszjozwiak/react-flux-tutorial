"use strict";

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight administration</h1>
                <p>React, react router and flux for responsive web app</p>
            </div>
        );
    }
});

module.exports = Home;