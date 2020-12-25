import React from "react";
import UserInfo from './UserInfo';

const Comment = (props) => {
    return (
        <div className="Comment">
           <UserInfo user={props.author} />
            <div className="Comment-text">  
            {props.text}
                {/*formatDate(props.date)} */}
            </div>
            <div className='Comment-date'>

            </div>
        </div>
      );

}

export default Comment; 