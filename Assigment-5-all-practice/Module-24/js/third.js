const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `

<h1> my dynamic section </h1>
<p>This is my first dynamic section</p>
<ul>
<li>my first item</li>
<li>my first item</li>
<li>my first item</li>
<li>my first item</li>
<li>my first item</li>
</ul>
`
main.appendChild(section);