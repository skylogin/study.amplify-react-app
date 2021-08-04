# photo app

* react
* graphql
* aws s3


```
# amplify init
> ...

# amplify add auth
> Default configuration
> Username
> No, I am done.

# amplify add api
> GraphQL
> photoapp
> Amazon Cognito User Pool
> No, I am done
> N
> Single object with fields
> Y

# amplify add storage
> Content
> photos
> 버킷명
> Auth users only
> create / update / read / delete
> N

# amplify push 
> Y


# amplify console api
> GraphQL

```