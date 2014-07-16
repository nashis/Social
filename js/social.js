var YCustom = YCustom || YUI();

YCustom.use('node', function(Y) {

    // Anyone who wants to use this widget, must fire this event
    Y.on('global-social', function(data) {
        attachSocial(data.node, data.url)
    });
    
    // Core widget logic
    function attachSocial(node, url) {
        var sNode
                , winObj = Y.one(window)
                , width = 600
                , height = 300
                , social = {
                    'facebook': '//www.facebook.com/sharer/sharer.php?u=',
                    'twitter': '//twitter.com/share?url=',
                    'gplus': '//plus.google.com/share?url=',
                    'pinterest': '//www.pinterest.com/pin/create/button?url='
                }
        ;
        
        // Attach event handler for different social platforms
        if (!(node instanceof YCustom.Node) || !url) {
            return false;
        }
        
        for (var provider in social) {
            sNode = '';
            switch (provider) {
                case 'facebook':
                    // https://developers.facebook.com/docs/plugins/share-button/
                    sNode = node.one('#sw_fb');
                    break;
                case 'twitter':
                    // https://dev.twitter.com/docs/tweet-button
                    sNode = node.one('#sw_twitter');
                    break;
                case 'gplus':
                    // https://developers.google.com/+/web/share/
                    sNode = node.one('#sw_gplus');
                    width = 480;
                    break;
                case 'pinterest':
                    // https://developers.pinterest.com/pin_it/
                    sNode = node.one('#sw_pinterest');
                    width = 700;
                    break;
            }

            if (sNode instanceof YCustom.Node) {
                sNode.setAttribute('src', social[provider] + encodeURIComponent(url));
                sNode.on('click', openDialog);
            }
        }

        // Position the popup window wrt main window
        function openDialog() {
            var top = (winObj.get('winHeight') - height) / 2
                    , left = (winObj.get('winWidth') - width) / 2
                    ;

            window.open(this.getAttribute('src'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=' + height + ',width=' + width + ',top=' + top + ',left=' + left);
            return false;
        }
    }
});