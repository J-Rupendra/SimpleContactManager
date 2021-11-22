import React from 'react';

const Header = () => {
    return (
        // <div className="ui fixed menu" >
        //     <div className="ui  teal header" >
        //         <h2>Contact Manager</h2>
        //     </div>
        // </div>
//         <h2 class="ui center aligned icon header">
//   <i class="circular users icon"></i>
//   Contact manager
// </h2>
        <React.Fragment>
            {/* <br /> */}
            <h2 className="ui blue header" style={{marginTop:"5px", textAlign:"center"}}>
                <i className="circular users icon" ></i>
                <div className="content">
                    Contact Manager
                </div>
            </h2>
        </React.Fragment>
    )
}

export default Header;