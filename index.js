function display(sectionId) {
    // Hide all sections except the one with the provided sectionId
    var sections = document.querySelectorAll('.tourism-section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}


function hideSection(sectionId) {
    document.getElementById(sectionId).style.display = 'none';
}
