const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Add active class to the clicked link
            link.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show the clicked section
            const sectionId = link.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
   
    // // About Me Section: Dynamically populate with images and descriptions
    // const aboutMeContent = [
    //     {
    //         img: "images/project1.jpg",
    //         description: "Working on a responsive web design project."
    //     },
    //     {
    //         img: "images/project2.jpg",
    //         description: "Developing a JavaScript-based game."
    //     },
    //     {
    //         img: "images/project3.jpg",
    //         description: "Collaborating on a team project using React."
    //     }
    // ];

    // const aboutMeContainer = document.getElementById("about-me-content");

    // aboutMeContent.forEach(item => {
    //     const aboutItem = document.createElement("div");
    //     aboutItem.classList.add("about-item");

    //     aboutItem.innerHTML = `
    //         <img src="${item.img}" alt="About Me Image">
    //         <p>${item.description}</p>
    //     `;

    //     aboutMeContainer.appendChild(aboutItem);
    // });

    // // Contact Section: Handle comments
    // const commentForm = document.getElementById("comment-form");
    // const commentInput = document.getElementById("comment-input");
    // const commentsSection = document.getElementById("comments-section");

    // commentForm.addEventListener("submit", (e) => {
    //     e.preventDefault();

    //     const commentText = commentInput.value.trim();
    //     if (commentText) {
    //         const comment = document.createElement("div");
    //         comment.classList.add("comment");
    //         comment.textContent = commentText;

    //         commentsSection.appendChild(comment);
    //         commentInput.value = ""; // Clear the input field
    //     }
    // });
