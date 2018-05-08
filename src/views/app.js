var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videoListView = new VideoListView({collection: this.videos});
    this.videoPlayerView = new VideoPlayerView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});


