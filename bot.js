var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/RTFM/i;botRegexSalt = /^\/directory/;  
      botRegexAd=/^\/script/;botRegexGTA = /^\/summerschedule/; botRegexSC = /^\/google/; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/tickets/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/help/;
      botRegexSiege = /^\/siege/; botRegexB = /^\/schedule/; botJohn = /^\/john/; botFaculty = /^\/faculty/; botInventory = /^\/inventory/; botSOS = /^\/sos/; botChipotle = /^\/chipotle/;
      botGoodbye = /^\/goodbye/; botCrystal = /^\/crystal/; botCuneo = /^\/cuneo/; botJhasir = /^\/jhasir/; botRaj = /^\/Raj/; botSam = /^\/sam/;
      botJorge = /^\/jorge/; botJoe = /^\/joe/; botAmanda = /^\/amanda/; botRed = /^\/red/; botLaurence = /^\/laurence/; botGrant = /^\/grant/;
      botElen = /^\/elen/; botAsmaa = /^\/asmaa/; botAleeza = /^\/aleeza/; botShadi = /^\/shadi/; botSirius = /^\/sirius/; botNick = /^\/nick/;
      botAnne = /^\/anne/; botSania = /^\/sania/; botRookies = /^\/rookies/; botCurtis = /^\/curtis/;
      
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botGoodbye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Hello everybody. After almost 2 years working here, it has come time for me to say goodbye. It has been a pleasure to work with (almost) all of you. I've written a select few of you personalized goodbye messages. Check and see if you're one of the lucky ones by typing /(your name). Don't feel bad if you didn't get one, it just means that I only had nice things to say about you. For the John's, it's /cuneo, /red, and /sirius");
    this.res.end();
  }
  else if(request.text && botCrystal.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I'm glad they didn't fire you to make room for Andrea. Working with you has been great, thanks for always keeping the pH above 7.");
    this.res.end();
  }
  else if(request.text && botChipotle.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Chipotle Rules: Gifs are not allowed in the work chat. If a gif is posted, any technician that is not a rookie can call dibs on chipotle. The person responsible for the posting of a given gif is responsible for buying chipotle for the first person to call dibs.");
    this.res.end();
  }
  else if(request.text && botCuneo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I have to start by saying that I understand part of why you are the way you are at work after all the stress of being a senior tech. However, there's still some things I will never understand. I don't know that anybody will. You definitely care a lot about this job, but you really need to smoke a blunt and get laid. If you do that, I think there's still hope.");
    this.res.end();
  }
  else if(request.text && botJhasir.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Fuck you. Fuck you for showing up to two Sunday shifts the entire summer. Fuck you for making my scheduling life impossible. Chill out with the drugs, take care of your body so you stop dying so much. ");
    this.res.end();
  }
  else if(request.text && botRaj.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Even though I told you about 15 times that I put in my 2 weeks, I feel like you're probably going to call me asking if I actually quit the desk. Probably has something to do with your perpetual drunkenness. Please give your liver a break. ");
    this.res.end();
  }
  else if(request.text && botSam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Don't get peppered. Again.");
    this.res.end();
  }
  else if(request.text && botJorge.test(request.text)) {
    this.res.writeHead(200);
    postMessage("No matter how many souls you eat, you'll still be my favorite.");
    this.res.end();
  }
  else if(request.text && botJoe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Thanks for the Ciroc, major key.");
    this.res.end();
  }
  else if(request.text && botAmanda.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  }
  else if(request.text && botRed.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Fuckin pussy.");
    this.res.end();
  }
  else if(request.text && botLaurence.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I will never forgive you for the time you ate my ENTIRE family sized bag of doritos. And licked your fingers between every handful. Even though we had plates to put the chips on. GFY. - This was going to be worse but u gave me half a bagel this morning so I'm sparing you. ");
    this.res.end();
  }
  else if(request.text && botAleeza.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/245x180.gif.056493d72f424da8a126f5ebbb423379");
    this.res.end();
  }
  else if(request.text && botShadi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Hi, my name's Dylan ");
    this.res.end();
  }
  else if(request.text && botAsmaa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("So... Can I get my macbook charger back or nah");
    this.res.end();
  }
  else if(request.text && botSirius.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#RIP https://i.groupme.com/781x735.png.6071fdb2c2534e02b69448df00aedacf");
    this.res.end();
  }
  else if(request.text && botNick.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Favorite Rookie EVer (except Anne)");
    this.res.end();
  }
  else if(request.text && botAnne.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I haven't even worked a shift with you and you're still my favorite rookie (sorry Nick)");
    this.res.end();
  }
  else if(request.text && botSania.test(request.text)) {
    this.res.writeHead(200);
    postMessage("You're a fucking savage. On behalf of everybody, I thank you for everything you said to Cuneo.");
    this.res.end();
  }
  else if(request.text && botCurtis.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/250x160.gif.190e88fc7bc5455891a4ecb3653fa783");
    this.res.end();
  }
  else if(request.text && botRookies.test(request.text)) {
    this.res.writeHead(200);
    postMessage("All I have to say is: May the odds be ever in your favor.");
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/open?id=1tES5uRM7D9x2KLcG-qf8mVhFxHSMls_AggoswbnLLgA");
    this.res.end();
  } 
  else if(request.text && botFaculty.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/file/d/0Bw6hDgpynV3qUktjR3lta1VOVnc/view?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage(" Sebastian- 8-9853 | Steve- 8-5449 | Erick 8-2416 | Eliot 8-3606 | May Peralta 8-5938 | Events (Maria Otero) 8-2362 | Blackboard 8-3949 |");
    this.res.end();
  } 
  else if(request.text && botJohn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.pornhub.com");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/open?id=1uXQnVasUe-tytr8ZPBnv4DhEljoIRKQaXFLWkrDzRw0");
    this.res.end();
  }
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1UYLmG1TVepo0cbaIVPoKvKJxtKQ7TSoGgA1QzYSZ1hU/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://bfy.tw/NF");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/ma32/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://helpdesk.bus.miami.edu");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("current commands: /script /google /rtfm /inventory /sos /schedule /directory /cool guy /faculty /shrug");
    this.res.end();
  }
  else if(request.text && botInventory.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/a/bus.miami.edu/forms/d/1PeNKgSWNm7BFzOUyDP1sVpACvYhps-slhMFcCKvmzaM/viewform");
    this.res.end();
  }
   else if(request.text && botRegexB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://tinyurl.com/fall2016SDschedule");
    this.res.end();
  }
  else if(request.text && botSOS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/900x900.png.9c279d35ff884a07bad4f225ef6ce8bb");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
