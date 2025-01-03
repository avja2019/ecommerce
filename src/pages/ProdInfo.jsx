import React from 'react'
import ProdSlider from '../components/prodInfo/ProdSlider'
import ProdSimilar from '../components/prodInfo/ProdSimilar'
import ProdDetail from '../components/prodInfo/ProdDetail'

const ProdInfo = () => {
  return (
    <div>
      <ProdSlider/>
      <ProdDetail/>
      <ProdSimilar/>
    </div>
  )
}

export default ProdInfo
