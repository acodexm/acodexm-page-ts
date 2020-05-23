import React, { FunctionComponent } from 'react';
import acodexm from '../../assets/images/acodexm.png';
import profile_lines from '../../assets/images/profile_lines.png';
import styled from 'styled-components';
import { backgroundColor, section1Color } from '../../themes/colors';
interface OwnProps {}

type Props = OwnProps;
const ProfilePicture = styled.div`
  display: flex;
  img {
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 800px;
    min-width: 150px;
    min-height: 150px;
  }
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(transparent 20%, ${section1Color} 60%);
  }
  :after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${profile_lines});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
const ProfilePic: FunctionComponent<Props> = (props) => {
  return (
    <ProfilePicture>
      <img src={acodexm} alt="acodexm" />
    </ProfilePicture>
  );
};

export default ProfilePic;
