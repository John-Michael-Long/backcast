var VideoListEntryView = Backbone.View.extend({
  el: ".list",
  
  initialize: function(){
    $('.video-list-entry-title').on('click', this.model.select());
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
