import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import TextField from '../src/fields/TextField'
const json = require('../snippets/json/text_question.json')

configure({adapter: new Adapter() })

describe('TextField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<TextField question={json} possible_answers={json.possible_answers}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
