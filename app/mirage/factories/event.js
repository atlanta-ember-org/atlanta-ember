import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.name.title,
  description: faker.lorem.sentences,
  originally_created_at: faker.date.past,
  starts_at: faker.date.future,
  yes_rsvp_count: faker.random.number
});
