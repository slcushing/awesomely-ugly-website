let button = document.querySelector('button');
button.addEventListener('click', function(event){
    var image = document.getElementById('clickMe');
    if (image.src.match("https://images.saymedia-content.com/.image/t_share/MTc0MTc0NjcyMzExNTYwMDYw/how-to-conduct-a-stakeout.jpg")) {
        image.src = "https://i.pinimg.com/736x/90/b3/ff/90b3fff1a1136f252882b3acedccc86a.jpg";
    } else {
        image.src = "https://images.saymedia-content.com/.image/t_share/MTc0MTc0NjcyMzExNTYwMDYw/how-to-conduct-a-stakeout.jpg";
    }
});






//https://assets.change.org/photos/4/iy/mo/jXiYmoKXZbBxwwb-800x450-noPad.jpg?1593702885
//https://i.pinimg.com/736x/90/b3/ff/90b3fff1a1136f252882b3acedccc86a.jpg //elmo
// https://images.saymedia-content.com/.image/t_share/MTc0MTc0NjcyMzExNTYwMDYw/how-to-conduct-a-stakeout.jpg
