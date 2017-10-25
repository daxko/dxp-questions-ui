import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import PhoneField from '../src/fields/PhoneField'
const json = require('../snippets/json/phone_question.json')

configure({adapter: new Adapter() })

describe('PhoneField component', () => {
  it.skip('should render a question', () => {
    const wrapper = shallow(<PhoneField question={json} />)
    expect(wrapper).toMatchSnapshot()
  })
})
