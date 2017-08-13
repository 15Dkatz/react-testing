import * as actions from './index';
import { categories, category } from '../data/fixtures';

describe('actions', () => {
  it('creates an action to set categories', () => {
    const expectedAction = {
      type: actions.SET_CATEGORIES,
      categories
    };

    expect(actions.setCategories(categories)).toEqual(expectedAction);
  });

  it('creates an action to pick a category', () => {
    const expectedAction = {
      type: actions.PICK_CATEGORY,
      category
    };

    expect(actions.pickCategory(category)).toEqual(expectedAction);
  });
});