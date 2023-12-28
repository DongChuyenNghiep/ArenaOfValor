
let SHEET_RANGE_D = 'A64:U75';

let FULL_URL_D = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_QUALIFIER}&range=${SHEET_RANGE_D}`;

fetch(FULL_URL_D)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    let dataBody = document.getElementById('table_fixture_D');

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
      img2.src = rowData[7].v; // Set the image source from the data
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
      team_left.classList.add('team-left');
      let team1 = document.createElement('p');
      team1.classList.add('team-name');
      team1.textContent = rowData[1].v;
      team_left.appendChild(team1);
      let ban_pick_left = document.createElement('div');
      ban_pick_left.classList.add('ban-pick');
      ban_pick_left.id = 'ban-pick-left';
      let ban_left = document.createElement('div');
      ban_left.classList.add('ban');
      ban_pick_left.appendChild(ban_left);
      let ban_box_left_1 = document.createElement('div');
      ban_box_left_1.classList.add('ban-box', 'ban-box-left');
      ban_left.appendChild(ban_box_left_1);
      let ban_box_left_2 = document.createElement('div');
      ban_box_left_2.classList.add('ban-box', 'ban-box-left');
      ban_left.appendChild(ban_box_left_2);
      let ban_box_left_3 = document.createElement('div');
      ban_box_left_3.classList.add('ban-box', 'ban-box-left');
      ban_left.appendChild(ban_box_left_3);
      let ban_box_left_4 = document.createElement('div');
      ban_box_left_4.classList.add('ban-box', 'ban-box-left');
      ban_left.appendChild(ban_box_left_4);
      let ban_box_left_5 = document.createElement('div');
      ban_box_left_5.classList.add('ban-box', 'ban-box-left');
      ban_left.appendChild(ban_box_left_5);
      let cross_ban = document.createElement('div');
      cross_ban.classList.add('line');
      let image = document.createElement('img');
      ban_box_left_1.appendChild(cross_ban.cloneNode(true));
      ban_box_left_2.appendChild(cross_ban.cloneNode(true));
      ban_box_left_3.appendChild(cross_ban.cloneNode(true));
      ban_box_left_4.appendChild(cross_ban.cloneNode(true));
      ban_box_left_5.appendChild(cross_ban.cloneNode(true));
      ban_box_left_1.appendChild(image.cloneNode(true));
      ban_box_left_2.appendChild(image.cloneNode(true));
      ban_box_left_3.appendChild(image.cloneNode(true));
      ban_box_left_4.appendChild(image.cloneNode(true));
      ban_box_left_5.appendChild(image.cloneNode(true));
      let pick_left = document.createElement('div');
      pick_left.classList.add('pick');
      ban_pick_left.appendChild(pick_left);
      let pick_box_left_1 = document.createElement('div');
      pick_box_left_1.classList.add('pick-box', 'pick-box-left');
      pick_left.appendChild(pick_box_left_1);
      let pick_box_left_2 = document.createElement('div');
      pick_box_left_2.classList.add('pick-box', 'pick-box-left');
      pick_left.appendChild(pick_box_left_2);
      let pick_box_left_3 = document.createElement('div');
      pick_box_left_3.classList.add('pick-box', 'pick-box-left');
      pick_left.appendChild(pick_box_left_3);
      let pick_box_left_4 = document.createElement('div');
      pick_box_left_4.classList.add('pick-box', 'pick-box-left');
      pick_left.appendChild(pick_box_left_4);
      let pick_box_left_5 = document.createElement('div');
      pick_box_left_5.classList.add('pick-box', 'pick-box-left');
      pick_left.appendChild(pick_box_left_5);
      pick_box_left_1.appendChild(image.cloneNode(true));
      pick_box_left_2.appendChild(image.cloneNode(true));
      pick_box_left_3.appendChild(image.cloneNode(true));
      pick_box_left_4.appendChild(image.cloneNode(true));
      pick_box_left_5.appendChild(image.cloneNode(true));
      let stat_left = document.createElement('div');
      stat_left.classList.add('stat-left');
      let kda_left = document.createElement('p');
      kda_left.classList.add('kda');
      kda_left.textContent = `K/D/A: ${rowData[9].v}/${rowData[11].v}/${rowData[15].v}`;
      let turret_left = document.createElement('p');
      turret_left.classList.add('turret-left');
      turret_left.textContent = `Số trụ đã phá hủy: ${rowData[19].v}`
      let damage_left = document.createElement('p');
      damage_left.textContent = `Tổng sát thương: ${rowData[17].v}`;
      stat_left.appendChild(kda_left);
      stat_left.appendChild(turret_left);
      stat_left.appendChild(damage_left);
      team_left.appendChild(stat_left);
      team_left.appendChild(ban_pick_left);




      let table_left = document.createElement('table');
      table_left.classList.add('team1');
      let thead_left = document.createElement('thead');
      let th_thead_left1 = document.createElement('th');
      th_thead_left1.classList.add("first-col");
      th_thead_left1.textContent = '';
      let th_thead_left2 = document.createElement('th');
      th_thead_left2.textContent = 'K';
      let th_thead_left3 = document.createElement('th');
      th_thead_left3.textContent = 'D';
      let th_thead_left4 = document.createElement('th');
      th_thead_left4.textContent = 'A';
      let th_thead_left5 = document.createElement('th');
      th_thead_left5.textContent = 'KDA';
      let th_thead_left6 = document.createElement('th');
      th_thead_left6.textContent = 'DMG';
      let tbody_left = document.createElement('tbody');
      tbody_left.id = `team-left-${i + 1}`;
      let tr_table_left = document.createElement('tr');
      tr_table_left.classList.add('title');

      let team_right = document.createElement('div');
      team_right.classList.add('team-right');
      let team2 = document.createElement('p');
      team2.classList.add('team-name');
      team2.textContent = rowData[6].v;
      team_right.appendChild(team2)
      let ban_pick_right = document.createElement('div');
      ban_pick_right.classList.add('ban-pick');
      ban_pick_right.id = 'ban-pick-right';
      let ban_right = document.createElement('div');
      ban_right.classList.add('ban');
      ban_pick_right.appendChild(ban_right);
      let ban_box_right_1 = document.createElement('div');
      ban_box_right_1.classList.add('ban-box', 'ban-box-right');
      ban_right.appendChild(ban_box_right_1);
      let ban_box_right_2 = document.createElement('div');
      ban_box_right_2.classList.add('ban-box', 'ban-box-right');
      ban_right.appendChild(ban_box_right_2);
      let ban_box_right_3 = document.createElement('div');
      ban_box_right_3.classList.add('ban-box', 'ban-box-right');
      ban_right.appendChild(ban_box_right_3);
      let ban_box_right_4 = document.createElement('div');
      ban_box_right_4.classList.add('ban-box', 'ban-box-right');
      ban_right.appendChild(ban_box_right_4);
      let ban_box_right_5 = document.createElement('div');
      ban_box_right_5.classList.add('ban-box', 'ban-box-right');
      ban_right.appendChild(ban_box_right_5);

      ban_box_right_1.appendChild(cross_ban.cloneNode(true));
      ban_box_right_2.appendChild(cross_ban.cloneNode(true));
      ban_box_right_3.appendChild(cross_ban.cloneNode(true));
      ban_box_right_4.appendChild(cross_ban.cloneNode(true));
      ban_box_right_5.appendChild(cross_ban.cloneNode(true));
      ban_box_right_1.appendChild(image.cloneNode(true));
      ban_box_right_2.appendChild(image.cloneNode(true));
      ban_box_right_3.appendChild(image.cloneNode(true));
      ban_box_right_4.appendChild(image.cloneNode(true));
      ban_box_right_5.appendChild(image.cloneNode(true));
      let pick_right = document.createElement('div');
      pick_right.classList.add('pick');
      ban_pick_right.appendChild(pick_right);
      let pick_box_right_1 = document.createElement('div');
      pick_box_right_1.classList.add('pick-box', 'pick-box-left');
      pick_right.appendChild(pick_box_right_1);
      let pick_box_right_2 = document.createElement('div');
      pick_box_right_2.classList.add('pick-box', 'pick-box-left');
      pick_right.appendChild(pick_box_right_2);
      let pick_box_right_3 = document.createElement('div');
      pick_box_right_3.classList.add('pick-box', 'pick-box-left');
      pick_right.appendChild(pick_box_right_3);
      let pick_box_right_4 = document.createElement('div');
      pick_box_right_4.classList.add('pick-box', 'pick-box-left');
      pick_right.appendChild(pick_box_right_4);
      let pick_box_right_5 = document.createElement('div');
      pick_box_right_5.classList.add('pick-box', 'pick-box-left');
      pick_right.appendChild(pick_box_right_5);
      pick_box_right_1.appendChild(image.cloneNode(true));
      pick_box_right_2.appendChild(image.cloneNode(true));
      pick_box_right_3.appendChild(image.cloneNode(true));
      pick_box_right_4.appendChild(image.cloneNode(true));
      pick_box_right_5.appendChild(image.cloneNode(true));
      let stat_right = document.createElement('div');
      stat_right.classList.add('stat-right');
      let kda_right = document.createElement('p');
      kda_right.classList.add('kda');
      kda_right.textContent = `K/D/A: ${rowData[10].v}/${rowData[12].v}/${rowData[16].v}`;
      let turret_right = document.createElement('p');
      turret_right.classList.add('turret-left');
      turret_right.textContent = `Số trụ đã phá hủy: ${rowData[20].v}`
      let damage_right = document.createElement('p');
      damage_right.textContent = `Tổng sát thương: ${rowData[18].v}`;
      stat_right.appendChild(kda_right);
      stat_right.appendChild(turret_right);
      stat_right.appendChild(damage_right);
      team_right.appendChild(stat_right);
      team_right.appendChild(ban_pick_right);



      let table_right = document.createElement('table');
      table_right.classList.add('team2');



      let thead_right = document.createElement('thead');
      let th_thead_right1 = document.createElement('th');
      th_thead_right1.classList.add("first-col");
      th_thead_right1.textContent = '';
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
      tbody_right.id = `team-right-${i + 1}`;
      let tr_table_right = document.createElement('tr');
      tr_table_right.classList.add('title');



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
      let div_table_left = document.createElement('div');
      div_table_left.classList.add('wrapper');
      div_table_left.appendChild(table_left);
      team_left.appendChild(div_table_left);


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
      let div_table_right = document.createElement('div');
      div_table_right.classList.add('wrapper');
      div_table_right.appendChild(table_right);
      team_right.appendChild(div_table_right);

      // Append the team div to the row div
      rowDiv1.appendChild(teamDiv2);
      rowDiv.appendChild(rowDiv1);
      rowDiv.appendChild(score_break_down);
      link.appendChild(rowDiv)
      // Append the row div to the dataBody
      dataBody.appendChild(link);
    }
    show();
    banpick();
  });


