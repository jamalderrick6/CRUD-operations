import React from 'react'
import './App.css'
import CreateSong from './components/songs/CreateSong';
import SongList from './components/songs/SongList';
import Tabs from './components/tabs/Tabs';
import { fetchSongs } from './utils/api';

class MusicApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  loadSongs = async() => {
    const data = await fetchSongs()
    if ([200, 201].includes(data.response.status)) {
      this.setState({ songs: data.json })
    } else {
      console.log(data.response)
      console.log(data.json)
    }
  }

  async componentDidMount() {
    this.loadSongs()
  }

  render() {
    const tabs = [
      {name: 'Songs', component: <SongList loadSongs = {this.loadSongs} songs={this.state.songs}/>},
      {name: 'Add Song', component: <CreateSong/>},
    ]
    return (
      <main className="MusicApp">
        <header>USIU App Radio</header>
        <Tabs identifier="Button-Tab">
          {tabs.map((tab, index) => {
            return (
              <div label={tab.name} Identifier="Button-Tab">
                {tab.component}
              </div>
            )
          })}
        </Tabs>
      </main>
    )
  }
}

export default MusicApp
