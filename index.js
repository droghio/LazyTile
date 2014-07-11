
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
//XXXXXX  XXX     XXX XXX XXX  XX XXX//
//XXXXXX  XXX XXX XXX     XXX X X XXX//
//XXX XX  XXX XXX XXX XXX XXX XX  XXX//
//XXX     XXX     XXX XXX XXX XXX XXX//
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
//
//
//-------------------------------
//Lazy load collage.
//
//Load images, nice and clean.
//--------------------------------

// July 10, 2014
// John Drogo

/* Notes.

   Current implementation will not be able to resize well, there will be a massive remap overhead.
   Flex boxes would be nice, but I'm not sure they are cross-browser compliant enough.

*/


images = [

    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 }

]


function addImages(){
    
    //Add row containers.
    for (var row = 0; row < rowstoadd; row++){

        //Make a row container.
        if (!images.length){ $.waypoints("destroy"); return; } //Nothing left, clean up.
        collagerow = $("<div class='collagerow'></div><br />")
        collagecontainer.append(collagerow)
    
        //Add items to the row.
        for (var index = 0; index < numbercolumns; index++){
            if (!images.length){ $.waypoints("destroy"); break; } //Nothing left, clean up.
    
            image = images.pop()
            collagerow.append(
                "<div class='collageitem' style='background-mage: url(\"" + image.src + "\")'>" +
                    "<p class='collagedescription'>" + image.desc + "</p>" +
                "</div>"
            )
        }
    
    }


   //Waypoints does not seem to update its firing point when the element resizes, so we must do this manually.
   $.waypoints("destroy");
    collagecontainer.waypoint(function() {
        addImages()
    },{
        offset: "bottom-in-view" 
    });

}


//Waypoint triggers when top of the element hits the top of the viewport, use offsets to bring this down.
$(document).ready(function (){

    numbercolumns = 1
    rowstoadd = 3 
    collagecontainer = $("#collagecontainer")

    collagecontainer.waypoint(function() {
        addImages()
    },{
        offset: function(){ $.waypoints('viewportHeight')-$(this).height() },
        triggerOnce: true
    });        
})
