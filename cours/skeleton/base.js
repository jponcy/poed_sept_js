function initSkeleton() {
    var oldBody = document.body.cloneNode(true);

    document.body.innerHTML = `
        <div class="container">
            <div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="tp1/4_skeleton.html">TP 4</a></li>
                        <li style="float:right"><a class="active" href="#about">About</a></li>
                    </ul>
                </nav>
            </div>

            <div id="content">
                Page content.
            </div>
        </div>
    `;

    var content = document.getElementById('content');

    content.innerHTML = '';
    document.getElementById('content').appendChild(oldBody);
}

initSkeleton();
