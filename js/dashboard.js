const schools = window.MockDB.schools;

// KPI ELEMENTS
const totalSchoolsEl = document.getElementById("kpiTotalSchools");
const mockEnrollEl = document.getElementById("kpiMockEnroll");
const terminalEnrollEl = document.getElementById("kpiTerminalEnroll");
const oldSchoolsEl = document.getElementById("kpiOldSchools");
const schoolTable = document.getElementById("schoolTable");
const regionChart = document.getElementById("regionChart");

function yearsAgo(dateStr) {
  const created = new Date(dateStr);
  const now = new Date();
  return Math.floor((now - created) / (1000 * 60 * 60 * 24 * 365));
}

// ================= KPIs =================
function renderKPIs() {
  totalSchoolsEl.textContent = schools.length;

  let mockTotal = 0;
  let terminalTotal = 0;
  let oldCount = 0;

  schools.forEach(s => {
    s.mocks.forEach(m => mockTotal += m.enrollment);
    s.terminals.forEach(t => terminalTotal += t.enrollment);
    if (yearsAgo(s.createdAt) >= 1) oldCount++;
  });

  mockEnrollEl.textContent = mockTotal;
  terminalEnrollEl.textContent = terminalTotal;
  oldSchoolsEl.textContent = oldCount;
}

// ================= TABLE =================
function renderTable() {
  schoolTable.innerHTML = "";

  schools.slice(0, 50).forEach(school => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="py-3">${school.name}</td>
      <td class="text-center">${school.region}</td>
      <td class="text-center">${yearsAgo(school.createdAt)} yrs</td>
      <td class="text-right">
        <button class="text-blue-600 text-xs mr-2">Edit</button>
        <button class="text-red-500 text-xs" onclick="deleteSchool('${school.id}')">Delete</button>
      </td>
    `;

    schoolTable.appendChild(tr);
  });
}

// ================= REGION CHART =================
function renderRegionChart() {
  regionChart.innerHTML = "";
  const regionCount = {};

  schools.forEach(s => {
    regionCount[s.region] = (regionCount[s.region] || 0) + 1;
  });

  Object.entries(regionCount).forEach(([region, count]) => {
    const bar = document.createElement("div");
    bar.className = "flex flex-col items-center gap-2";

    bar.innerHTML = `
      <div class="w-10 bg-blue-500 rounded-lg"
           style="height:${count * 40}px"></div>
      <span class="text-xs text-gray-500">${region}</span>
    `;

    regionChart.appendChild(bar);
  });
}

// ================= DELETE =================
function deleteSchool(id) {
  const code = prompt("Enter UNIQUE DELETE CODE");
  if (code !== "ADMIN-DELETE-123") {
    alert("Invalid delete code");
    return;
  }
  alert("Delete blocked in demo mode (Firestore later)");
}




// ================= INIT =================
renderKPIs();
renderTable();
renderRegionChart();


