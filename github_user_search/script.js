const apiUrl = 'https://api.github.com/users/';

const search = document.getElementById('search');
const userCard = document.getElementsByClassName('user-info')[0];

let repositories = [];

async function fetchRepo(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

async function fetchUser(username) {
  userCard.style.display = 'none';
  userCard.innerHTML = '';

  try {
    const response = await fetch(apiUrl + username);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    repositories = await fetchRepo(data.repos_url);

    userCard.style.display = 'block';
    userCard.innerHTML = `
      <div style="text-align: center;">
        <img src="${data.avatar_url}" alt="${data.name}" />
      </div>
      <div>
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || "No bio available."}</p>
        <p>👥 Followers: ${data.followers} | Following: ${data.following}</p>
        <p>📦 Public Repositories: ${data.public_repos}</p>
        <div class="repositories">
          ${repositories
            .slice(0, 10)
            .map(
              (repo) =>
                `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`
            )
            .join('')}
        </div>
      </div>
    `;
  } catch (error) {
    userCard.style.display = 'block';
    userCard.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

search.addEventListener('search', () => {
  const username = search.value.trim();
  if (username) {
    fetchUser(username);
  }
  search.value = '';
});