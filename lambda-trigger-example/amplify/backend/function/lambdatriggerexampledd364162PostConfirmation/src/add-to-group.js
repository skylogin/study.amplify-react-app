/* eslint-disable-line */ 
const aws = require('aws-sdk');

const cognitoProvider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

exports.handler = async (event, context, callback) => {
  let isAdmin = false;
  const adminEamils = ['skylogin@gmail.com'];

  if(adminEamils.indexOf(event.request.userAttributes.email) !== -1){
    isAdmin = true;
  }

  const groupParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
  };
  const userParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };


  try{
    await cognitoProvider.getGroup(groupParams).promise();
  } catch(e){
    await cognitoProvider.createGroup(groupParams).promise();
  }
  

  if(isAdmin){
    groupParams.GroupName = 'Admin';
    userParams.GroupName = 'Admin';

    try{
      await cognitoProvider.getGroup(groupParams).promise();
    } catch(e){
      await cognitoProvider.createGroup(groupParams).promise();
    }

    // 관리자일 경우 Admin 그룹에 추가
    try{
      await cognitoProvider.adminAddUserToGroup(userParams).promise();
      callback(null, event);
    } catch(e){
      callback(e);
    }
  } else{
    callback(null, event);
  }

  return event;
};
