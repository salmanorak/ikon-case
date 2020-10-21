const appController = {
    init: function (opts){


    },
    onload: function (){
        this.domKeys = {
        }
        this.eventBinding();
    },
    app : $('#app'),
    data: {
    },
    functions: {
    },
    templates : {
    },
    eventHandlers:{
        select : (e)=>{
        },
    },
    eventBinding: function(){
        this.app.on('click','.item', this.eventHandlers.select)
    }
}

// Controller Initiated
appController.init(options)
$(document).ready(()=>{
    appController.onload();
})