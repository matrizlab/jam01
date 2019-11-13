const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then(res => res.json())
    .catch(error => console.error(error));

  const markup = repos
    .map(
      repo => `
          <a href="${repo.html_url}" class="issue no-underline">
            <small class="date float-right">(⭐️ ${repo.stargazers_count})</small>
            <h3>${repo.name}</h3>
            </a>`
    )
    .join("");

  const content = document.getElementById("content");

  content.innerHTML = `<div class="contain contain--more">${markup}<div class="padding"></div></div>`;
};

listRepos("matrizlab");
