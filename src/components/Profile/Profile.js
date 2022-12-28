import React, { useState } from 'react';
import './profile.css';
import { signOut } from 'firebase/auth';
import { useLoginContext } from '../../UserProvider';
import { auth } from '../../firebaseConfig';
import avatar from '../../assets/avatar.png';

const Profile = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { saveLogin, setSaveLoginEmail } = useLoginContext();

  const cierreSesion = async () => {
    await signOut(auth);
    setSaveLoginEmail('');
  };
  return (
    <>
      {profileOpen ? (
        <div className="settingContainer" onClick={() => setProfileOpen(false)}>
          <div className="userdetails">
            <img src={avatar} alt="Avatar" className="avatar" />
            <p className="username">{saveLogin}</p>
          </div>
          <button onClick={cierreSesion} className="logout-btn">
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <img
          src={avatar}
          alt="Avatar"
          className="avatarProfileClose"
          style={{ display: profileOpen && 'none' }}
          onClick={() => setProfileOpen(true)}
        />
      )}
    </>
  );
};

export default Profile;
