import React from 'react'
import { Header, Icon } from "semantic-ui-react";


const LandscapeMode = () => {
  return (
    <div id='rotate-phone'>
      <Header icon>
        <Icon name="sync alternate" />
          Please rotate your phone to continue.
      </Header>
    </div>
  );
}

export default LandscapeMode
