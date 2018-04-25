# Revelry
### An Automatic REST API for your Sound Files

[Inspired by Gilfoyle's Napalm Death Bitcoin alert...](https://www.youtube.com/watch?v=ybGOT4d2Hs8)

Revelry is a simple app that wraps your sound files with a RESTful API. You can then call the API to play the sound. Revelry assumes your server has a speaker (i.e. your server is a wifi-enabled Arduino or your old laptop!).

Use cases include:
1. An audio notification system for webhooks
2. Trolling your friends with a hidden speaker controlled remotely
3. A Jukebox controlled by raw HTTP requests



> PRs and additional sounds welcome!

### To Use
1. Clone repo
2. ```npm i```
3. ```nvm use``` (Or manually switch to Node 8.9);
3. ```npm start``` to launch the server
4. Send requests to ```localhost:3000/your-preferred-endpoint```
5. Explore sound options from ```localhost:3000```
