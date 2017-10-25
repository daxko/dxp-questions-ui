import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import CheckBoxListField from '../src/fields/CheckBoxListField'
const json = require('../snippets/json/checkbox_question.json')

configure({adapter: new Adapter() })

describe('CheckBoxListField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<CheckBoxListField question={json} />)
    expect(wrapper).toMatchSnapshot()
  })
})