lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('img.lazy')
        }
    }
}).observe()
// this function applies the fade class and makes the images
// appear with lazy load
