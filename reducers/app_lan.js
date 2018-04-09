const app_lan = (state = 'EN', action) => {
  switch (action.type) {
    case "SET_LAN":
			state = action.payload;
			break;
  }
  return state;
};

export default app_lan;