/* eslint-disable-line */ const aws = require('aws-sdk');

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

exports.handler = async (event, context, callback) => {

  let isAdmin = false;
  const adminEmails = ['skylogin@gmail.com'];

  if(adminEmails.indexOf(event.request.userAttributes.email) !== -1){
    isAdmin = true;
  }

  if(isAdmin){
    const groupParams = {
      UserPoolId: event.userPoolId,
      GroupName: 'Admin'
    };
    const userParams = {
      UserPoolId: event.userPoolId,
      Username: event.userName,
      GroupName: 'Admin'
    };

    try {
      await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    }


    try{
      await cognitoidentityserviceprovider.adminAddUserToGroup(userParams).promise();
      callback(null, event);
    } catch(e){
      callback(e);
    }
  } else{
    callback(null, event);
  }
};
