let SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
let SHEET_TITLE = 'Sheet6';
let SHEET_RANGE_A_1 = 'A1:Z16';

let FULL_URL_A = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_A_1}`;

fetch(FULL_URL_A)
    .then((res) => res.text())
    .then((data) => {
        // Parse the response data
        let jsonData = JSON.parse(data.substring(47).slice(0, -2));

        // Extract values from the response
        //Logo round 16
        let valueA = [
          jsonData.table.rows[0].c[0].v,
          jsonData.table.rows[1].c[0].v,
          jsonData.table.rows[2].c[0].v,
          jsonData.table.rows[3].c[0].v,
          jsonData.table.rows[4].c[0].v,
          jsonData.table.rows[5].c[0].v,
          jsonData.table.rows[6].c[0].v,
          jsonData.table.rows[7].c[0].v,
          jsonData.table.rows[8].c[0].v,
          jsonData.table.rows[9].c[0].v,
          jsonData.table.rows[10].c[0].v,
          jsonData.table.rows[11].c[0].v,
          jsonData.table.rows[12].c[0].v,
          jsonData.table.rows[13].c[0].v,
          jsonData.table.rows[14].c[0].v,
          jsonData.table.rows[15].c[0].v
      ];
        //score quarter-final
        let valueB = [
        jsonData.table.rows[0].c[1].v,
        jsonData.table.rows[1].c[1].v,
        jsonData.table.rows[2].c[1].v,
        jsonData.table.rows[3].c[1].v,
        jsonData.table.rows[4].c[1].v,
        jsonData.table.rows[5].c[1].v,
        jsonData.table.rows[6].c[1].v,
        jsonData.table.rows[7].c[1].v,
        jsonData.table.rows[8].c[1].v,
        jsonData.table.rows[9].c[1].v,
        jsonData.table.rows[10].c[1].v,
        jsonData.table.rows[11].c[1].v,
        jsonData.table.rows[12].c[1].v,
        jsonData.table.rows[13].c[1].v,
        jsonData.table.rows[14].c[1].v,
        jsonData.table.rows[15].c[1].v
        ];
        //semi team
        let valueC = [
        jsonData.table.rows[0].c[2].v,
        jsonData.table.rows[1].c[2].v,
        jsonData.table.rows[2].c[2].v,
        jsonData.table.rows[3].c[2].v,
        jsonData.table.rows[4].c[2].v,
        jsonData.table.rows[5].c[2].v,
        jsonData.table.rows[6].c[2].v,
        jsonData.table.rows[7].c[2].v,
        jsonData.table.rows[8].c[2].v,
        jsonData.table.rows[9].c[2].v,
        jsonData.table.rows[10].c[2].v,
        jsonData.table.rows[11].c[2].v,
        jsonData.table.rows[12].c[2].v,
        jsonData.table.rows[13].c[2].v,
        jsonData.table.rows[14].c[2].v,
        jsonData.table.rows[15].c[2].v,
      ];
        for (let i = 0; i < 16; i++) {
          let teamImageElement = document.getElementById("teamImage" + (i+1));
          let teamname = document.getElementById("team" + (i+1));
          let score_round_16 = document.getElementById("score" + (i+1));
          score_round_16.textContent = valueC[i];
          teamImageElement.src = valueA[i];
          teamname.textContent = valueB[i];
        }


        let valueD=[
        jsonData.table.rows[0].c[3].v,
        jsonData.table.rows[2].c[3].v,
        jsonData.table.rows[4].c[3].v,
        jsonData.table.rows[6].c[3].v,
        jsonData.table.rows[8].c[3].v,
        jsonData.table.rows[10].c[3].v,
        jsonData.table.rows[12].c[3].v,
        jsonData.table.rows[14].c[3].v
        ];

        let valueE = [
        jsonData.table.rows[0].c[4].v,
        jsonData.table.rows[2].c[4].v,
        jsonData.table.rows[4].c[4].v,
        jsonData.table.rows[6].c[4].v,
        jsonData.table.rows[8].c[4].v,
        jsonData.table.rows[10].c[4].v,
        jsonData.table.rows[12].c[4].v,
        jsonData.table.rows[14].c[4].v
        ];
        let valueF = [
          jsonData.table.rows[0].c[5].v,
          jsonData.table.rows[2].c[5].v,
          jsonData.table.rows[4].c[5].v,
          jsonData.table.rows[6].c[5].v,
          jsonData.table.rows[8].c[5].v,
          jsonData.table.rows[10].c[5].v,
          jsonData.table.rows[12].c[5].v,
          jsonData.table.rows[14].c[5].v
          ];
          for (let i = 0; i < 8; i++) {
            let teamImageElement = document.getElementById("teamQuater" + (i+1));
            let teamname = document.getElementById("team-quarter-" + (i+1));
            let score_round_16 = document.getElementById("quarter-score-" + (i+1));
            teamImageElement.src = valueD[i];
            teamname.textContent = valueE[i];
            score_round_16.textContent = valueF[i];
          }

        let valueG = [
          jsonData.table.rows[0].c[6].v,
          jsonData.table.rows[4].c[6].v,
          jsonData.table.rows[4].c[6].v,
          jsonData.table.rows[8].c[6].v,
        ];
        let valueH = [
          jsonData.table.rows[0].c[7].v,
          jsonData.table.rows[4].c[7].v,
          jsonData.table.rows[4].c[7].v,
          jsonData.table.rows[8].c[7].v,
        ];
        let valueI = [
          jsonData.table.rows[0].c[8].v,
          jsonData.table.rows[4].c[8].v,
          jsonData.table.rows[4].c[8].v,
          jsonData.table.rows[8].c[8].v,
        ];

        for (let j = 0; j < 4; j++) {
          let teamImageElement = document.getElementById("teamSemi" + (j+1));
          let teamname = document.getElementById("semi-team-" + (j+1));
          let score_round_16 = document.getElementById("semi-score-" + (j+1));
          teamImageElement.src = valueG[j];
          teamname.textContent = valueH[j];
          score_round_16.textContent = valueI[j];
        }


        let valueJ = [
          jsonData.table.rows[0].c[9].v,
          jsonData.table.rows[8].c[9].v
        ];
        let valueK = [
          jsonData.table.rows[0].c[10].v,
          jsonData.table.rows[8].c[10].v
        ];
        let valueL = [
          jsonData.table.rows[0].c[11].v,
          jsonData.table.rows[8].c[11].v
        ]
        for (let i = 0; i<2;i++){
          let teamImageElement = document.getElementById("teamfinal" + (i+1));
          let teamname = document.getElementById("teamfinal-" + (i+1));
          let score_final = document.getElementById("score-champ-" + (i+1));
          teamImageElement.src = valueJ[i];
          teamname.textContent = valueK[i];
          score_final.textContent = valueL[i];

        }
        //document.getElementById('winner1').textContent = valueC1;
        //document.getElementById('winner2').textContent = valueC2;
        //document.getElementById('winner3').textContent = valueC3;
       // document.getElementById('winner4').textContent = valueC4;

        //document.getElementById('score-winner1').textContent = valueD1;
        //document.getElementById('score-winner2').textContent = valueD2;
        //document.getElementById('score-winner3').textContent = valueD3;
        //document.getElementById('score-winner4').textContent = valueD4;

        //document.getElementById('winner-champ1').textContent = valueE1;
        //document.getElementById('winner-champ2').textContent = valueE2;
        //document.getElementById('score-champ1').textContent = valueF1;
        //document.getElementById('score-champ2').textContent = valueF2;

        //var participantDiv1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score1').parentNode;
        //var participantDiv2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score2').parentNode;
        //var participantDiv3 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score3').parentNode;
        //var participantDiv4 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score4').parentNode;
        //var participantDiv5 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score5').parentNode;
        //var participantDiv6 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score6').parentNode;
        //var participantDiv7 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score7').parentNode;
        //var participantDiv8 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score8').parentNode;

        //var participantwinner1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner1').parentNode;
        //var participantwinner2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner2').parentNode;
        //var participantwinner3 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner3').parentNode;
        //var participantwinner4 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner4').parentNode;
        
        //var champion1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #winner-champ1').parentNode;
        //var champion2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #winner-champ2').parentNode;
        // Check if score1 is greater than score2
        //if (valueB1 > valueB2) {
          // Add the 'winner' class to the first div.participant
          //participantDiv1.classList.add('winner');
        //} else {
          // Add the 'winner' class to the second div.participant
          //participantDiv2.classList.add('winner');
        //}
        //if (valueB3 > valueB4) {
            // Add the 'winner' class to the first div.participant
            //participantDiv3.classList.add('winner');
         // } else {
            // Add the 'winner' class to the second div.participant
          //  participantDiv4.classList.add('winner');
          //}
          //if (valueB5 > valueB6) {
            // Add the 'winner' class to the first div.participant
          //  participantDiv5.classList.add('winner');
         // } else {
            // Add the 'winner' class to the second div.participant
          //  participantDiv6.classList.add('winner');
          //}
          //if (valueB7 > valueB8) {
            // Add the 'winner' class to the first div.participant
          //  participantDiv7.classList.add('winner');
          //} else {
            // Add the 'winner' class to the second div.participant
          //  participantDiv8.classList.add('winner');
          //}

          //if (valueD1 > valueD2) {
            // Add the 'winner' class to the first div.participant
          //  participantwinner1.classList.add('winner');
          //} else {
            // Add the 'winner' class to the second div.participant
          ///  participantwinner2.classList.add('winner');
          //}
          //if (valueD3 > valueD4) {
            // Add the 'winner' class to the first div.participant
           // participantwinner3.classList.add('winner');
          //} else {
            // Add the 'winner' class to the second div.participant
          //  participantwinner4.classList.add('winner');
         // }
          //if(valueF1>valueF2){
          //  champion1.classList.add('winner');
          //}else {
            // Add the 'winner' class to the second div.participant
           // champion2.classList.add('winner');
         // }

    })
    
