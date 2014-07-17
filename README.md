LazyTile
===============

***Lazy loading web tile engine. Works great for web image galleries.***


###SETUP

Make sure you have the jQuery and jQuery Waypoints scripts included in your html file.
Assuming you are working in the pulled repo"

    <script type="text/javascript" src="/libs/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="/libs/waypoints.min.js"></script>


Now include the the LazyTile base code by adding the js and css files into your html document.

    <script type="text/javascript" src="/index.js"></script>
    <link rel="stylesheet" href="index.css"></link>
  
  
###CONSTRUCTING

To specify the content to load create a global array called images with the following signature:

    images = [
      {"src": "http://youImageUrl/image.png", "desc": "This is your image."},
    ]
    
Right now the index.js will create and populate this array with a set of nonexisting sample images.
You will either modify this array or create a new one.

The script will bind to the dom based on id. You will need to include the following html snippet where you want the gallery to load.

       <div id="collagecontainer" onclick="collageExpand(this)">
            <div id="collageitemscontainer">
                <div class="click">Open Gallery</div>
            </div>
        </div>
        
By default the gallery will load the first row and will expand when the container is clicked. On mouseover the ".click" div will be shown so
it can be used to present a call to action button.


###DETAILS

By default the widget will size elements so they fill the screen. You can set maxwidth and minwidth globals to have the code automatically
adjust the number of columns to match the provided values (units are pixels).
