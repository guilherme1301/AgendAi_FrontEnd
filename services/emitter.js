export const EventEmitter = {
  events: {}, // dictionary with our events
  on(event, listener) { // add event listeners
    if (!this.events[event]) {
      this.events[event] = {
        listeners: []
      }
    }
    this.events[event].listeners.push(listener);
  },
  off(event, listener) { // remove listeners
    if(this.events[event]){
        this.events[event].listeners = this.events[event].listeners.filter(a => a == listener);
    }
  },
  emit(name, ...payload) { // trigger events
    if(this.events[name] && this.events[name].listeners){
      for (const listener of this.events[name].listeners) {
        listener.apply(this, payload)
      }
    }
  }
}
