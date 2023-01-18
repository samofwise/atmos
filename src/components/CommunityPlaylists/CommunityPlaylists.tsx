import { Link } from '@mui/material'
import React from 'react'
import LinkComponent from '../common/LinkComponent'

const CommunityPlaylists = () => {
  return (<>
    <div>CommunityPlaylists</div>
    <Link component={LinkComponent} to="/">Goback to playlists</Link>
    </>)
}

export default CommunityPlaylists