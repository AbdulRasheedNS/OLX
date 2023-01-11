import React, {useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('') 
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

const handleSubmit=(e)=>{
  e.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:phone
      }).then(()=>{
        history.push('/')
      })
    })
  })
}
const pushToLogin=()=>{
  history.push('/login')
}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='' src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="Userr"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            defaultValue="user@gmail.com"
          />
          <br />
          <label htmlFor="phone_number">Phone</label>
          <br />
          <input
            className="input"
            type="tel"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="phone_number"
            name="phone"
            defaultValue="9876543210"
          />
          <br />
          <label htmlFor="password">Password (atleast 6 characters)</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            defaultValue="123"
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Signup</button>
        </form>
        <p onClick={pushToLogin}>Login</p>
      </div>
    </div>
  );
}
