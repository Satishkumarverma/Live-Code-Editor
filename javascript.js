const html_code = document.querySelector("#html_c");
const css_code = document.querySelector("#css_c");
const js_code = document.querySelector("#js_c");
const output = document.querySelector("#output");

function result() {
    output.contentDocument.body.innerHTML = html_code.value + "<style>" + css_code.value + "</style>";
    output.contentWindow.eval(js_code.value);
}

function openFullscreen() {
    output.requestFullscreen();
}

const html5 = `<!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>
    
</body>
</html>`

html_code.innerHTML = html5;





