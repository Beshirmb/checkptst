import React from "react";
import PropTypes from "prop-types";
const Profile = props => {
    Profile.propTypes ={
        name : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.string,
        
    
    };
    Profile.defaultProps = {fullName :'Beshir',bio:'Web-Developer',profession:'Developer'}

    alert("Hello BOSS")
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h1>{props.Bio}</h1>
            <h1>{props.Profession}</h1>
            <img class="img1" src="./pdp.jpg" alt="test"/>
        </div>
    )

}
export default Profile;
