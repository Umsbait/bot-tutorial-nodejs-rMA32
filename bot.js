var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/RTFM/i; botRegexMolly = /^\/google/; botRegexPercocet = /^\/internetconfig/; botRegeWeed = /^\/classchecks/; botRegexSalt = /^\/directory/;  
      botRegexAd=/^\/script/;botRegexGTA = /^\\schedule/; botRegeHeheXD = /^\/confused/; botODB = /(.*\s+)(.*odb)(\s+.*)/i;
      botRegexSb = /^\/tickets/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/help/;
      botRegexSiege = /^\/siege/; botRegexB = /^\/schedule/; botPdrive = /^\/pdrive/; botFaculty = /^\/faculty/; botInventory = /^\/inventory/;
      botSOS = /^\/sos/; botRegexP = /^\/cashme/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7';
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd'; google1 = 'http://bfy.tw/AoZK'; google2 = 'http://bfy.tw/3won';
      google3 = 'http://bfy.tw/AobV'; botSTVote = /^\/stvote/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
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
    else if(request.text && botRegexPercocet.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/a/bus.miami.edu/file/d/0B5JhXcgmXyMZQU9idUpxQVhTRXc/view?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage(" Steve- 8-5449 | Erick 8-2416 | Eliot 8-3606 | Facilities 8-8282 | May Peralta 8-5938 | Events (Maria Otero) 8-2362 | Blackboard 8-3949 |");
    this.res.end();
  } 
  else if(request.text && botRegexMolly.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(google1);
    else if(Math.random() >0.6)
      postMessage(google3)
    else
      postMessage(google2);
    this.res.end();
  }
  else if(request.text && botPdrive.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Windows: \\\\10.39.5.237\\servicedesk$\\p | Mac: smb://10.39.5.237/servicedesk$/p");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/open?id=1uXQnVasUe-tytr8ZPBnv4DhEljoIRKQaXFLWkrDzRw0");
    this.res.end();
  }
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://67.media.tumblr.com/e5fb1821fa279144ad23fc8db540930e/tumblr_n2f0uczU251ru5h8co1_500.gif");
    this.res.end();
  } 
  else if(request.text && botRegeHeheXD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/676x382.jpeg.cc9dcc226fd94a38a536f7bdfe2e2ae7.large");
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
  else if(request.text && botRegeWeed.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://tinyurl.com/SBA-ClassCheck");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("current commands: /stvote /tickets /classchecks /script /google /rtfm /inventory /sos /cashme /confused /schedule /directory /cool guy /faculty /shrug");
    this.res.end();
  }
  else if(request.text && botInventory.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/a/bus.miami.edu/forms/d/1PeNKgSWNm7BFzOUyDP1sVpACvYhps-slhMFcCKvmzaM/viewform");
    this.res.end();
  }
   else if(request.text && botRegexB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://tinyurl.com/Schedule-SD");
    this.res.end();
  }
  else if(request.text && botSOS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/900x900.png.9c279d35ff884a07bad4f225ef6ce8bb");
    this.res.end();
  }
  else if(request.text && botSTVote.test(request.text)){
    this.res.writeHead(200);
    postMessage("https://tinyurl.com/STVoting");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1126x498.png.ab7ca4f5d1f949cd81bbea1f5f36ffd6.large");
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
