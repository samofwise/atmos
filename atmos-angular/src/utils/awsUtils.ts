import awsconfig from '../aws-exports';

export const updateAwsExports = (config: typeof awsconfig):typeof awsconfig  => (
   {...config, oauth:{...config.oauth, redirectSignIn:`${window.location.origin}/`, redirectSignOut:`${window.location.origin}/` }}
)