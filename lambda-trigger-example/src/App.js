import React, { useEffect, useState } from 'react';
import { Auth, Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';

function App() {
  const [user, updateUser] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => updateUser(user))
      .catch(err => console.log(err));

    fetchImages();
  }, []);


  async function onChange(e){
    const file = e.target.files[0];
    const filetype = file.name.split('.')[file.name.split.length -1];
    await Storage.put(`${uuid()}.${filetype}`, file);
    fetchImages();
  }
  async function fetchImages(){
    const files = await Storage.list('');
    const signedFiles = await Promise.all(files.map(async file => {
      const signedFile = await Storage.get(file.key);
      return signedFile;
    }));
    setImages(signedFiles);
  }



  let isAdmin = false;
  if(user){
    const { signInUserSession: { idToken: { payload }} } = user;
    console.log('payload: ', payload);

    if(payload['cognito:groups'] && payload['cognito:groups'].includes('Admin')) {
      isAdmin = true;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        { isAdmin && <p>Welcome, Admin</p> }

        <input type="file" onChange={onChange} />
        {
          images.map(image => (
            <img src={image} key={image} style={{ width: 500 }} />
          ))
        }
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
