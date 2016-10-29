export default function(server) {
  var venue = server.create('venue');
  server.createList('event', 5, { venue: venue.id });
}
