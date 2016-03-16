var url = require('url');

/**
 * Github image tag
 *
 * Syntax:
 *   {% img_p slug [title]%}
 */
hexo.extend.tag.register('img_p', function(args, ctx){
    var classes = args[1] || "";
    var imgAttr = args[2] || "{}";
    var slug = args[0] || "";

    var PostAsset = ctx.model('PostAsset');

    var asset = PostAsset.findOne({post: this._id, slug: slug});

    classes = classes.split(',');
    imgAttr = JSON.parse(imgAttr);

    imgAttr.src   = githubResourceUrl + imageId;
    imgAttr.class = classes.join(' ');

    return '<img src="' + url.resolve(ctx.config.root, asset.path) + '" class="' + imgAttr.class + '">';

});