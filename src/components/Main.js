import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import d from './data.json';
import { Row } from 'react-bootstrap';
// import {
//     MDBNavbar,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBContainer,
//     MDBIcon
// } from 'mdb-react-ui-kit';


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: d,
            numOfHorn: 0,
            // numOfHorn: '0'
        }
    }
    updateHorn = (e) => {
        this.setState({
            numOfHorn: e.target.value
        })
        console.log(this.state.numOfHorn);
        //this.filterHorn(this.state.horn)

    }
    render() {
        return (

            <div>

                <header>
                  
                    <div
                        className='p-5 text-center bg-image photo'
                        style={{ backgroundImage: "url('https://cdn.hovia.com/app/uploads/Pastel-Pink-and-Purple-Unicorn-Colour-Wallpaper-Mural-Plain.jpg')", height: 500 }}
                    >
                        <div className='mask'>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div className='text-white'>
                                    <h1 className='mb-3'>Gallary</h1>
                                    <h4 className='mb-3'>Choose the number of horns</h4>
                                    <form>
                                        <select name='horn' className='btn btn-outline-light btn-lg' onChange={(e) => this.updateHorn(e)}>
                                            <option value='0'>All </option>
                                            <option value='1'>One </option>
                                            <option value='2'>Tow </option>
                                            <option value='3'>Three </option>
                                            <option value='100'>100 </option>
                                        </select>
                                        <p>{this.state.numOfHornd}</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Row xs={3} md={4} lg={3}>
                    {
                        this.state.data.map(element => {
                            return (
                                (Number(this.state.numOfHorn) === 0 &&
                                    <HornedBeasts imgurl={element.image_url}
                                        title={element.title}
                                        desc={element.description}
                                        showModal={this.props.showModal}
                                    />
                                ) || (Number(this.state.numOfHorn) === element.horns &&
                                    <HornedBeasts imgurl={element.image_url}
                                        title={element.title}
                                        desc={element.description}
                                        showModal={this.props.showModal}
                                    />
                                )

                            )
                        })}
                </Row>
            </div>
        )
    }
}

export default Main



// import React from 'react';
// import {
//     MDBNavbar,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBContainer,
//     MDBIcon
// } from 'mdb-react-ui-kit';

// export default function App() {
//     return (
//         <header>
//             <MDBNavbar expand='lg' light bgColor='white'>
//                 <MDBContainer fluid>
//                     <MDBNavbarToggler
//                         aria-controls='navbarExample01'
//                         aria-expanded='false'
//                         aria-label='Toggle navigation'
//                     >
//                         <MDBIcon fas icon='bars' />
//                     </MDBNavbarToggler>
//                     <div className='collapse navbar-collapse' id='navbarExample01'>
//                         <MDBNavbarNav right className='mb-2 mb-lg-0'>
//                             <MDBNavbarItem active>
//                                 <MDBNavbarLink aria-current='page' href='#'>
//                                     Home
//                                 </MDBNavbarLink>
//                             </MDBNavbarItem>
//                             <MDBNavbarItem>
//                                 <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//                             </MDBNavbarItem>
//                             <MDBNavbarItem>
//                                 <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//                             </MDBNavbarItem>
//                             <MDBNavbarItem>
//                                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//                             </MDBNavbarItem>
//                         </MDBNavbarNav>
//                     </div>
//                 </MDBContainer>
//             </MDBNavbar>

//             <div
//                 className='p-5 text-center bg-image'
//                 style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 400 }}
//             >
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <div className='text-white'>
//                             <h1 className='mb-3'>Heading</h1>
//                             <h4 className='mb-3'>Subheading</h4>
//                             <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
//                                 Call to action
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }