import * as React from 'react'
import Chip, { ChipProps } from '@material-ui/core/Chip';

interface Props<T> {
	value: T;
	selected?: boolean;
}

export default class SearchGroup<T> extends React.Component<Props<T> & ChipProps> {
	render() {
		let className = this.props.selected ? 'selected' : undefined;
		return <Chip {...this.props} className={className} />
	}
}