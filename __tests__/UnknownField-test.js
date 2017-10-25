import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import UnknownField from '../src/fields/UnknownField'
const json = require('../snippets/json/unknown_question.json')

configure({adapter: new Adapter() })

describe('UnknownField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<UnknownField question={json}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
