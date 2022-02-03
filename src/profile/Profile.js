import PropTypes from 'prop-types';
const Profile =({fullName,bio,profession,children,handleName})=>{

return(
<div className="container col-xxl-8 px-4 py-5">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">   
{children}
<div className="col-lg-6">
<h1 className=" display-5 fw-bold lh-1 mb-3">My name is {fullName}</h1>
 <p className="lead">My bio is : {bio}</p>
 <h3>My profession is : {profession}</h3>
 <br/>
 <button   className="btn btn-primary btn-lg px-4 me-md-2" onClick={ ()=>handleName(fullName)}>  REVEILLER </button>
</div>
</div>
</div>
)}
Profile.defaultProps={
    fullName : 'Sahla',
    bio : 'pas de bio',
    profession :'manekhdemch'
}
 Profile.prototype={
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession :PropTypes.string
 }
export default Profile