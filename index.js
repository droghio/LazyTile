
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

   FIXED:Current implementation will not be able to resize well, there will be a massive remap overhead.
   Flex boxes would be nice, but I'm not sure they are cross-browser compliant enough.

*/


//Keep in mind the first image will be the last array item.
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
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", desc: "I do well fine.", order: 0 },
    { src: "img1", desc: "Hello how are you?", order: 0 },
    { src: "img2", desc: "I am doing well.", order: 0 },
    { src: "img3", desc: "I'm doing well.", order: 0 },
    { src: "img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "img5", desc: "I am doing welloff.", order: 0 },
    { src: "img6", desc: "I am the well.", order: 0 },
    { src: "img7", desc: "Iu is doing well.", order: 0 },
    { src: "img8", desc: "Iam has a well.", order: 0 },
    { src: "img9", desc: "I am well doing nicely.", order: 0 },
    { src: "img10", order: 0 }

]


function resetDeadman(){
    //Only trigger a resize after the window has been adjusted.
    //Stops stack overflows in browsers that send constant window resized events.
    clearTimeout(deadmanswitch)
    deadmanswitch = setTimeout(checkLayout, 100)
}


function checkLayout(){
    //Make sure all items are large enough, according to the min-width variable
    //and update layout if needed.

    //Adjust size.
    numbercolumns = numbercolumns || 10
    $(".collageitem").css({ width: 100/numbercolumns+"%" })
    prevnumbercolumns = numbercolumns

    while ($(".collageitem").width() < minwidth || $(".collageitem").width() > maxwidth){
        if (numbercolumns){  numbercolumns += optimizationdir = ( ($(".collageitem").width() < minwidth) ? -1 : 1 )   }
        else { 
            console.log("Collage container too small to size items properly!\n Check your minwidth is set properly.");
            break;
        }

        //Adjust size.
        $(".collageitem").css({ width: 100/numbercolumns+"%" })
        //Height is updated by the spacer.

        //Checks if we are in an optimization trap (both maxwidth and minwidth cannot be satisfied).
        //Adjusts such that minwidth is satisfied, but maxwidth is violated (items will be larger than maxwidth).
        //To prevent this adjust the minimum contentainer size or your maxwidth and minwidth variables.

        var toofew = $(".collageitem").width() > maxwidth
        var toomany = $(".collageitem").width() < minwidth

        //If we overshot (too many columns)...
        if (optimizationdir == 1 && toomany){ numbercolumns--; return  $(".collageitem").css({ width: 100/numbercolumns+"%" }); break; }
        else if (optimizationdir == -1 && toofew){ numbercolumns++; return  $(".collageitem").css({ width: 100/numbercolumns+"%" }); break; }

        prevnumbercolumns = numbercolumns

    }

     $(".collageitem").css({ width: 100/numbercolumns+"%" })

}


function addImages(){
    
    //Add items.
    for (var row = 0; row < rowstoadd; row++){
        
        //Add items to the container.
        for (var index = 0; index < numbercolumns; index++){
            if (!images.length){ $.waypoints("destroy"); return; } //Nothing left, clean up.
    
            image = images.pop()
            collagecontainer.append(
                "<div class='collageitem' style='background-image: url(\"" + image.src + "\")' " + (image.desc ? "desc" : "nodesc") + ">" +
                    "<div class='inner'>" +
                        "<p class='description'>" + (image.desc || "") + "</p>" +
                    "</div>" +
                "</div>"
            )
        }
    
    }


   //Waypoints does not seem to update its firing point when the element resizes, so we must do this manually.
   $.waypoints("destroy");
    collagecontainer.waypoint(function() {
        addImages()
    },{
        offset: function(){ return $.waypoints('viewportHeight')-$(this).height()+$(".collageitem").height() }
    });

    //Resize items.
    checkLayout()

}


//Waypoint triggers when top of the element hits the top of the viewport, use offsets to bring this down.
$(document).ready(function (){

    numbercolumns = 7
    rowstoadd = 3 
    collagecontainer = $("#collagecontainer")
    deadmanswitch = {}

    //Minimum size before causing a layout shift.
    minwidth = 200;
    maxwidth = 300;

    collagecontainer.waypoint(function() {
        addImages()
    },{
        offset: function(){ return $.waypoints('viewportHeight') }
    });        

    $(window).resize(resetDeadman)
})
