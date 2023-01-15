import * as React from 'react';
import { Route } from 'react-router-dom';

export default function AnonymousOnlyRoute(p1: any) {
	var { component: Component, ...rest } = p1;
	return (<Route {...rest} render={(props) =>
			<Component {...props} />
	} />);
}
