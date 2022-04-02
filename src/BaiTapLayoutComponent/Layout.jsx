import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class Layout extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-12 p-0'>
                  <Header/>
              </div>
          </div>
          <div className='row'>
          <div className='col-12 p-0'>
            <Body/>
            </div>
          </div>
         <div className='row'>
           <div className='col-12 p-0'>
             <Footer/>
           </div>
         </div>
      </div>
    )
  }
}
