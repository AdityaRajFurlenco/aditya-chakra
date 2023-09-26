export default {
	getAll: async (visitId) => {
		if(visitId == null){
			return;
		} 
		try{
			storeValue("selectedVisitId", visitId,true)
			await TRIP_VISIT_SERVICES.run();
			showModal('Modal_visit_activities');
     }catch(error){
			showAlert("Unable to fetch trip details")
     }

	}
}