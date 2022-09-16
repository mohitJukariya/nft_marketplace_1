import React, { Component } from 'react'
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit';
import '../App.css';

export class Main extends Component {
  render(props) {
    return (
      <div className='mint container-filled'>
        <div className="text-center my-1 text-dark">
          <h1>
            <strong>
              <u>KryptoBird - NFT MarketPlace</u>
            </strong>
          </h1>
        </div>
        <hr />
        <div className='container-fluid mt-1 text-center content mr-auto ml-auto my-4'>
          <form onSubmit={(event) => {
            event.preventDefault()
            const kryptoBird = this.kryptoBird.value
            this.props.mint(kryptoBird)
            // console.log({kryptoBird})
          }}>
            <input
              style={{opacity:'0.7'}}
              className="form-control mb-1"
              type="text"
              placeholder="Add a file location"
              ref={(input) => this.kryptoBird = input}
            />
            <input style={{margin:'6px'}} type="submit" className='btn btn-info btn-black' value='MINT' />
          </form>
          <hr/>
          <div className="row textCenter">
            {this.props.kryptoBirdz.map((kryptoBird) => {
              return(
                <div className='col-md-4 my-3' >
                  <div key={kryptoBird.toString()}>
                    <MDBCard className='token img' style={{maxWidth:'22rem'}}>
                    <MDBCardImage src={kryptoBird} position='top' height='250rem' style={{marginRight:'4px'}}/>
                    <MDBCardBody>
                      <MDBCardTitle> KryptoBirdz </MDBCardTitle>
                      <MDBCardText> These KBirdz are from a different universe called UNOMIA and they got distracted from their actual path and got trapped in our world. Each KBird is unique and has its own characterstics.</MDBCardText>
                      <MDBBtn href={kryptoBird}>Download</MDBBtn>
                    </MDBCardBody> 
                    </MDBCard>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
    )
  }
}

export default Main
