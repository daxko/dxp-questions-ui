import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import AddressField from '../src/fields/AddressField'
const json = require('../snippets/json/address_question.json')

configure({adapter: new Adapter() })

describe('AddressField component', () => {
  it('should render a question', () => {
    const wrapper = shallow(<AddressField question={json} />)
    expect(wrapper).toMatchSnapshot()
  })
})
