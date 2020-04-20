var post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab <em>illo inventore</em> veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ["bum", "chum", "mum"]
};

var post2 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 12, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab <em>illo inventore</em> veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: [],
};


var posts = [post1, post2]


var postTemplate = Handlebars.compile(document.getElementById('posts').innerHTML);
var tagTemplate = Handlebars.compile($("#tag").html());

Handlebars.registerPartial("tag", $("#tag").html());

$("body").append(postTemplate({posts: posts}));

console.log(posts)


