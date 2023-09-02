AFRAME.registerComponent("createModel",{
    init:function(){
        getModel()
        createModel()
    },

    createModel:function(model){
        var barcode_value=model.barcode_value
        var modelUrl=model.model_url
        var modelName=model.modelName

        var scene=document.querySelector("a-scene")
        var marker=document.createElement("a-marker")

        marker.setAttribute("id",`marker-${modelName}`)
        marker.setAttribute("type","barcode")
        marker.setAttribute("model_name",modelName)
        marker.setAttribute("value",barcode_value)
        marker.setAttribute("markerhandler",{})
        scene.appendChild("marker")

        if(barcode_value===0){
            var modelEl = document.createElement("a-entity")
            modelEl.setAttribute("id",`${modelName}`)
            modelEl.setAttribute("geometry",{
                primitive:"box",
                width:model.width,
                height:model.height,
            })
            modelEl.setAttribute("position",model.position)
            modelEl.setAttribute("rotation",model.rotation)
            modelEl.setAttribute("material",{
                color:model.color
            })
            marker.appendChild(modelEl)
        }
    },
    getModel:function(){
        return fetch("js/compoundList.json")
      .then(res => res.json())
      .then(data => data.model_url);
      
    }
})