import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import RadioButtonListField from '../src/fields/RadioButtonListField'
const json = require('../snippets/json/radio_question.json')

configure({adapter: new Adapter() })

describe('RadioButtonListField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<RadioButtonListField question={json} />)
    expect(wrapper).toMatchSnapshot()
  })
})
