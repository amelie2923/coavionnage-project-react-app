import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const SideBarComponent = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        {/* <img alt="MDB React Logo" className="img-fluid" src={logo}/> */}
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/asso-dashboard" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="file-invoice" className="mr-3" />
              Mes annonces
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/profile" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="user" className="mr-3" />
              Compte
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/notifications">
          <MDBListGroupItem>
            <MDBIcon icon="bell" className="mr-3" />
              Notifications
          </MDBListGroupItem>
        </NavLink>
        {/* <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink> */}
      </MDBListGroup>
    </div>
  );
}

export default SideBarComponent;