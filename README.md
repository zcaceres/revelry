# :loudspeaker: Revelry :loudspeaker:
### Automatic REST API for your Sound Files

[Inspired by Gilfoyle's Napalm Death Bitcoin alert...](https://www.youtube.com/watch?v=ybGOT4d2Hs8) :metal:

Revelry is a simple app that wraps your sound files with a RESTful API. You can then call the API to play the sound. Revelry assumes your server has a speaker (i.e. your server is a wifi-enabled Arduino or your old laptop!).

Use cases include:
1. An audio notification system for webhooks :alarm_clock:
2. Trolling your friends with a hidden speaker that you control with your cell phone :smiling_imp:
3. A Jukebox controlled by raw HTTP requests :musical_note:

The REST api mirrors the file structure of your /sounds directory. Some sample sounds are included (Unreal Tournament, George Michael, Eye of the Tiger...)

> PRs and additional sounds welcome!

### To Use
1. Clone repo
2. ```npm i```
3. ```nvm use``` (Or manually switch to Node 8.9);
4. Drop sounds into subdirectories of the `sounds` folder
3. ```npm start``` to launch
4. Send requests to ```localhost:3000/subdirectory-name-here/filename-here```
5. Explore sound options from ```localhost:3000```

### How to Easily Make Your Server Public
Download and set up `ngrok`.

From inside your Revelry project folder...
```
npm start
ngrok http 3000
```

You're live! :clap:
