import React, { useEffect } from 'react';
import { connect }from 'react-redux';

// Typing
import { ThunkDispatch } from 'redux-thunk';
import { rooReducerType } from '../../reducers';
import { 
    UsersActionTypes, 
    UsersStateI as MapStatePropsI,
} from '../../types/users';

// Actions
import { requestUsers } from '../../actions';

interface MapDispatchPropsI {
    requestUsers: () => void,
}

type UserPropsType = MapStatePropsI & MapDispatchPropsI;

const UserList: React.FC<UserPropsType> = ({ loading, users, error, requestUsers }) => {

    useEffect(() => {
        requestUsers();
    }, [])

    if(loading) {
        return (
            <h1>Loading ...</h1>
        )
    }

    if(error) {
        return (
            <h1>{error}</h1>
        )
    } 
 
    return (
        <div>
            <h1>USER LIST</h1>
            <div>
                { users.map(({ id, name }) => {
                    return (
                        <p key={id}>{name}</p>
                    )
                }) }
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }: rooReducerType) => {
    return {
        loading: users.loading,
        users: users.users,
        error: users.error,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<rooReducerType, unknown, UsersActionTypes>) => {
    return {
        requestUsers: () => dispatch( requestUsers() ),
    }
}

export default connect<MapStatePropsI, MapDispatchPropsI, {}, rooReducerType>(mapStateToProps, mapDispatchToProps)(UserList);