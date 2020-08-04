var posts = [
    {
        title: ' Lorem Ipsum',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius corrupti error molestias repudiandae minima officia accusantium! Provident et debitis, harum laboriosam ducimus sed illo culpa alias libero sint mollitia quidem veritatis. Debitis omnis ullam fuga aut accusantium deleniti quia alias id pariatur repellendus, amet nesciunt veritatis distinctio similique suscipit rem. Quis vero corrupti aliquam animi officia ratione repellat, dicta nobis cum tempora ab accusantium pariatur deserunt distinctio nam vitae culpa omnis qui dolorum mollitia. Esse aperiam, veniam reprehenderit vel voluptates tenetur numquam fugit, sunt veritatis culpa quisquam! Aliquam perspiciatis soluta quis exercitationem dicta molestias deserunt labore culpa,'
    },
    {
        title: 'Dolor Sit',
        post: 'Unde perferendis quasi veritatis, officiis cupiditate accusantium animi libero omnis consequatur laudantium! Commodi reiciendis totam sit sapiente ex ratione expedita sed cupiditate ullam numquam repellendus, nemo aliquam placeat, enim quam dolorem unde?'}
];
var postHTML = '';
for (var i = 0; i < posts.length; i ++){
    var heading = '<div class="post"><h2>' + posts[i].title + '</h2>'
    var body = '<p>' + posts[i].post + '</p></div>'
    var concatThis = heading + body;
    postHTML = postHTML + concatThis;
}

console.log(postHTML)

document.getElementById('blogPosts').innerHTML = postHTML;

