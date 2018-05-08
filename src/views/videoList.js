var VideoListView = Backbone.View.extend({
  
  el: ".list",

  initialize: function(){
    
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.$el.append(this.collection.models.map(function(item) {
      return new VideoListEntryView({model: item}).render().el;
    }));
    
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

