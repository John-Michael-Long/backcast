var VideoListView = Backbone.View.extend({
  
  el: ".list",

  initialize: function(){
    // console.log(this.$el);
    // console.log(this.collection);
    // console.log(this.collection.models);
    // this.render();
    this.listenTo(this.collection, 'sync', this.render );
  },

  render: function() {
    //debugger;
    console.log('rendered');
    this.$el.children().detach();
    this.$el.html(this.template());
    

    this.collection.models.forEach(function(item) {
      var list = new VideoListEntryView({model: item}).render(); // do we need '.el' at the end??
      this.$el.append(list);
    }, this);
    
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

