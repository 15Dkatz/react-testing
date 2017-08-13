import React from 'react';
import { mount, shallow } from 'enzyme';
import { Category, LinkedCategory } from './Category';
import { categories, clues } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { category: categories[0] };

describe('Category', () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();

    server.respondWith(
      'GET',
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(clues)
      ]
    );
  });

  describe('when creating a new category', () => {
    let category;

    beforeEach(done => {
      category = mount(<Category {...props} />);

      server.respond();

      setTimeout(done);
    });

    // it('logs the category', () => {
    //   console.log(category.debug());
    // });

    it('initializes the clues in state', () => {
      expect(category.state().clues).toEqual(clues);
    });

    it('renders the category title', () => {
      expect(category.find('h2').text()).toEqual(props.category.title);
    });

    it('renders the correct number of clues', () => {
      expect(category.find('Clue').length).toEqual(clues.length);
    });
  });
});

describe('LinkedCategory', () => {
  const linkedCategory = shallow(<LinkedCategory />);

  it('creates the link to navigate home', () => {
    expect(linkedCategory.find('Link h4').text()).toEqual('Home');
  });

  it('creates a category component', () => {
    expect(linkedCategory.find('Category').exists()).toBe(true);
  });
});