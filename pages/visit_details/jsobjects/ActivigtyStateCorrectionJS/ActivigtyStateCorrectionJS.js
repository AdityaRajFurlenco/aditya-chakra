export default {
    submitCorrectionForm: async (resourceId,activityType)=>{
        var statesArray;
        storeValue("currentCorrectionResourceId",resourceId)
        try{
					POST_SHIPMENT_STATE_CORRECTION.run(
						() => {
							showAlert("Corrected")
							storeValue("currentResourceId",undefined);
							storeValue("applicableStates",undefined);
							closeModal("adminMarkingModal");
						}, (err) => {
							showAlert(err.errors.join(".\n"),'error');
						}
					);
     }catch(error){
			 					console.error(error.message)
                showAlert("Unable to correct! error details",'error');
         }
    },
    getApplicableState: async (resourceId, activityType) => {
         var response,options;
         storeValue("applicableStates", undefined)
         storeValue("currentResourceId",resourceId)
        // if(activityType == "SERVICE_ACTIVITY"){
						// showAlert("System not supporting the correction for service activity now",'info') 
					  // closeModal("adminMarkingModal");
            // // response = await GET_APPLICABLE_SA_STATE.run();
        // }
        // if(activityType == "SHIPMENT"){
          response = await GET_APPLICABLE_SHIPMENT_STATE.run();
        // }
        options = _.map(response, (item) => ({label: _.startCase(item),value: item}));

        storeValue("applicableStates",options)
        storeValue("currentResourceId",undefined)
        showModal('adminMarkingModal')
    },
    getEnrichment: async (resourceId, activityType) => {
			   console.log(activityType);
				 if(activityType == "SERVICE_ACTIVITY"){
							showAlert("System not supporting thecorrection for service activity now",'info')   
							return
					}
			
         storeValue("resourceEnrichments", undefined)
         storeValue("currentResourceId",resourceId)
         storeValue("currentResourceType",activityType)
         var response = await GET_ENRICHMENT.run();
         storeValue("resourceEnrichments", _.join(response,", "));
         storeValue("currentResourceId",undefined)
         storeValue("currentResourceType",undefined)
    }
}