import * as UI from './inferface.js';

export default class lyricsAPI {

    constructor( artistName, songName ) {
        this.artist = artistName;
        this.song = songName;
        this.url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`
    }

    getLyrics() {
        fetch( this.url )
            .then( response => response.json() )
            .then( data => {
                if( data.lyrics ) {
                    const { lyrics } = data;
                    console.log(UI.lyricsName);
                    UI.lyricsName.textContent = `${this.artist}: ${this.song}`
                    UI.resultDiv.textContent = lyrics;
                } else {
                    UI.messagesDiv.textContent = 'Song not found';
                    UI.messagesDiv.classList.add('error');
                    setTimeout(() => {
                        UI.messagesDiv.textContent = '';
                        UI.messagesDiv.classList.remove('error');
                        UI.form.reset();
                    }, 3000);
                }
            })
            .catch( error => console.log(error ));
    }
}