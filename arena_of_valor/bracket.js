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
          jsonData.table.rows[8].c[6].v,
          jsonData.table.rows[12].c[6].v,
        ];
        let valueH = [
          jsonData.table.rows[0].c[7].v,
          jsonData.table.rows[4].c[7].v,
          jsonData.table.rows[8].c[7].v,
          jsonData.table.rows[12].c[7].v,
        ];
        let valueI = [
          jsonData.table.rows[0].c[8].v,
          jsonData.table.rows[4].c[8].v,
          jsonData.table.rows[8].c[8].v,
          jsonData.table.rows[12].c[8].v,
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


        var participantDiv1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score1').parentNode;
        var participantDiv2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score2').parentNode;
        var participantDiv3 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score3').parentNode;
        var participantDiv4 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score4').parentNode;
        var participantDiv5 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score5').parentNode;
        var participantDiv6 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score6').parentNode;
        var participantDiv7 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score7').parentNode;
        var participantDiv8 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score8').parentNode;
        var participantDiv9 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score9').parentNode;
        var participantDiv10 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score10').parentNode;
        var participantDiv11 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score11').parentNode;
        var participantDiv12 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score12').parentNode;
        var participantDiv13 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score13').parentNode;
        var participantDiv14 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score14').parentNode;
        var participantDiv15 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score15').parentNode;
        var participantDiv16 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score16').parentNode;
    
        
        
        //Check if score1 is greater than score2
        if (valueC[0] > valueC[1]) {
          // Add the 'winner' class to the first div.participant
          participantDiv1.classList.add('winner');
          participantDiv2.classList.add('loser');
        } else {
          // Add the 'winner' class to the second div.participant
          participantDiv2.classList.add('winner');
          participantDiv1.classList.add('loser');
        }
        if (valueC[2] > valueC[3]) {
            // Add the 'winner' class to the first div.participant
            participantDiv3.classList.add('winner');
            participantDiv4.classList.add('loser');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv4.classList.add('winner');
            participantDiv3.classList.add('loser');
          }
          if (valueC[4] > valueC[5]) {
            // Add the 'winner' class to the first div.participant
            participantDiv5.classList.add('winner');
            participantDiv6.classList.add('loser');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv6.classList.add('winner');
            participantDiv5.classList.add('loser');
          }
          if (valueC[6] > valueC[7]) {
            // Add the 'winner' class to the first div.participant
            participantDiv7.classList.add('winner');
            participantDiv8.classList.add('loser');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv7.classList.add('loser');
            participantDiv8.classList.add('winner');
          }

          if (valueC[8] > valueC[9]) {
            // Add the 'winner' class to the first div.participant
            participantDiv9.classList.add('winner');
            participantDiv10.classList.add('loser');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv9.classList.add('loser');
            participantDiv10.classList.add('winner');
          }
          if (valueC[10] > valueC[11]) {
            // Add the 'winner' class to the first div.participant
            participantDiv11.classList.add('winner');
            participantDiv12.classList.add('loser');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv11.classList.add('loser');
            participantDiv12.classList.add('winner');
          }
          if(valueC[12] > valueC[13]){
            participantDiv13.classList.add('winner');
            participantDiv14.classList.add('loser');
          }else {
            // Add the 'winner' class to the second div.participant
            participantDiv13.classList.add('loser');
            participantDiv14.classList.add('winner');
          }
          if(valueC[14] > valueC[15]){
            participantDiv15.classList.add('winner');
            participantDiv16.classList.add('loser');
          }else {
            // Add the 'winner' class to the second div.participant
            participantDiv15.classList.add('loser');
            participantDiv16.classList.add('winner');
          }
        var participantQuater1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-1').parentNode;
        var participantQuater2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-2').parentNode;
        var participantQuater3 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-3').parentNode;
        var participantQuater4 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-4').parentNode;
        var participantQuater5 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-5').parentNode;
        var participantQuater6 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-6').parentNode;
        var participantQuater7 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-7').parentNode;
        var participantQuater8 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #quarter-score-8').parentNode;

          if(valueF[0]>valueF[1]){
            participantQuater1.classList.add('winner')
            participantQuater2.classList.add('loser')
          }
          else{
            participantQuater1.classList.add('loser')
            participantQuater2.classList.add('winner')
          }
          if(valueF[2]>valueF[3]){
            participantQuater3.classList.add('winner')
            participantQuater4.classList.add('loser')
          }
          else{
            participantQuater3.classList.add('loser')
            participantQuater4.classList.add('winner')
          }
          if(valueF[4]>valueF[5]){
            participantQuater5.classList.add('winner')
            participantQuater6.classList.add('loser')
          }
          else{
            participantQuater5.classList.add('loser')
            participantQuater6.classList.add('winner')
          }
          if(valueF[6]>valueF[7]){
            participantQuater7.classList.add('winner')
            participantQuater8.classList.add('loser')
          }
          else{
            participantQuater7.classList.add('loser')
            participantQuater8.classList.add('winner')
          }
        var participantSemi1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #semi-score-1').parentNode;
        var participantSemi2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #semi-score-2').parentNode;
        var participantSemi3 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #semi-score-3').parentNode;
        var participantSemi4 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #semi-score-4').parentNode;
        if (valueI[0]>valueI[1]){
          participantSemi1.classList.add('winner');
          participantSemi2.classList.add('loser');
        }
        else{
          participantSemi1.classList.add('loser');
          participantSemi2.classList.add('winner');
        }
        if (valueI[2]>valueI[3]){
          participantSemi3.classList.add('winner');
          participantSemi4.classList.add('loser');
        }
        else{
          participantSemi3.classList.add('loser');
          participantSemi4.classList.add('winner');
        }
        var participantFinal1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-champ-1').parentNode;
        var participantFinal2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-champ-2').parentNode;
        if (valueL[0] > valueL[1]){
          participantFinal1.classList.add('winner');
          participantFinal2.classList.add('loser');
        }else{
          participantFinal1.classList.add('loser');
          participantFinal2.classList.add('winner');
        }
    })
    
