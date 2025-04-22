document.getElementById('toggleResume').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const resumeSection = document.getElementById('resume');
    if (resumeSection.style.display === 'none' || resumeSection.style.display === '') {
        resumeSection.style.display = 'block'; // Show the resume section
    } else {
        resumeSection.style.display = 'none'; // Hide the resume section
    }
});