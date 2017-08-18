import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app = mount(<App />);

  it('renders the App title', () => {
    // console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Note to Self');
  });

  it('renders the clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
  });

  describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

    it('renders a FormControl component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

    it('renders a submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit');
    });
  });

  describe('when creating a note', () => {
    let testNote = 'test note';

    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it('updates the text in state', () => {
      expect(app.state().text).toEqual(testNote);
    });

    describe('and submitting the new note', () => {
      beforeEach(() => {
        app.find('.btn').at(0).simulate('click');
      });

      afterEach(() => {
        app.find('.btn').at(1).simulate('click');
      });

      it('adds the new note to the state', () => {
        // console.log(app.state());
        expect(app.state().notes[0].text).toEqual(testNote);
      });

      describe('and remounting the component', () => {
        let app2;

        beforeEach(() => {
          app2 = mount(<App />);
        });

        it('reads the stored note cookies', () => {
          expect(app2.state().notes).toEqual([{ text: testNote }]);
        });
      });

      describe('and clicking the clear button', () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click');
        });

        it('clears the notes in state', () => {
          // console.log(app.state());
          expect(app.state().notes).toEqual([]);
        });
      });
    });
  });
});