var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/RTFM/i;botRegexSalt = /^\/directory/;  
      botRegexAd=/^\/script/;botRegexGTA = /^\/summerschedule/; botRegexSC = /^\/google/; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/tickets/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/help/;
      botRegexSiege = /^\/siege/; botRegexB = /^\/schedule/; botJohn = /^\/john/; botFaculty = /^\/faculty/; botInventory = /^\/inventory/; botSOS = /^\/sos/;
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
    postMessage("Hello everybody. After almost 2 years working here, it has come time for me to say goodbye. Instead of being lame and just writing a basic bitch customary goodbye, I have written you all personalized goodbye notes. I have spent hours making these, and they will all be available through the chatbot. Type /(your name). For the rookies I didn't really get to know, I made a /rookies. For the johns, it is /red, /cuneo, and /sirius. I will miss almost all of you. Goodbye everybody.");
    this.res.end();
  }
  else if(request.text && botCrystal.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Did someone say basic??? Lol I'm glad they didn't fire you to make room for Andrea. Working with you has been great, hanks for always keeping the pH above 7. Sorry for dumping all my responsibility onto you, but you got this. Best of luck to you in all your future endeavors.");
    this.res.end();
  }
  else if(request.text && botCuneo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I have to start by saying that I understand part of why you are the way you are at work after all the stress of being a senior tech. However, there's still some things I will never understand. I don't know that anybody will. You definitely care a lot about this job, but you really need to smoke a blunt and get laid. If you do that, I think there's still hope.");
    this.res.end();
  }
  else if(request.text && botJhasir.test(request.text)) {
    this.res.writeHead(200);
    postMessage("First of all, fuck you. Fuck you for showing up to two Sunday shifts the entire summer. Fuck you for trying to get with everybody's mom and grandma. Fuck you for making my scheduling life impossible. Chill out with the drugs, take care of your body so you stop dying so much. Oh and fuck you for calling me and asking what kind of car my sister drives, that was creepy as shit. Deep down, like realllllyyyyy fucking deep down, you know I love you. But it's realllllllllllllyyyyyyyyyyyyyyyy deep down in there. =");
    this.res.end();
  }
  else if(request.text && botRaj.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I'll miss you showing up with cuban coffee yelling LET'S GET LIT. You are quite the character, and you'll always be my boy. Just take care of your liver bro if there's anything left to take care of.");
    this.res.end();
  }
  else if(request.text && botSam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Don't get peppered. Again.");
    this.res.end();
  }
  else if(request.text && botJorge.test(request.text)) {
    this.res.writeHead(200);
    postMessage("If you asked me two months ago, I'd say you were my favorite rookie ever. But damn bro stop trying to get people fired.");
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
