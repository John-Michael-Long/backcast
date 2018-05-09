var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'select', this.getNewModel);
  },

  getNewModel: function(model) {
    this.model = model;
    this.render();
  },


  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="Loading">Please wait...</div>');
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
