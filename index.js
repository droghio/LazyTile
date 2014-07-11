
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
    
    if (!images.length){ $.waypoints("destroy"); return; }
    collagerow = $("<div class='collagerow'></div><br />")
    collagecontainer.append(collagerow)

    for (index = 0; index < numbercolumns; index++){
        if (!images.length){ $.waypoints("destroy"); break; }

        image = images.pop()
        collagerow.append(
            "<div class='collageitem' style='background-mage: url(\"" + image.src + "\")'>" +
                "<p class='collagedescription'>" + image.desc + "</p>" +
            "</div>"
        )
    }


   /*$.waypoints("destroy");
    collagecontainer.waypoint(function() {
        addImages()
    },{
        offset: function() {
            return (window.innerHeight)+(Number($(this).css("height").substr(0, $(this).css("height").length-2)))
            //(-1*Number($(this).css("height").substr(0, $(this).css("height").length-2)))
        }
    });*/

}


//Waypoint triggers when top of the element hits the top of the viewport, use offsets to bring this down.
$(document).ready(function (){

    numbercolumns = 5
    collagecontainer = $("#collagecontainer")

    collagecontainer.waypoint(function() {
        addImages()
    },{
        offset: "bottom-in-view"
        //function() {
            //return (window.innerHeight)+(Number($(this).css("height").substr(0, $(this).css("height").length-2)))
            //(-1*Number($(this).css("height").substr(0, $(this).css("height").length-2)))
        //}
    });        
})
