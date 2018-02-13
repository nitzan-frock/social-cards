import React from 'react';

const portrait = (props) => {
    return (
        <div>
            <img className="UserImage" src={props.portrait}
                alt="placeholder Portrait"/>
        </div>
    );
};

export default portrait;