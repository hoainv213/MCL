import React from 'react';
import LoadingIcon from './../assets/images/loading-icon.gif';

const Loading = () => (
    <div className="contain_loading">
        <img src={LoadingIcon} alt="loader gif" className="active" id="loader" />
    </div>
);
export default Loading;