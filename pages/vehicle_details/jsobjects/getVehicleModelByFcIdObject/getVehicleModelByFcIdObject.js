export default {
    vehicleModelOptions: async () => {
    const vehicleModels = await getVehicleModelsByFcId.run(null, null, {fcId: vehicle_update_form.formData.fcId});
        return vehicleModels.map((model) => {
            return {
                "label" : model.name + ' :: '  + model.capacityInCft + "cft",
                "value" : model.id
            }
        })      
    }
}