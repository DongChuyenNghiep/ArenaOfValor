
let SHEET_RANGE_E = 'A84:O95';

let FULL_URL_E = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_QUALIFIER}&range=${SHEET_RANGE_E}`;

fetch(FULL_URL_E)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    let dataBody = document.getElementById('table_fixture_E');

    for (let i = 0; i < data.table.rows.length; i++) {
      let rowData = data.table.rows[i].c;
      
      let match = document.createElement('h6')
      match.textContent = "Trận " + rowData[8].v;
      match.classList.add('match');
      dataBody.appendChild(match)


      // Create a container div for each row
      let rowDiv = document.createElement('div');
      rowDiv.classList.add('row1');

      // Create a team div to wrap the team logo and name
      let teamDiv1 = document.createElement('div');
      teamDiv1.classList.add('team');

      // Create an image element for the team logo
      let img1 = document.createElement('img');
      img1.classList.add('team-logo');
      img1.src = "/"+rowData[0].v; // Set the image source from the data
      img1.alt = rowData[1].v + ' Logo'; // Set the alt text based on the team name
      teamDiv1.appendChild(img1);

      let span1 = document.createElement('span');
      
      span1.classList.add('team-name');
      teamDiv1.appendChild(span1);

      // Append the team div to the row div
      rowDiv.appendChild(teamDiv1);

      // Create a score container div
      let scoreContainerDiv = document.createElement('div');
      scoreContainerDiv.classList.add('score-container');

      // Create a parent span to group score-left, 'gach', score-right, and winner
      let scoreSpan = document.createElement('span');
      scoreSpan.classList.add('score');

      let span2 = document.createElement('span');
      span2.textContent = rowData[3].v;
      span2.classList.add('score-left'); // Add the 'score-left' class

      let gachSpan = document.createElement('span');
      gachSpan.textContent = '-';
      gachSpan.classList.add('gach'); // Add the 'gach' class

      let span3 = document.createElement('span');
      span3.textContent = rowData[4].v;
      span3.classList.add('score-right'); // Add the 'score-right' class

      let winnerSpan = document.createElement('span');
      let loseSpan = document.createElement('span');
      winnerSpan.classList.add('winner');
      loseSpan.classList.add('loser');
      // Check for the winner condition

      // Create a team div to wrap the team name and logo
      let teamDiv2 = document.createElement('div');
      teamDiv2.classList.add('team');

      let span4 = document.createElement('span');
      
      span4.classList.add('team-name');
      teamDiv2.appendChild(span4);

      // Create an image element for the team logo
      let img2 = document.createElement('img');
      img2.classList.add('team-logo');
      img2.src = "/"+rowData[7].v; // Set the image source from the data
      img2.alt = rowData[6].v + ' Logo'; // Set the alt text based on the team name
      teamDiv2.appendChild(img2);

      function updateTextContent() {
        if (window.innerWidth > 768) {
          span1.textContent = rowData[1].v;
          span4.textContent = rowData[6].v;
        } else {
          span1.textContent = rowData[2].v;
          span4.textContent = rowData[5].v;
        }
      }
      // Initial setup based on window width
      updateTextContent();

      // Update text content on window resize
      window.addEventListener('resize', updateTextContent);
      if (parseInt(rowData[3].v) > parseInt(rowData[4].v)) {
        img2.classList.add('loser-darker');
        span4.classList.add('loser-darker');
        img1.classList.add('winner-brighter');
        span1.classList.add('winner-brighter');
        winnerSpan.textContent = '<'; // Set the text for winnerSpan
        loseSpan.textContent = '\u2009'; // Set the text for loseSpan
         // Add the 'winner' class
        scoreSpan.appendChild(winnerSpan);
        scoreSpan.appendChild(span2);
        scoreSpan.appendChild(gachSpan);
        scoreSpan.appendChild(span3);
        scoreSpan.appendChild(loseSpan)
        
      }

      else if (parseInt(rowData[3].v) < parseInt(rowData[4].v)) {
        img1.classList.add('loser-darker');
        span1.classList.add('loser-darker');
        img2.classList.add('winner-brighter');
        span4.classList.add('winner-brighter');
        winnerSpan.textContent = '>'; // Set the text for winnerSpan
        loseSpan.textContent = '\u2009'; // Set the text for loseSpan
        winnerSpan.classList.add('loser'); // Add the 'winner' class
        scoreSpan.appendChild(loseSpan)
        scoreSpan.appendChild(span2);
        scoreSpan.appendChild(gachSpan);
        scoreSpan.appendChild(span3);
        scoreSpan.appendChild(winnerSpan);
      } else {
        // No winner, just display the scores with 'gach' in the middle
        scoreSpan.appendChild(span2);
        scoreSpan.appendChild(gachSpan);
        scoreSpan.appendChild(span3);
      }

      scoreContainerDiv.appendChild(scoreSpan);
      rowDiv.appendChild(scoreContainerDiv);

      // Append the team div to the row div
      rowDiv.appendChild(teamDiv2);

      // Append the row div to the dataBody
      dataBody.appendChild(rowDiv);
    }
  });


