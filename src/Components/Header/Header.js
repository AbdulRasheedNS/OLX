import React,{ useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const pushToCreate =()=>{
    {user?history.push('/create'):history.push('/login')}
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
          history.push('/')
        }}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : <span className='loginlogout' onClick={()=>{history.push('/login')}}><b>Login</b> </span> }</span>
          <hr />
        </div>
          {user && <span className='loginlogout' onClick={()=>{
            console.log(firebase);
            firebase.auth().signOut();
            history.push('/')
          }}><b>Logout</b></span>}

        <div className="sellMenu" onClick={pushToCreate}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
