function show(){
  const showWordsElements = document.querySelectorAll('.showWords');
  const wordBoxElements = document.querySelectorAll('.wordBox1');
  const isBoxVisible = Array.from({ length: showWordsElements.length }).fill(false);

  showWordsElements.forEach((showWords, index) => {
      showWords.addEventListener('click', function (e) {
          e.preventDefault();

          if (isBoxVisible[index]) {
              wordBoxElements[index].style.display = 'none'; // Hide the box
          } else {
              wordBoxElements[index].style.display = 'block'; // Show the box
          }

          isBoxVisible[index] = !isBoxVisible[index]; // Toggle the state
      });
  });
}


let SHEET_TITLE_QUALIFIER = 'Fixture';
let SHEET_RANGE_A = 'A4:Z15';

let FULL_URL_A_1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_QUALIFIER}&range=${SHEET_RANGE_A}`;

fetch(FULL_URL_A_1)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    let dataBody = document.getElementById('table_fixture_A');

    for (let i = 0; i < data.table.rows.length; i++) {
      let rowData = data.table.rows[i].c;
      let link = document.createElement('a');
      link.href = '#';
      link.classList.add('showWords')
      

      let rowDiv = document.createElement('div');
      rowDiv.classList.add('row2');
      // Create a container div for each row
      let rowDiv1 = document.createElement('div');
      rowDiv1.classList.add('row1');

      // Create a team div to wrap the team logo and name
      let teamDiv1 = document.createElement('div');
      teamDiv1.classList.add('team');

      // Create an image element for the team logo
      let img1 = document.createElement('img');
      img1.classList.add('team-logo');
      img1.src = rowData[0].v; // Set the image source from the data
      img1.alt = rowData[1].v + ' Logo'; // Set the alt text based on the team name
      teamDiv1.appendChild(img1);
      let span1 = document.createElement('span');
      span1.classList.add('team-name');
      teamDiv1.appendChild(span1);
      rowDiv1.appendChild(teamDiv1);



      // Append the team div to the row div


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
      rowDiv1.appendChild(teamDiv2);

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
      // Create an image element for the team logo
      let img2 = document.createElement('img');
      img2.classList.add('team-logo');
      img2.src = +rowData[7].v; // Set the image source from the data
      img2.alt = rowData[6].v + ' Logo'; // Set the alt text based on the team name
      teamDiv2.appendChild(img2);

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
      rowDiv1.appendChild(scoreContainerDiv);
      
      
      //create score info breakdown
      let score_break_down = document.createElement('div');
      score_break_down.classList.add('wordBox1');
      let team_left = document.createElement('div');
      team_left.classList.add ('team-left');
      let team1 = document.createElement('p');
      team1.classList.add('team-name');
      team1.textContent = rowData[1].v;
      let table_left = document.createElement('table');
      table_left.classList.add('team1');
      let thead_left = document.createElement('thead');
      let th_thead_left1 = document.createElement('th');
      th_thead_left1.classList.add("first-col","sticky-col");
      th_thead_left1.textContent = 'Tên thành viên';
      let th_thead_left2 = document.createElement('th');
      th_thead_left2.textContent = 'Kill';
      let th_thead_left3 = document.createElement('th');
      th_thead_left3.textContent = 'Death';
      let th_thead_left4 = document.createElement('th');
      th_thead_left4.textContent = 'Assist';
      let th_thead_left5 = document.createElement('th');
      th_thead_left5.textContent = 'KDA';
      let th_thead_left6 = document.createElement('th');
      th_thead_left6.textContent = 'Damage';
      let tbody_left = document.createElement('tbody');
      tbody_left.id = `team-left-${i+1}`;
      let tr_table_left = document.createElement('tr');
      tr_table_left.classList.add('title');

      let team_right = document.createElement('div');
      team_right.classList.add ('team-right');
      let team2 = document.createElement('p');
      team2.classList.add('team-name');
      team2.textContent = rowData[6].v;
      let table_right = document.createElement('table');
      table_right.classList.add('team2');
      let thead_right = document.createElement('thead');
      let th_thead_right1 = document.createElement('th');
      th_thead_right1.classList.add("first-col");
      th_thead_right1.textContent = 'Tên thành viên';
      let th_thead_right2 = document.createElement('th');
      th_thead_right2.textContent = 'Kill';
      let th_thead_right3 = document.createElement('th');
      th_thead_right3.textContent = 'Death';
      let th_thead_right4 = document.createElement('th');
      th_thead_right4.textContent = 'Assist';
      let th_thead_right5 = document.createElement('th');
      th_thead_right5.textContent = 'KDA';
      let th_thead_right6 = document.createElement('th');
      th_thead_right6.textContent = 'Damage';
      let tbody_right = document.createElement('tbody');
      tbody_right.id = `team-right-${i+1}`;
      let tr_table_right = document.createElement('tr');
      tr_table_right.classList.add('title');
   

      team_left.appendChild(team1);
      thead_left.appendChild(tr_table_left);
      tr_table_left.appendChild(th_thead_left1);
      tr_table_left.appendChild(th_thead_left2);
      tr_table_left.appendChild(th_thead_left3);
      tr_table_left.appendChild(th_thead_left4);
      tr_table_left.appendChild(th_thead_left5);
      tr_table_left.appendChild(th_thead_left6);
      table_left.appendChild(thead_left);
      table_left.appendChild(tbody_left);
      team_left.appendChild(table_left);
      score_break_down.appendChild(team_left);

      team_right.appendChild(team2);
      thead_right.appendChild(tr_table_right);
      tr_table_right.appendChild(th_thead_right1);
      tr_table_right.appendChild(th_thead_right2);
      tr_table_right.appendChild(th_thead_right3);
      tr_table_right.appendChild(th_thead_right4);
      tr_table_right.appendChild(th_thead_right5);
      tr_table_right.appendChild(th_thead_right6);
      table_right.appendChild(thead_right);
      table_right.appendChild(tbody_right);
      team_right.appendChild(table_right);
      score_break_down.appendChild(team_right);
      

      // Append the team div to the row div
      rowDiv1.appendChild(teamDiv2);
      rowDiv.appendChild(rowDiv1);
      rowDiv.appendChild(score_break_down);
      link.appendChild(rowDiv)
      // Append the row div to the dataBody
      dataBody.appendChild(link);
    }
    show();
  });
