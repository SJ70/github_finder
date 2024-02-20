const BASE_URL = 'https://api.github.com';

async function getUserInfoByUserName(userName) {
    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.error(e);
    }
}

async function getRecentReposByUser(user, count) {
    try {
        const response = await fetch(`${BASE_URL}/users/${user.userName}?per_page=${count}&sort=created`);
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.error(e);
    }
}

export {getUserInfoByUserName, getRecentReposByUser};