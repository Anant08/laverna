/*global define */
define([
    'underscore',
    'marionette',
    'text!templates/notes/item.html'
], function(_, Marionette, Template){
    var View = Marionette.ItemView.extend({
        template: _.template(Template)
    });
});
