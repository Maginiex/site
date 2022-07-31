
document.getElementsByTagName('button')[0].addEventListener('click', schmyak);
function schmyak()
{
    document.getElementsByTagName('button')[0].remove();
    let newButton = document.createElement('button');
    newButton.innerHTML = 'всем пока';
    document.body.appendChild(newButton);
    alert('привет');