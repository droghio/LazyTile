
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

    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", desc: "I do well fine.", order: 0 },
    { src: "images/img1", desc: "Hello how are you?", order: 0 },
    { src: "images/img2", desc: "I am doing well.", order: 0 },
    { src: "images/img3", desc: "I'm doing well.", order: 0 },
    { src: "images/img4", desc: "I'm ok, but not doing well.", order: 0 },
    { src: "images/img5", desc: "I am doing welloff.", order: 0 },
    { src: "images/img6", desc: "I am the well.", order: 0 },
    { src: "images/img7", desc: "Iu is doing well.", order: 0 },
    { src: "images/img8", desc: "Iam has a well.", order: 0 },
    { src: "images/img9", desc: "I am well doing nicely.", order: 0 },
    { src: "images/img10", order: 0 }

]


function collageExpand(me){

    //Clear the on click event.
    $(me).attr("onclick", "")
    $(me).attr("nohover", true) //Default css will now ignore hover events.


    collageloaded = true
    collagecontainer.css({ overflow: "auto", height: "none"})

    addImages()
}


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

     $(".collageitem").css({ width: 100/numbercolumns+"%", display: "block" })

     //Hide extra elements if we are not loaded.
     if (!collageloaded){
         //$(".collageitem:gt(" + Number(numbercolumns-1) + ")").css({display: "none"})
         collagecontainer.height($(".collageitem").height())
     }
}


function addImages(){
    
    //Add items.
    for (var row = 0; row < (Number(!collageloaded) || rowstoadd); row++){
        
        //Add items to the container.
        for (var index = 0; index < numbercolumns; index++){
            if (!images.length){ $.waypoints("destroy"); checkLayout(); return; } //Nothing left, clean up.
    
            image = images.pop()
            collagecontainer.append(
                "<div class='collageitem' style='background-image: url(\"" + image.src + "\")' " + (image.desc ? "desc" : "nodesc") + ">" +
                    "<div class='inner'>" +
                        "<p class='description'>" + (image.desc || "") + "</p>" +
                    "</div>" +
                "</div>"
            )
            numberitems++
        }
    
    }

    //Resize items.
    checkLayout()

    if (collageloaded){
        //Waypoints does not seem to update its firing point when the element resizes, so we must do this manually.
        $.waypoints("destroy");
        
        collagecontainer.waypoint(function() {
            addImages()
        },{
            offset: function(){ return $.waypoints('viewportHeight')-$(this).height()+$(".collageitem").height() }
        });

    }
 
}


//Waypoint triggers when top of the element hits the top of the viewport, use offsets to bring this down.
$(document).ready(function (){

    numbercolumns = 7
    rowstoadd = 3

    collageloaded = false
    numberitems = 0

    collagecontainer = $("#collagecontainer")
    deadmanswitch = {}

    //Minimum size before causing a layout shift.
    minwidth = 200;
    maxwidth = 300;
    
    //Add a few images.
    addImages();

    //Auto scale images on window resize.
    //Makes sure images are within the specified sizes.
    $(window).resize(resetDeadman)
    collagecontainer.css({overflow: "hidden"})

})
