export default (route_name) => {

	return {
		type: 'Navigation/NAVIGATE',
		routeName: route_name
	};
};