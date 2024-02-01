function loadContent(name) {
    fetch(`/load_content/${name}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  const paths = document.querySelectorAll('svg path');
  const tooltip = document.getElementById('tooltip');

  paths.forEach(path => {
    path.addEventListener('mouseover', function(event) {
      fetch(`/load_tooltip/${path.id}`)
        .then(response => response.text())
        .then(data => {
            tooltip.style.left = event.pageX + 'px';
            tooltip.style.top = event.pageY + 'px';
            tooltip.innerHTML = data;
            tooltip.classList.remove('hidden');

        })
        .catch(error => console.error('Error:', error))
    });

    path.addEventListener('mouseout', function() {
      hideTooltip();
    });
  });

  function hideTooltip() {
    tooltip.classList.add('hidden');
  }

  document.addEventListener('mousemove', function(event) {
    if (!tooltip.classList.contains('hidden')) {
      tooltip.style.left = event.pageX + 'px';
      tooltip.style.top = event.pageY + 'px';
    }
  });
});

