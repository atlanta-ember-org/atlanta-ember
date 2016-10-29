import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  country: faker.address.country,
  city: faker.address.city,
  address1: faker.address.streetAddress,
  name: faker.company.companyName,
  lat: 33.751575,
  lon: -84.322952,
  repinned: faker.random.boolean
});
