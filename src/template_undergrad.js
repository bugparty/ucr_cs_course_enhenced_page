// template.js
export const template_undergrad = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2024-2025 Graduate Course Offerings</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      line-height: 1.6;
    }
    h1 {
      color: #333;
    }
    .callout {
      background-color: #f9f9f9;
      border-left: 5px solid #ccc;
      padding: 10px;
      margin: 20px 0;
    }
    .table-tight {
      width: 100%;
      border-collapse: collapse;
    }
    .table-tight th, .table-tight td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    .table-tight th {
      background-color: #f2f2f2;
      text-align: left;
    }
    .table-tight tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    .table-tight tbody tr:hover {
      background-color: #f1f1f1;
    }
    .filter-container {
      margin-bottom: 20px;
    }
    .filter-container label {
      font-weight: bold;
      margin-right: 10px;
    }
.filter-container select, .filter-container button {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  outline: none;
  transition: border-color 0.3s;
  -webkit-appearance: none; /* Remove default styling in Safari */
  appearance: none; /* Remove default styling in other browsers */
}
    .filter-container select:focus, .filter-container button:focus {
      border-color: #007BFF;
    }
  </style>
  <script>
    let hideOtherSeasons = false;

    function toggleHideOtherSeasons() {
      hideOtherSeasons = !hideOtherSeasons;
      const button = document.getElementById('toggle-hide-button');
      button.textContent = hideOtherSeasons ? 'Show Other Seasons' : 'Hide Other Seasons';
      filterTable(document.getElementById('season-filter').value);
    }

    function filterTable(season) {
      const rows = document.querySelectorAll('.table-tight tbody tr');
      const headers = document.querySelectorAll('.table-tight th');
      rows.forEach(row => {
        const fall = row.cells[2].innerText.trim();
        const winter = row.cells[3].innerText.trim();
        const spring = row.cells[4].innerText.trim();
        row.style.display = 'none';
        row.cells[2].style.display = '';
        row.cells[3].style.display = '';
        row.cells[4].style.display = '';
        if (season === 'All') {
          row.style.display = '';
        } else if (season === 'Fall' && fall) {
          row.style.display = '';
          if (hideOtherSeasons) {
            row.cells[3].style.display = 'none';
            row.cells[4].style.display = 'none';
          }
        } else if (season === 'Winter' && winter) {
          row.style.display = '';
          if (hideOtherSeasons) {
            row.cells[2].style.display = 'none';
            row.cells[4].style.display = 'none';
          }
        } else if (season === 'Spring' && spring) {
          row.style.display = '';
          if (hideOtherSeasons) {
            row.cells[2].style.display = 'none';
            row.cells[3].style.display = 'none';
          }
        }
      });
      headers[2].style.display = '';
      headers[3].style.display = '';
      headers[4].style.display = '';
      if (hideOtherSeasons && season !== 'All') {
        if (season === 'Fall') {
          headers[3].style.display = 'none';
          headers[4].style.display = 'none';
        } else if (season === 'Winter') {
          headers[2].style.display = 'none';
          headers[4].style.display = 'none';
        } else if (season === 'Spring') {
          headers[2].style.display = 'none';
          headers[3].style.display = 'none';
        }
      }
    }
  </script>
</head>
<body>
<h1><strong>2024-2025 Undergraduate Course Offerings</strong></h1>

<div class="filter-container">
  <label for="season-filter">Filter by season:</label>
  <select id="season-filter" onchange="filterTable(this.value)">
    <option value="All">All</option>
    <option value="Fall">Fall 2024</option>
    <option value="Winter">Winter 2025</option>
    <option value="Spring">Spring 2025</option>
  </select>
  <button id="toggle-hide-button" onclick="toggleHideOtherSeasons()">Hide Other Seasons</button>
</div>
<table class="table-tight">
    <!-- Table content will be inserted here -->
</table>
<footer style="margin-top: 40px; padding: 20px; text-align: center; font-size: 16px; color: #333; background-color: #f2f2f2; border-top: 1px solid #ccc;">
  <p>View this project on <a href="https://github.com/bugparty/ucr_cs_course_enhenced_page" target="_blank" rel="noopener noreferrer" style="color: #007BFF; text-decoration: none;">GitHub</a></p>
</footer>
</body>
</html>
`;