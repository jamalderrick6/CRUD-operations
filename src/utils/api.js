const get_options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }
}


const post_options = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    }
}

const put_options = {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    }
}

const delete_options = {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    }
}




//...get songs
export const fetchSongs = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/songs', get_options)
    const json = await response.json();
    return { 'response': response, 'json': json }
}

//...add a song
export const createSongs = async (payload) => {
    post_options['body'] = JSON.stringify(payload)
    console.log("post options", post_options)
    const response = await fetch('http://127.0.0.1:8000/api/songs', post_options)
    const json = await response.json();
    return { 'response': response, 'json': json }
}


//...update song
export const updateSong = async (song_id, payload) => {
    put_options['body'] = JSON.stringify(payload)
    console.log("post options", put_options)
    const response = await fetch(`http://127.0.0.1:8000/api/songs/${song_id}`, put_options)
    const json = await response.json();
    return { 'response': response, 'json': json }
}

//...delete a song
export const deleteSong = async (song_id, payload) => {
    const response = await fetch(`http://127.0.0.1:8000/api/songs/${song_id}`, delete_options)
    const json = await response.json();
    return { 'response': response, 'json': json }
}


