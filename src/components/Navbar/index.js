import React, { useState, useEffect } from 'react';
import { Nav, NavLink, NavIcon, Bars, Counter, LoginBtn, SForm } from './NavbarElements';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../redux/action/storeaction'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

const Navbar = (props) => {
  const Cart = useSelector(state => state.changein.list)
  const errorMessage = useSelector(state => state.changein.errorMessage)
  const isloged = useSelector(state => state.changein.isloged)

  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    if (isloged) {
      setformIsOpen(false)
    }
  }, [isloged])

  // console.log('formValues: ', formValues);
  // useSta

  const handleLogin = () => {
    dispatch(login(formValues))
  }


  const [formIsOpen, setformIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to='/'>Mezzanotte</NavLink>
        <NavIcon>
          {isloged ? <LoginBtn onClick={() => dispatch(logout())}>Log out</LoginBtn> : <LoginBtn onClick={() => setformIsOpen(true)}>Login</LoginBtn>}
          <Modal isOpen={formIsOpen}>
            <SForm >
              <h4 className="text-center">Login</h4>
              <div className="form-group">
                <input onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} type="email" names="email" className="form-control" placeholder="email" />
              </div>
              <div className="form-group">
                <input onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} type="password" names="password" className="form-control" placeholder="password" />
              </div>
              <div className="form-group">
                <input onChange={(e) => setFormValues({ ...formValues, tel: e.target.value })} type="text" names="phone" className="form-control" placeholder="tel" />
              </div>
              <button onClick={() => handleLogin()} className="btn btn-primary float-right" style={{ backgroundColor: "#3f87a6" }}>Login</button>
              <button className="btn btn-danger float-right mr-1" style={{ backgroundColor: "#e66465" }} onClick={() => setformIsOpen(false)}>Close</button>
            </SForm>
            <span style={{display:"none"}}>{errorMessage.length && <div>{errorMessage}</div>}</span>
          </Modal>
          <Link to='/Cart'> <Bars style={{ color: 'white' }} data-text={Cart.length} /></Link>
          <Counter>{Cart.length}</Counter>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;