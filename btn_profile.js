<input id="f9_photo" type="button" value="f9_btn" onclick="f9Profile(this);">
    function changeImage(a) {
        document.getElementById("img").src=a;
    }
</script>
<div id="main_img">
    <img id="img" src="http://placehold.it/110x110">
</div>
<div id="thumb_img">
    <img src='http://placehold.it/120x60'  onclick='changeImage("http://placehold.it/120x60");'>
    <img src='http://placehold.it/130x60'  onclick='changeImage("http://placehold.it/130x60");'>
    <img src='http://placehold.it/140x60'  onclick='changeImage("http://placehold.it/140x60");'>
</div>

var profile = ["html", "css", "javascript"]

var ilist = document.images;

for(var i = 0; i < ilist.length; i++) {
    if(ilist[i].src == 'banner.gif') {
        // found the banner
    }
}
