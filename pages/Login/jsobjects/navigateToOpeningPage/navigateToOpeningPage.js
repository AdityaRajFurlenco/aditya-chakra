export default {
	navigate: (data) => {
		storeValue("userName", data.name, true);
		storeValue("gatekeeperToken", data.token.token, true);
		navigateTo('opening_page',{},'SAME_WINDOW');
	}
}