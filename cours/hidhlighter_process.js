if (!w3CodeColor) {
    console.error('w3CodeColor initialization problem');
} else {
    // Apply highlighter.
    document.querySelectorAll('pre').forEach(pre => {
        var codes = pre.querySelectorAll('code');

        if (codes.length > 0) {
            if (pre.children.length == 1) {
                pre.className = (pre.className + ' left').trim();
            }

            codes.forEach(e => w3CodeColor(e, 'js'));
        }
    });
}
