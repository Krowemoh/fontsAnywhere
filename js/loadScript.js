function checkWidth()
{
  if (window.innerWidth>1300)
  {
    script = document.createElement("script");
    script.src="http://127.0.0.1/projects/fonts-anywhere/js/fontsAnywhere.js";
    document.body.appendChild(script);
  }
}
