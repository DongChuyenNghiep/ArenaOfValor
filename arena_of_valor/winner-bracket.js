let SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
let SHEET_TITLE = 'Sheet6';
let SHEET_RANGE_WINNER = 'A20:I27';

let FULL_URL_WINNER = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_WINNER}`;

fetch(FULL_URL_WINNER)
    .then((res) => res.text())
    .then((data) => {
        // Parse the response data
        let jsonData = JSON.parse(data.substring(47).slice(0, -2));

        // Extract values from the response
        //Logo round 16
        let valueA = [
          jsonData.table.rows[0]?.c[0]?.v ?? null,
          jsonData.table.rows[1]?.c[0]?.v ?? null,
          jsonData.table.rows[2]?.c[0]?.v ?? null,
          jsonData.table.rows[3]?.c[0]?.v ?? null,
          jsonData.table.rows[4]?.c[0]?.v ?? null,
          jsonData.table.rows[5]?.c[0]?.v ?? null,
          jsonData.table.rows[6]?.c[0]?.v ?? null,
          jsonData.table.rows[7]?.c[0]?.v ?? null

      ];
        //score quarter-final
        let valueB = [
        jsonData.table.rows[0]?.c[1]?.v ?? null,
        jsonData.table.rows[1]?.c[1]?.v ?? null,
        jsonData.table.rows[2]?.c[1]?.v ?? null,
        jsonData.table.rows[3]?.c[1]?.v ?? null,
        jsonData.table.rows[4]?.c[1]?.v ?? null,
        jsonData.table.rows[5]?.c[1]?.v ?? null,
        jsonData.table.rows[6]?.c[1]?.v ?? null,
        jsonData.table.rows[7]?.c[1]?.v ?? null
        ];
        let valueC = [
        jsonData.table.rows[0]?.c[2]?.v ?? null,
        jsonData.table.rows[1]?.c[2]?.v ?? null,
        jsonData.table.rows[2]?.c[2]?.v ?? null,
        jsonData.table.rows[3]?.c[2]?.v ?? null,
        jsonData.table.rows[4]?.c[2]?.v ?? null,
        jsonData.table.rows[5]?.c[2]?.v ?? null,
        jsonData.table.rows[6]?.c[2]?.v ?? null,
        jsonData.table.rows[7]?.c[2]?.v ?? null

      ];
        for (let i = 0; i < 8; i++) {
          let teamImageElement = document.getElementById("team" + (i+1));
          let teamname = document.getElementById("team-" + (i+1));
          let score_round_1 = document.getElementById("score-" + (i+1));
          teamImageElement.src = "/"+valueA[i];
          teamname.textContent = valueB[i];
          score_round_1.textContent = valueC[i];
        }


        let valueD = [
          jsonData.table.rows[0]?.c[3]?.v ?? null,
          jsonData.table.rows[2]?.c[3]?.v ?? null,
          jsonData.table.rows[4]?.c[3]?.v ?? null,
          jsonData.table.rows[6]?.c[3]?.v ?? null,
      ];

        let valueE = [
        jsonData.table.rows[0]?.c[4]?.v ?? null,
        jsonData.table.rows[2]?.c[4]?.v ?? null,
        jsonData.table.rows[4]?.c[4]?.v ?? null,
        jsonData.table.rows[6]?.c[4]?.v ?? null, 
        ];
        let valueF = [
          jsonData.table.rows[0]?.c[5]?.v ?? null,
          jsonData.table.rows[2]?.c[5]?.v ?? null,
          jsonData.table.rows[4]?.c[5]?.v ?? null,
          jsonData.table.rows[6]?.c[5]?.v ?? null,
        ];
          for (let i = 0; i < 4; i++) {
            let teamImageElement = document.getElementById("teamWinner" + (i+1));
            let teamname = document.getElementById("teamWinner-" + (i+1));
            let score_round_16 = document.getElementById("teamwinner-" + (i+1));
            teamImageElement.src = "/"+valueD[i];
            teamname.textContent = valueE[i];
            score_round_16.textContent = valueF[i];
          }

        let valueG = [
          jsonData.table.rows[0]?.c[6]?.v ?? null,
          jsonData.table.rows[4]?.c[6]?.v ?? null,

        ];
        let valueH = [
          jsonData.table.rows[0]?.c[7]?.v ?? null,
          jsonData.table.rows[4]?.c[7]?.v ?? null,

        ];
        let valueI = [
          jsonData.table.rows[0]?.c[8]?.v ?? null,
          jsonData.table.rows[4]?.c[8]?.v ?? null,

        ];

        for (let j = 0; j < 2; j++) {
          let teamImageElement = document.getElementById("teamfinal" + (j+1));
          let teamname = document.getElementById("teamfinal-" + (j+1));
          let score_round_16 = document.getElementById("score-final-" + (j+1));
          teamImageElement.src = "/"+valueG[j];
          teamname.textContent = valueH[j];
          score_round_16.textContent = valueI[j];
        }


        


        var participantDiv1 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-1').parentNode;
        var participantDiv2 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-2').parentNode;
        var participantDiv3 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-3').parentNode;
        var participantDiv4 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-4').parentNode;
        var participantDiv5 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-5').parentNode;
        var participantDiv6 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-6').parentNode;
        var participantDiv7 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-7').parentNode;
        var participantDiv8 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-8').parentNode;
        var participantDiv9 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #teamwinner-1').parentNode;
        var participantDiv10 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #teamwinner-2').parentNode;
        var participantDiv11 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #teamwinner-3').parentNode;
        var participantDiv12 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #teamwinner-4').parentNode;
        var participantDiv13 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-final-1').parentNode;
        var participantDiv14 = document.querySelector('.winner-bracket .round .winners > div.matchups .matchup .participants .participant #score-final-2').parentNode;
    
        
        
        //Check if score1 is greater than score2
        if (valueC[0] > valueC[1]) {
          // Add the 'winner' class to the first div.participant
          participantDiv1.classList.add('winner');
          participantDiv2.classList.add('loser');

        } else if (valueC[0] < valueC[1]){
          // Add the 'winner' class to the second div.participant
          participantDiv2.classList.add('winner');
          participantDiv1.classList.add('loser');

        }
        if (valueC[2] > valueC[3]) {
            // Add the 'winner' class to the first div.participant
            participantDiv3.classList.add('winner');
            participantDiv4.classList.add('loser');

          } else if(valueC[2] < valueC[3]) {
            // Add the 'winner' class to the second div.participant
            participantDiv4.classList.add('winner');
            participantDiv3.classList.add('loser');

          }
          if (valueC[4] > valueC[5]) {
            // Add the 'winner' class to the first div.participant
            participantDiv5.classList.add('winner');
            participantDiv6.classList.add('loser');
          } else if (valueC[4] < valueC[5]){
            // Add the 'winner' class to the second div.participant
            participantDiv6.classList.add('winner');
            participantDiv5.classList.add('loser');
          }
          if (valueC[6] > valueC[7]) {
            // Add the 'winner' class to the first div.participant
            participantDiv7.classList.add('winner');
            participantDiv8.classList.add('loser');
          } else if (valueC[6] < valueC[7]) {
            // Add the 'winner' class to the second div.participant
            participantDiv7.classList.add('loser');
            participantDiv8.classList.add('winner');
          }
          if (valueF[0] > valueF[1]) {
            // Add the 'winner' class to the first div.participant
            participantDiv9.classList.add('winner');
            participantDiv10.classList.add('loser');
          } else if (valueF[0] < valueF[1]) {
            // Add the 'winner' class to the second div.participant
            participantDiv9.classList.add('loser');
            participantDiv10.classList.add('winner');
          }
          if (valueF[2] > valueF[3]) {
            // Add the 'winner' class to the first div.participant
            participantDiv11.classList.add('winner');
            participantDiv12.classList.add('loser');
          } else if (valueF[2] < valueF[3]) {
            // Add the 'winner' class to the second div.participant
            participantDiv11.classList.add('loser');
            participantDiv12.classList.add('winner');
          }

          if (valueI[0] > valueI[1]) {
            // Add the 'winner' class to the first div.participant
            participantDiv13.classList.add('advance');
            participantDiv14.classList.add('loser');
          } else if (valueI[0] < valueI[1]) {
            // Add the 'winner' class to the second div.participant
            participantDiv13.classList.add('loser');
            participantDiv14.classList.add('advance');
          }

        
    })
    
