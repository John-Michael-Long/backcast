var VideoPlayerView = Backbone.View.extend({
  
  initialize: function(){
    //console.log(this.model)
    this.listenTo(this.collection, 'select', this.getNewModel);
    this.render();
  },

  getNewModel: function(model) {
    this.model = model;
    this.render();
    console.log(model);
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
