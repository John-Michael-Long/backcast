var VideoListView = Backbone.View.extend({
  
  el: ".list",

  initialize: function(){
    
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
  
    this.$el.children().detach();
    this.$el.html(this.template());
    

    this.$el.append(this.collection.models.map(function(video) {
      //var list =  // do we need '.el' at the end??
      return new VideoListEntryView({model: video}).render();
    }));
    
    
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});

