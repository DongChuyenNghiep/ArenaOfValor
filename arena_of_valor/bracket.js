let SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
let SHEET_TITLE = 'Sheet6';
let SHEET_RANGE_A_1 = 'A1:G8';

let FULL_URL_A = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_A_1}`;

fetch(FULL_URL_A)
    .then((res) => res.text())
    .then((data) => {
        // Parse the response data
        let jsonData = JSON.parse(data.substring(47).slice(0, -2));

        // Extract values from the response
        //Team name
        let valueA1 = jsonData.table.rows[0].c[0].v;
        let valueA2 = jsonData.table.rows[1].c[0].v;
        let valueA3 = jsonData.table.rows[2].c[0].v;
        let valueA4 = jsonData.table.rows[3].c[0].v;
        let valueA5 = jsonData.table.rows[4].c[0].v;
        let valueA6 = jsonData.table.rows[5].c[0].v;
        let valueA7 = jsonData.table.rows[6].c[0].v;
        let valueA8 = jsonData.table.rows[7].c[0].v;
        //score quarter-final
        let valueB1 = jsonData.table.rows[0].c[1].v;
        let valueB2 = jsonData.table.rows[1].c[1].v;
        let valueB3 = jsonData.table.rows[2].c[1].v;
        let valueB4 = jsonData.table.rows[3].c[1].v;
        let valueB5 = jsonData.table.rows[4].c[1].v;
        let valueB6 = jsonData.table.rows[5].c[1].v;
        let valueB7 = jsonData.table.rows[6].c[1].v;
        let valueB8 = jsonData.table.rows[7].c[1].v;
        //semi team
        let valueC1 = jsonData.table.rows[0].c[2].v;
        let valueC2 = jsonData.table.rows[2].c[2].v;
        let valueC3 = jsonData.table.rows[4].c[2].v;
        let valueC4 = jsonData.table.rows[6].c[2].v;
        //semi score
        let valueD1 = jsonData.table.rows[0].c[3].v;
        let valueD2 = jsonData.table.rows[2].c[3].v;
        let valueD3 = jsonData.table.rows[4].c[3].v;
        let valueD4 = jsonData.table.rows[6].c[3].v;
        //final name
        let valueE1 = jsonData.table.rows[0].c[4].v;
        let valueE2 = jsonData.table.rows[4].c[4].v;
        //final score
        let valueF1 = jsonData.table.rows[0].c[5].v;
        let valueF2 = jsonData.table.rows[4].c[5].v;
        
        document.getElementById('player1').textContent = valueA1;
        document.getElementById('player2').textContent = valueA2;
        document.getElementById('player3').textContent = valueA3;
        document.getElementById('player4').textContent = valueA4;
        document.getElementById('player5').textContent = valueA5;
        document.getElementById('player6').textContent = valueA6;
        document.getElementById('player7').textContent = valueA7;
        document.getElementById('player8').textContent = valueA8;

        document.getElementById('score1').textContent = valueB1;
        document.getElementById('score2').textContent = valueB2;
        document.getElementById('score3').textContent = valueB3;
        document.getElementById('score4').textContent = valueB4;
        document.getElementById('score5').textContent = valueB5;
        document.getElementById('score6').textContent = valueB6;
        document.getElementById('score7').textContent = valueB7;
        document.getElementById('score8').textContent = valueB8;

        document.getElementById('winner1').textContent = valueC1;
        document.getElementById('winner2').textContent = valueC2;
        document.getElementById('winner3').textContent = valueC3;
        document.getElementById('winner4').textContent = valueC4;

        document.getElementById('score-winner1').textContent = valueD1;
        document.getElementById('score-winner2').textContent = valueD2;
        document.getElementById('score-winner3').textContent = valueD3;
        document.getElementById('score-winner4').textContent = valueD4;

        document.getElementById('winner-champ1').textContent = valueE1;
        document.getElementById('winner-champ2').textContent = valueE2;
        document.getElementById('score-champ1').textContent = valueF1;
        document.getElementById('score-champ2').textContent = valueF2;

        var participantDiv1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score1').parentNode;
        var participantDiv2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score2').parentNode;
        var participantDiv3 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score3').parentNode;
        var participantDiv4 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score4').parentNode;
        var participantDiv5 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score5').parentNode;
        var participantDiv6 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score6').parentNode;
        var participantDiv7 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score7').parentNode;
        var participantDiv8 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score8').parentNode;

        var participantwinner1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner1').parentNode;
        var participantwinner2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner2').parentNode;
        var participantwinner3 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner3').parentNode;
        var participantwinner4 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #score-winner4').parentNode;
        
        var champion1 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #winner-champ1').parentNode;
        var champion2 = document.querySelector('.bracket .round .winners > div.matchups .matchup .participants .participant #winner-champ2').parentNode;
        // Check if score1 is greater than score2
        if (valueB1 > valueB2) {
          // Add the 'winner' class to the first div.participant
          participantDiv1.classList.add('winner');
        } else {
          // Add the 'winner' class to the second div.participant
          participantDiv2.classList.add('winner');
        }
        if (valueB3 > valueB4) {
            // Add the 'winner' class to the first div.participant
            participantDiv3.classList.add('winner');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv4.classList.add('winner');
          }
          if (valueB5 > valueB6) {
            // Add the 'winner' class to the first div.participant
            participantDiv5.classList.add('winner');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv6.classList.add('winner');
          }
          if (valueB7 > valueB8) {
            // Add the 'winner' class to the first div.participant
            participantDiv7.classList.add('winner');
          } else {
            // Add the 'winner' class to the second div.participant
            participantDiv8.classList.add('winner');
          }

          if (valueD1 > valueD2) {
            // Add the 'winner' class to the first div.participant
            participantwinner1.classList.add('winner');
          } else {
            // Add the 'winner' class to the second div.participant
            participantwinner2.classList.add('winner');
          }
          if (valueD3 > valueD4) {
            // Add the 'winner' class to the first div.participant
            participantwinner3.classList.add('winner');
          } else {
            // Add the 'winner' class to the second div.participant
            participantwinner4.classList.add('winner');
          }
          if(valueF1>valueF2){
            champion1.classList.add('winner');
          }else {
            // Add the 'winner' class to the second div.participant
            champion2.classList.add('winner');
          }

    })
    .catch((error) => console.error('Error fetching data:', error));
