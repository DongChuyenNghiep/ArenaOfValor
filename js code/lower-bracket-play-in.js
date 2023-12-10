let SHEET_RANGE_LOWER = 'A30:L33';

let FULL_URL_LOWER= `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_LOWER}`;

fetch(FULL_URL_LOWER)
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
          jsonData.table.rows[3]?.c[0]?.v ?? null

      ];
        //score quarter-final
        let valueB = [
        jsonData.table.rows[0]?.c[1]?.v ?? null,
        jsonData.table.rows[1]?.c[1]?.v ?? null,
        jsonData.table.rows[2]?.c[1]?.v ?? null,
        jsonData.table.rows[3]?.c[1]?.v ?? null,
        ];
        let valueC = [
        jsonData.table.rows[0]?.c[2]?.v ?? null,
        jsonData.table.rows[1]?.c[2]?.v ?? null,
        jsonData.table.rows[2]?.c[2]?.v ?? null,
        jsonData.table.rows[3]?.c[2]?.v ?? null,


      ];
        for (let i = 0; i < 4; i++) {
          let teamImageElement = document.getElementById("teamLower" + (i+1));
          let teamname = document.getElementById("team-lower-" + (i+1));
          let score_round_1 = document.getElementById("score-lower-" + (i+1));
          teamImageElement.src = "/"+valueA[i];
          teamname.textContent = valueB[i];
          score_round_1.textContent = valueC[i];
        }


        let valueD=[
        jsonData.table.rows[0]?.c[3]?.v ?? null,
        jsonData.table.rows[1]?.c[3]?.v ?? null,
        jsonData.table.rows[2]?.c[3]?.v ?? null,
        jsonData.table.rows[3]?.c[3]?.v ?? null,

        ];

        let valueE = [
        jsonData.table.rows[0]?.c[4]?.v ?? null,
        jsonData.table.rows[1]?.c[4]?.v ?? null,
        jsonData.table.rows[2]?.c[4]?.v ?? null,
        jsonData.table.rows[3]?.c[4]?.v ?? null,
        ];
        let valueF = [
          jsonData.table.rows[0]?.c[5]?.v ?? null,
          jsonData.table.rows[1]?.c[5]?.v ?? null,
          jsonData.table.rows[2]?.c[5]?.v ?? null,
          jsonData.table.rows[3]?.c[5]?.v ?? null,
        ];
          for (let i = 0; i < 4; i++) {
            let teamImageElement = document.getElementById("teamSemilower" + (i+1));
            let teamname = document.getElementById("semi-lower-" + (i+1));
            let score_round_16 = document.getElementById("semi-lowerscore-" + (i+1));
            teamImageElement.src = "/"+valueD[i];
            teamname.textContent = valueE[i];
            score_round_16.textContent = valueF[i];
          }

        let valueG = [
          jsonData.table.rows[0]?.c[6]?.v ?? null,
          jsonData.table.rows[2]?.c[6]?.v ?? null,

        ];
        let valueH = [
          jsonData.table.rows[0]?.c[7]?.v ?? null,
          jsonData.table.rows[2]?.c[7]?.v ?? null,

        ];
        let valueI = [
          jsonData.table.rows[0]?.c[8]?.v ?? null,
          jsonData.table.rows[2]?.c[8]?.v ?? null,

        ];

        for (let j = 0; j < 2; j++) {
          let teamImageElement = document.getElementById("teamFinallower" + (j+1));
          let teamname = document.getElementById("final-lower-" + (j+1));
          let score_round_16 = document.getElementById("final-lowerscore-" + (j+1));
          teamImageElement.src = "/"+valueG[j];
          teamname.textContent = valueH[j];
          score_round_16.textContent = valueI[j];
        }

        let valueJ = [
          jsonData.table.rows[0]?.c[9]?.v ?? null,
          jsonData.table.rows[2]?.c[9]?.v  ?? null,
  
          ];
          let valueK = [
            jsonData.table.rows[0]?.c[10]?.v  ?? null,
            jsonData.table.rows[2]?.c[10]?.v  ?? null,
  
          ];
          let valueL = [
            jsonData.table.rows[0]?.c[11]?.v  ?? null,
            jsonData.table.rows[2]?.c[11]?.v  ?? null,
  
          ];
          for (let j = 0; j < 2; j++) {
            let teamImageElement = document.getElementById("advance-team-" + (j+1));
            let teamname = document.getElementById("teamadvance-" + (j+1));
            let score_round_16 = document.getElementById("score-advance-" + (j+1));
            teamImageElement.src = "/"+valueJ[j];
            teamname.textContent = valueK[j];
            score_round_16.textContent = valueL[j];
          }


        var participantDiv1 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #score-lower-1').parentNode;
        var participantDiv2 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #score-lower-2').parentNode;
        var participantDiv3 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #score-lower-3').parentNode;
        var participantDiv4 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #score-lower-4').parentNode;
        var participantDiv5 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #semi-lowerscore-1').parentNode;
        var participantDiv6 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #semi-lowerscore-2').parentNode;
        var participantDiv7 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #semi-lowerscore-3').parentNode;
        var participantDiv8 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #semi-lowerscore-4').parentNode;
        var participantDiv9 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #final-lowerscore-1').parentNode;
        var participantDiv10 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #final-lowerscore-2').parentNode;
        var participantDiv11 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #score-advance-1').parentNode;
        var participantDiv12 = document.querySelector('.loser-bracket .round .winners > div.matchups .matchup .participants .participant #score-advance-2').parentNode;
        
    
        
        
        //Check if score1 is greater than score2
        if (valueC[0] > valueC[1]) {
          // Add the 'winner' class to the first div.participant
          participantDiv1.classList.add('winner');
          participantDiv2.classList.add('eliminate');
        } else if (valueC[0] < valueC[1])  {
          // Add the 'winner' class to the second div.participant
          participantDiv2.classList.add('winner');
          participantDiv1.classList.add('eliminate');
        }
        if (valueC[2] > valueC[3]) {
            // Add the 'winner' class to the first div.participant
            participantDiv3.classList.add('winner');
            participantDiv4.classList.add('eliminate');
          } else if (valueC[2] < valueC[3]) {
            // Add the 'winner' class to the second div.participant
            participantDiv4.classList.add('winner');
            participantDiv3.classList.add('eliminate');
          }
          
          if (valueF[0] > valueF[1]) {
            // Add the 'winner' class to the first div.participant
            participantDiv5.classList.add('winner');
            participantDiv6.classList.add('eliminate');
          } else if (valueF[0] < valueF[1]) {
            // Add the 'winner' class to the second div.participant
            participantDiv5.classList.add('eliminate');
            participantDiv6.classList.add('winner');
          }
          if (valueF[2] > valueF[3]) {
            // Add the 'winner' class to the first div.participant
            participantDiv7.classList.add('winner');
            participantDiv8.classList.add('eliminate');
          } else if (valueF[2] < valueF[3]) {
            // Add the 'winner' class to the second div.participant
            participantDiv7.classList.add('eliminate');
            participantDiv8.classList.add('winner');
          }
          if (valueI[0] > valueI[1]) {
            // Add the 'winner' class to the first div.participant
            participantDiv9.classList.add('winner');
            participantDiv10.classList.add('eliminate');
          } else if (valueI[0] < valueI[1]){
            // Add the 'winner' class to the second div.participant
            participantDiv9.classList.add('eliminate');
            participantDiv10.classList.add('winner');
          }
          if (valueL[0] > valueL[1]) {
            // Add the 'winner' class to the first div.participant
            participantDiv11.classList.add('advance');
            participantDiv12.classList.add('eliminate');
          } else if (valueL[0] < valueL[1]){
            // Add the 'winner' class to the second div.participant
            participantDiv11.classList.add('eliminate');
            participantDiv12.classList.add('advance');
          }

        
    })