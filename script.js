let texts = [
  "Programmer",
  "Developer",
  "Web Developer",
  "Graphic Designer",
  "Game Developer",
  "Video Gamer",
  "Rubik's Cuber",
  "Chess Player",
  "Mathmatician",
  "Tech Enthusiast",
  "Engineer",
  "Anime Watcher",
  "Computer Scientist",
  "CS Major"
];

texts = texts.map(n => n + '.');

let selected;
let loc;

let speed = 80;
let wait = 1600/speed;
let typing = true;

function typeUp() {
    let news = selected;
  while (news == selected) news = Math.floor(Math.random() * texts.length);
  selected = news;
  loc = 0;
}

const typewriter = () => {
  let len = texts[selected].length;
  if (loc >= len * 2 + wait) typeUp()
  loc++;
  text = texts[selected].slice(0, len + wait / 2 - Math.abs(len + wait / 2 - loc)) + '_';
  document.getElementsByClassName('typewriter')[0].innerHTML = `${text.match('^[AEIOU].*') ? 'an' : 'a'} ${text}`;
}

typeUp();
setInterval(typewriter, speed);
