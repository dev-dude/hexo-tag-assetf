var url = require('url');

/**
 * Github image tag
 *
 * Syntax:
 *   {% img_p slug [title]%}
 */
hexo.extend.tag.register('img_p', function(args){
    var type = args[0] || "",
        slug = args[1] || "",
        classes = args[2] || "",
        styles = args[3] || "{}",
        PostAsset = hexo.model('PostAsset'),
        asset = PostAsset.findOne({post: this._id, slug: slug}),
        template = '<img src="' + url.resolve(hexo.config.root, asset.path) + '" class="' + classes + '" style="' + styles + '">';

    classes = classes.split(',');
    classes = classes.join(' ');

    if (type === 'video') {
        template = '<video width="500" height="500" controls><source src="' + url.resolve(hexo.config.root, asset.path + "/videos/") + '" type="video/mp4"></video>';
    }
    return template;
});