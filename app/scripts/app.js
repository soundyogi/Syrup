var App = window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

// STORE
App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter',
});

// CONTROLLER
App.ApplicationController = Ember.Controller.extend({
    date: (new Date()).getFullYear(),
});

// ROUTER
App.Router.map(function() {
    this.resource("music", { path: "/music" }, function() {
        //this.resource("artist", { path: "/:slug/:id" });
       // this.resource("album", { path: "/:artist_slug/:slug/:id" });
     });
});

// ROUTES
App.MusicIndexRoute = Ember.Route.extend({

});

App.ArtistRoute = Ember.Route.extend({
    serialize: function(model) {
        return {
            slug: model.get('slug'),
            id: model.get('id'),
        };
    },
    
    model: function(params) {
        console.log("Looking for artist with slug", params.slug, "and ID", params.id);
        return App.Artist.find(params.id);
    },
    
    setupController: function(controller, model) {
        
    }
});



require('scripts/models/models');
/* Order and include as you please.
require('scripts/routes/*');
require('scripts/controllers/*');

require('scripts/views/*');
require('scripts/router');
*/
