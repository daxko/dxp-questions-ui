import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import NameField from '../src/fields/NameField'
const json = require('../snippets/json/name_question.json')

configure({adapter: new Adapter() })

describe('NameField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<NameField question={json} />)
    expect(wrapper).toMatchSnapshot()
  })
})
