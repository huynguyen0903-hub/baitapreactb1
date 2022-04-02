import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
        
        

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <Banner/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <Item/>
                </div>
            </div>
        </div>
      
      
    )
  }
}
