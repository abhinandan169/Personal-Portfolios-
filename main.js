// 1. INTERACTIVE BUTTON — Background Color Change
document.addEventListener("DOMContentLoaded", () => {
  const bgButton = document.getElementById("bgChangeBtn");

  if (bgButton) {
    bgButton.addEventListener("click", () => {
      const colors = ["#fef6e4", "#e0f7fa", "#f0e4ff", "#ffe4e1", "#d0f0c0", "#fff", "#bfcef0", "#9e8af3", "#EEDEC5", "#E6CB5F",];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    });
  }
});

// 2. API INTEGRATION — Fetch & Display Posts
document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("load-posts");
  const postsContainer = document.getElementById("posts-container");

  if (loadBtn && postsContainer) {
    loadBtn.addEventListener("click", () => {
      postsContainer.innerHTML = "<p>Loading posts...</p>";

      fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
        .then(response => response.json())
        .then(data => {
          postsContainer.innerHTML = "";
          data.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            `;
            postsContainer.appendChild(postDiv);
          });
        })
        .catch(error => {
          postsContainer.innerHTML = "<p>Failed to fetch posts. Please try again.</p>";
          console.error(error);
        });
    });
  }
});

// 3. FORM VALIDATION — Validate Contact Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent form submission

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Basic validation
      if (!name.value.trim()) {
        alert("Please enter your name.");
        name.focus();
        return;
      }

      if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
      }

      if (!message.value.trim()) {
        alert("Please enter your message.");
        message.focus();
        return;
      }

      // Success
      alert("Thank you! Your message has been sent.");
      form.reset(); // clear form
    });
  }
});


