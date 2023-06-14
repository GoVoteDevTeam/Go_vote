import React, { useState } from 'react';
import styled from 'styled-components';

const MyPage = () => {
  return (
    <div className="MyPage">
      <h2>My page</h2>
      <div className="user-info">
        <img 
          className="profile-image" 
          src="" 
          alt="" 
        />
        <div className="user-details">
          <h3></h3>
          <p></p>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className="my-lists">
        <h3></h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default MyPage;
