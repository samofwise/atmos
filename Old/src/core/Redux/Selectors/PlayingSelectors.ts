
import { createSelector } from 'reselect'
import { IState } from '../State';

const getDevice = (state: IState) => state.playing.device
const getIsPlaying = (state: IState) => state.playing.isPlaying

export const getPlayingOtherLocation = createSelector(
    [getDevice, getIsPlaying],
    (device, isPlaying) => {
        return isPlaying && !device
    }
)

