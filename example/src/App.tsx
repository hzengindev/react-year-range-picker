import React from 'react'
import Basic from './Basic'
import Disabled from './Disabled'
import CustomStyle from './CustomStyle'
import CustomText from './CustomText'

const App = () => {
  return (
    <div style={{ padding: '16px' }}>
      <h1>Year Range Picker</h1>
      <hr />
      <Basic />
      <Disabled />
      <CustomStyle />
      <CustomText />
    </div>
  )
}

export default App
