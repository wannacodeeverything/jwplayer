define([
    'utils/helpers',
    'utils/backbone.events',
    'utils/ui',
    'templates/display-container.html',
    'utils/underscore'
], function(utils, Events, UI, Template, _) {
    // model
    var DisplayContainer = function() {
        this.el = utils.createElement(Template());
        this.addButton = function (button) {
            this.el.appendChild(button.el);
        };
    };

    _.extend(DisplayContainer.prototype, {
        element: function() {
          return this.el;
        }
    });

    return DisplayContainer;
});