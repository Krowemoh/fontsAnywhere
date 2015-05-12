function checkWidth()
{
  if (window.innerWidth>1300)
  {
    script = document.createElement("script");
    script.src="https://raw.githubusercontent.com/Working123/fontsAnywhere/master/js/fontsAnywhere.js";
    document.body.appendChild(script);
  }
}
