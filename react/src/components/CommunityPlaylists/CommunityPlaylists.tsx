import { Link } from '@mui/material';
import LinkComponent from '../common/LinkComponent';

function CommunityPlaylists() {
  return (
    <>
      <div>CommunityPlaylists</div>
      <Link component={LinkComponent} to="/">Goback to playlists</Link>
    </>
  );
}

export default CommunityPlaylists;
