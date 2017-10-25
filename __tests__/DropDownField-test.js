import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import DropDownField from '../src/fields/DropDownField'
const json = require('../snippets/json/dropdown_question.json')

configure({adapter: new Adapter() })

describe('DropDownField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<DropDownField question={json}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
