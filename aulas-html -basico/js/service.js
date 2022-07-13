async function api(url = "/pokemon") {
    return await (await fetch("https://pokeapi.co/api/v2" + url)).json();
}

export default api;
