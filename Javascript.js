let btn = document.getElementById("btn");
let output = document.getElementById("output");
let lucky = document.getElementById("lucky");
let quote =[ 

"Surround yourself with a bunch of like-minded people, and you'll soak up their habits like a starved sponge. Fat people with fat friends care less about their weight",
"You can't let one bad moment spoil a bunch of good ones.",
"The guys who won World War II and that whole generation have disappeared, and now we have a bunch of teenage twits.",
"Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid.",
"I believe in Jesus Christ as my Lord and savior. I believe that Jesus died for my sins, and rose again, and that's my belief. I still don't know what 'Christian' means. I'm a follower of Christ, but I keep making a whole bunch of mistakes. And I thank God for forgiveness.",
"Black people need some peace. White people need some peace. And we are going to have to fight. We're going to have to struggle. We're going to have to struggle relentlessly to bring about some peace, because the people that we're asking for peace, they are a bunch of megalomaniac warmongers, and they don't even understand what peace means.",
"Nothing great is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig. I answer you that there must be time. Let it first blossom, then bear fruit, then ripen.",
"If the world was ending, I think I would grab some Cinnamon Toast Crunch, a bunch of water, and I'd probably just... I'd probably go crazy.",
"The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do.",
"The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime",

];
let num = [1,2,3,4,5,6,7,8,9];


btn.addEventListener('click', function(){
 var randomQuote = quote[Math.floor(Math.random() * quote.length)]
 var randomNum  = num[Math.floor(Math.random() * num.length)]
output.innerHTML = randomQuote;
lucky.innerHTML = randomNum;
})