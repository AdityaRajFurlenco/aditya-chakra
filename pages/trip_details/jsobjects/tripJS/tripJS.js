export default {
	show: async (tripId) => {
		storeValue("selectedTripId",undefined)
		storeValue("selectedTripId",tripId, true)
		navigateTo('visit_details', 'SAME_WINDOW')
	},
	serach: async (displayId) => {
		storeValue("selectedTripId",undefined)
		console.log("-------------------")
		console.log(tbl_trip_list.pageNo)
		storeValue("selectedTripId",displayId, true)
	},	
	startTrip: async (tripDisplayId) => {
		try{
			await START_TRIP.run();
     }catch(error){
			showAlert("Unable to started trip " +tripDisplayId + ", Please contact Team",'error')
     }
	}
}