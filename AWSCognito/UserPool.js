import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from 'amazon-cognito-identity-js';

import {USER_POOL_ID, CLIENT_ID} from 'react-native-dotenv';

const poolData= {
    UserPoolId:USER_POOL_ID,
    ClientId:CLIENT_ID
}

export default new CognitoUserPool(poolData);

export const getAttributeList = (attributes = []) =>{

    return attributes.map((attribute) =>  new CognitoUserAttribute(attribute))
   
}



export const getCognitoUser =(username) =>{
    const userData={
        Username: username,
        Pool: new CognitoUserPool(poolData)
    }

    return  new CognitoUser(userData);

}