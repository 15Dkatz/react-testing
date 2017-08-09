import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'test_note' } };

describe('Note', () => {
  let note = mount(<Note {...props} />);

  it('renders the note text', () => {
    expect(note.find('p').text()).toEqual(props.note.text);
  });
});