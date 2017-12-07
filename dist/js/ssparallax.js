(function(){
    this.ssparallax = function() {
        this.trackScroll();
    }

    ssparallax.prototype.trackScroll = function(){
        var lastValue = 0;
        window.addEventListener('scroll',function(){
            var body = document.body,
                html = document.documentElement,
                height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ),
                viewport = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                newHeight = height - viewport;
                scrollValue = Math.floor( (window.scrollY / newHeight) * 100 );
                document.body.style.setProperty("--ssparallax",scrollValue);
        });
    }
}());
