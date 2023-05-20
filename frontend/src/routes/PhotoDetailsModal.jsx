import React from 'react';

import '../styles/PhotoDetailsModal.scss';

export const PhotoDetailsModal = (props) => {

  const {closeModal, PhotoData, clickedImgURL} = props;

  const displayPhotoList = PhotoData.map(photo => {
    return <img className="photo-details-modal--images" key={photo.urls.id} src={photo.urls.thumb} />
  })

  return (
  <div className='photo-details-modal'>
    <button className='photo-details-modal--close-button'
    onClick={closeModal}>
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_428_287">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>

    <img className="photo-details-modal--image" src={clickedImgURL} />
    <span>Similar Photos:</span>
    <div className="photo-details-modal--photolist">
      {displayPhotoList}
    </div>
  </div>
  )
}


export default PhotoDetailsModal;