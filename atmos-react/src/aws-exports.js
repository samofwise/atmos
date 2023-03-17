/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-southeast-2",
    "aws_appsync_graphqlEndpoint": "https://zm4pkukrird2dopljxeubecfpe.appsync-api.ap-southeast-2.amazonaws.com/graphql",
    "aws_appsync_region": "ap-southeast-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_cognito_identity_pool_id": "ap-southeast-2:4cb38441-6f63-4447-a63f-0199bffd5bcf",
    "aws_cognito_region": "ap-southeast-2",
    "aws_user_pools_id": "ap-southeast-2_lo9OK7xEF",
    "aws_user_pools_web_client_id": "39ceu5ekrjjpjfl66ltb7om6fr",
    "oauth": {
        "domain": "atmos-dev.auth.ap-southeast-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/,https://atmos.samhenry.tech/",
        "redirectSignOut": "http://localhost:3000/,https://atmos.samhenry.tech/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL",
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;