# e-commerce

* react
* amplify-ui-react
* react-router


```
# amplify init
> ...

# amplify add auth
> Default configuration
> Username
> Yes, I want to make some additional changes.
> Eamil
> Add User to Group
> Admin
> Y


# amplify add storage
> NoSQL Database
> producttable
> producttable
> id
> string
> N
> id
> N
> N
> N


# amplify add api
> REST
> ecommerceapi
> /products
> Create a new Lambda function
> ecommercefunction
> NodeJS
> Serverless ExpressJS function(Integration with Amazon API Gateway)
> Y
> Y
> auth, storage
> create / read / update / delete
> create / read / update / delete
> N
> N
> N
> N
> N
> Y
> Authenticated and Guest users
> create / read / update / delete
> read
> N 

```