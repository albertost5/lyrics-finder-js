import lyricsAPI from "./api.js";
import * as UI from "./inferface.js";

UI.form.addEventListener('submit', findLyrics);

function findLyrics( e ) {

    e.preventDefault();

    const artistInput = document.querySelector('#artist').value.trim();
    const songInput = document.querySelector('#song').value.trim();

    if( !artistInput || !songInput ) {
        UI.messagesDiv.textContent = 'All fields are required!';
        UI.messagesDiv.classList.add('error');

        setTimeout(() => {
            UI.messagesDiv.remove();
        }, 3000);
    } else {
        const lyricsFinder = new lyricsAPI( artistInput, songInput );
        lyricsFinder.getLyrics();
    }
}
