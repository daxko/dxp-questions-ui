import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import EmailField from '../src/fields/EmailField'
const json = require('../snippets/json/email_question.json')

configure({adapter: new Adapter() })

describe('EmailField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<EmailField question={json}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
