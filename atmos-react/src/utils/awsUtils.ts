import awsconfig from '../aws-exports';

// eslint-disable-next-line import/prefer-default-export
export const updateAwsExports = (config: typeof awsconfig):typeof awsconfig => (
  { ...config, oauth: { ...config.oauth, redirectSignIn: `${window.location.origin}/`, redirectSignOut: `${window.location.origin}/` } }
);
