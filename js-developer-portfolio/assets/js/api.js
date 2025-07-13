
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/PaolaBiscaro/js-developer-portfolio/refs/heads/main/js-developer-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
