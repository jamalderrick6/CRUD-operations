import React from 'react';
import { RefreshCw, ThumbsDown, Trash2 } from 'react-feather';
import { deleteSong, updateSong } from '../../utils/api';
import { Switch } from '@material-ui/core';


class SongList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            new_song_rating: 0,
            view_top_rated: false
        }
    }

    changeRating = (e, index) => {
        this.setState({new_song_rating: e.target.value})
    }

    deleteSong = async(song_id) => {
        const data = await deleteSong(song_id)
        console.log(data)
         this.props.loadSongs()
    }

    updateSong = async(song_id) => {
        let song = this.props.songs.filter((song) => song.id === song_id)
        song[0]['ratings'] =  this.state.new_song_rating
        let payload = song[0]
        const data = await updateSong(song_id, payload)
        console.log(data)
        this.props.loadSongs()
    }

    handleRatingsView = () => {
        this.setState({view_top_rated : !this.state.view_top_rated})
    }

    render() {
        let songs = this.props.songs
        if(this.state.view_top_rated){
            songs = this.props.songs.filter((song, index) => song.ratings === 5)   
        }
        return (
            <section className="Section List">
                <span style={{textAlign: 'left'}}>filter songs on 5 rating : </span>
                <Switch checked={this.state.view_top_rated} onChange={this.handleRatingsView} name="export runs" />
                {
                    songs.map((song, index) => {
                        
                        return(
                            <div className="Container">
                            <span className="song-title">song : {song.title}</span>
                            <span className="song-artist">artist : {song.artist}</span>
                            <span className="song-rating">rating : {song.ratings}</span>
                            <span className="song-rating">
                                change rating:
                                <input 
                                onChange={(e) => this.changeRating(e, index)}  
                                value={this.state.new_song_rating} 
                                type ="number" 
                                min= '0' 
                                max='5'/>
                            </span>
                            <span onClick={(e) => this.deleteSong(song.id)}>
                                delete: <Trash2/>
                            </span>
                            <span onClick={(e) => this.updateSong(song.id)}>
                                update : <RefreshCw/>
                            </span>
                        </div>
                        )
                    })
                }
            </section>
        )
    }
}

export default SongList