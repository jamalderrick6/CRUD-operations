import React from 'react';
import { createSongs } from '../../utils/api';

class CreateSong extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            artist: '',
            ratings: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    createSong = async (e) => {
        e.preventDefault()
        let payload = {
            title: this.state.name,
            artist: this.state.artist,
            ratings: this.state.ratings
        }
        const data = await createSongs(payload)
        if ([200, 201].includes(data.response.status)) {
            console.log("song has been created")
        } else {
            console.log(data.response)
            console.log(data.json)
        }
    }

    render() {
        return (
            <section className="Section Create">
                <form>
                    <header>Add a song</header>
                    <div className="Create_Song">
                        <label>
                            <span>Song name</span>
                            <input name="name" onChange={this.handleChange} type="text" />
                        </label>

                        <label>
                            <span>Artist</span>
                            <input name="artist" onChange={this.handleChange} type="text" />
                        </label>

                        <label>
                            <span>Ratings</span>
                            <input name="ratings" onChange={this.handleChange} type="number" min="0" max="5" />
                        </label>

                        <button className="button_Create" onClick={this.createSong}>
                            create song
                        </button>

                    </div>
                </form>
            </section>
        )
    }
}

export default CreateSong