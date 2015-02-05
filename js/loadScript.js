function checkWidth()
{
  if (window.innerWidth>1300)
  {
    script = document.createElement("script");
    script.src="http://www.projectfragments.com/projects/fontsAnywhere/js/fontsAnywhere.js";
    document.body.appendChild(script);
  }
}
