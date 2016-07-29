export default function() {

  this.get('/events', (schema) => {
    return schema.events.all();
  });

  this.get('/topics', (schema) => {
    return schema.topics.all();
  });

  this.post('/topics', (schema, request) => {
    return { name: request.params.name };
  });
}
