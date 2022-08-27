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

const userData={
    Username: 'userSub',
    Pool: new CognitoUserPool(poolData)
}

export const cognitoUser = new CognitoUser(userData);