const apiUrl = "https://api.github.com/users/";
const cardContainer = document.querySelector(".card-container");
const form = document.querySelector(".form");
const userInput = document.querySelector("input");
const atUser = document.querySelector(".atUser");
const avatar = document.querySelector(".img-wrapper img");
const userName = document.querySelector(".user-name");
const checkProfile = document.querySelector(".check-profile");
const bio = document.querySelector(".bio");
const followers = document.querySelector(".followers-count");
const following = document.querySelector(".following-count");
const repos = document.querySelector(".repos-count");

const updateDetails = (a, u, b, f, r, followingCount, au) => {
  avatar.src = a;
  userName.innerHTML = u;
  bio.innerHTML = b;
  followers.innerHTML = f;
  following.innerHTML = followingCount;
  repos.innerHTML = r;
  atUser.innerHTML = `@${au}`;
};

const fetchURL = async () => {
  try {
    const res = await fetch(`${apiUrl}${userInput.value}`);
    const data = await res.json();

    console.log(data);
    updateDetails(
      data.avatar_url,
      data.login,
      data.bio,
      data.followers,
      data.public_repos,
      data.following,
      data.name
    );
    checkProfile.setAttribute("href", data.html_url);
    if (data.message === "Not Found") {
      cardContainer.style = "display: none";
    } else {
      cardContainer.style = "display: block";
    }
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchURL();
});
