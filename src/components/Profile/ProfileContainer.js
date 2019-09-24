import React from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profilePageReduser'
import { useEffect } from 'react';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';


const ProfileContainer = (props) => {

    useEffect(() => {
        if(props.loginDataId){
           return props.setProfile(props.loginDataId)
        }  
    }, []);


    let setOtherUser = () => {
        props.setProfile(2)
    }
    return !props.isAuth? <Redirect to='/login' />:<Profile {...props}
    setOtherUser={setOtherUser} />
   
};

let mapDispatchToProps = (dispatch) => {
    return { setProfile: (id) => (dispatch(setProfile(id))) }
}

let mapStateToProps = (state) => {
    
    return {
        profile: state.profilePage.profileData,
        errorMessage: state.profilePage.errorMessage,
        isFetching: state.profilePage.isFetching,
        iconsUrlList: state.profilePage.iconsUrlList,
        isAuth: state.loginPage.isAuth,
        loginDataId: state.loginPage.id,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

