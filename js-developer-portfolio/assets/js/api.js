
async function fetchProfileData() {
    const url = 'https://github.com/PaolaBiscaro/js-developer-portfolio/blob/main/js-developer-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
