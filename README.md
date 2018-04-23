# Revere
### Play Sounds When Stuff Happens

[Inspired by Gilfoyle's Napalm Death Bitcoin alert...](https://www.youtube.com/watch?v=ybGOT4d2Hs8)

Revere is a simple Express server exposes a REST api that triggers sounds. It assumes that the server is connected to a speaker (i.e. your server is a wifi-enabled Arduino or your old laptop!).

> PRs and additional sounds welcome!

### To Use
1. Clone repo
2. ```npm i```
3. ```npm start``` to launch the server
4. Send requests to ```localhost:3000/your-preferred-endpoint```
5. Explore sound options from ```localhost:3000```
