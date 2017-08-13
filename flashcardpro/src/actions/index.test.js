import * as actions from './index';
import { stack, stacks } from '../data/fixtures';

describe('actions', () => {
  it('creates an action to set the main stack', () => {
    const expectedAction = { type: actions.SET_STACK, stack };

    expect(actions.setStack(stack)).toEqual(expectedAction);
  });

  it('creates an action to add a stack', () => {
    const expectedAction = { type: actions.ADD_STACK, stack };

    expect(actions.addStack(stack)).toEqual(expectedAction);
  });

  it('creates an action to load stacks', () => {
    const expectedAction = { type: actions.LOAD_STACKS, stacks };

    expect(actions.loadStacks(stacks)).toEqual(expectedAction);
  });
});