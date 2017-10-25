import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import DateField from '../src/fields/DateField'
const json = require('../snippets/json/date_question.json')

configure({adapter: new Adapter() })

describe('DateField component', () => {
  it.skip('should render a question', () => {
    const wrapper = shallow(<DateField question={json}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
