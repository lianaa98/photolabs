import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

function HomeRoute(props) {

  const {favPhotoExist, like, toggleModalState, PhotoData, clickImgSetID} = props;

  return (
    <div className="home-route">
      <TopNavigationBar favPhotoExist={favPhotoExist} />
      <PhotoList photos={PhotoData} 
      like={like} 
      toggleModalState={toggleModalState}
      clickImgSetID={clickImgSetID} />
    </div>
  );
}

export default HomeRoute;