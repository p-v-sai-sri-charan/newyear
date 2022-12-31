import React from 'react';
import {WhatsappShareButton} from 'react-share';
import {WhatsappIcon} from 'react-share';

const ShareButtons = () => {
  return (
    <div className="share-button">
        <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={64} round={true} />
        </WhatsappShareButton>
        
    </div>
  );
};

export default ShareButtons;
