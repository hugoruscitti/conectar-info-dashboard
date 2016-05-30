import Ember from 'ember';

export default Ember.Route.extend({
  timer: null,

  activate() {

    let timer = setInterval(() => {
      console.log("Refresh....");
      this.refresh();
    }, 1000);

    this.set("timer", timer);
  },

  deactivate() {
    clearInterval(this.get("timer"));
  },

  model() {
    return this.store.findAll('event');
  }
});
