import { Divider, Dropdown, Icon, Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";


class Menu extends Component {
    
}

<Navbar
  alignLinks="right"
  brand={<Link to='#' className="brand-logo">Logo</Link>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    Getting started
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
  <Dropdown
    id="Dropdown_14"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<Link to>Dropdown{' '}<Icon right>arrow_drop_down</Icon></Link>}
  >
    <Link>Hey</Link>

    <Link>Hey</Link>

    <Divider />

    <Link>Hey</Link>
  </Dropdown>
</Navbar>