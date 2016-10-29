export default function() {
  this.namespace = '';

  // this.get('/events', function(schema) {
  //   let events = schema.events.all();
  //   let venues = schema.venues.all();
  //   debugger;
  //   return {
  //     events: events.models,
  //     venues: venues.models
  //   };
  // });
  this.get('/events');
  this.get('/events/:id');

  this.get('/topics');
  this.get('/topics/:id');

  this.post('/topics', (schema, request) => {
    return { name: request.params.name };
  });

  this.get('/venues');
  this.get('/venues/:id');
}
