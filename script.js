let classes = {

    "9th Boys":[
    "Ali Ahmad Farid","Naveed Latif","Adil Badshah","Muhammad Aliyan","Hasnain Ahmad",
    "Rayan","Muhammad Junaid","Muhammad Faiz","Mahad","Muhammad Aryan Adnan",
    "Muhammad Hashir","Ahmad Bari","Rao Ahsan","Muhammad Moeed","Muhammad Umar Rabbani",
    "Muhammad Hamdan","Aryan Usman","Hamad","Noor Murtaza","Muhammad Abdullah Falak",
    "Muhammad Talah","Ikrash","Muhammad Suleman Zia","Muhammad Sohaib","Muhammad Awwab",
    "Muhammad Muslim Khan","Muhammad Ibrahim","Muhammad Shahriyar","Muhammad Mustajab Hasan","Muhammad Umar Farooq"
    ],

    "9th Girls":[
    "Maha Maryam","Abeera Saqib","Meerab Adnan","Aiza Usman","Amna",
    "Mishal Muzammil","Arooj Fatima","Hafsa Malik","Zainab Ali","Abeera Adnan",
    "Sadia Noor","Hadia Anam","Ayesha Yusuf","Zahra Batul","Aimal Midha",
    "Tahreem Fatima","Zahra Bilal","Mahaddam Zainab","Amna Usman","Yashfa Latif","Zainab Iman"
    ],

    "10th Boys":[
    "Abdullah Maaz","Abdul Sattar","M Ayyan Nasir","Mahad","M Hassan",
    "Haider Ali","Shahzain","Muhammad","Hassnain Abbas","Zain Ali",
    "M Ahmad Shahzad","M Hermain Shahid","Noor Ul Hassan","Faizan Murtaza","M Umair",
    "M Saad","Momin Ali Zahid","Saif Ur Rehman","M Talha","M Hassan Abbas",
    "M Ali","M Junaid Latif","M Sudais Niazi","Ahmad Rana","Papu Khan",
    "Faizan Asmat","Husni Farooq","Haseeb Yousuf","M Farhan Ashraf","Usman",
    "M Ahmad Hameed","M Bilal","Abdullah","Ayan Ahmad"
    ],

    "10th Girls":[
    "Afira Hassan","Afshan","Aiman Fatima","Alishba Shahzad","Aliza",
    "Amna Abbas","Amna Ismail","Aqsa Gulzar","Areesha Hidayat","Arfa Khalil",
    "Ariba","Asia Bibi","Ayesha Husnain","Ayesha Naeem","Ayesha Zia",
    "Briha","Eman Fatima","Farheen Fatima","Fatima Abbas","Fiza Ijaz",
    "Fiza Noor","Iram Hafeez","Maham Zhra","Mahanil Fatima","Mahnoor",
    "Mubashira Ijaz","Naeema Khan","Nimra Farid","Noor","Noor Ul Ain Naeem",
    "Rehma Riaz","Rida Almas","Rizwana Batool","Romaisa Asghar","Sabiha Fatima",
    "Salma Riaz","Samia Bibi","Sanjeeda","Shabana Mehboob","Tooba Sajid",
    "Umaema","Waniza Siddique","Wareesha Rauf","Zainab Noor","Zainab Saeed",
    "Zainab Zahra","Zarmina","Zeenat Mohsin","Zunaira Yusuf"
    ]

};

// Pre-loaded ONLY latest test (2026-07-17) for 10th Girls
let defaultClassData = {
    "10th Girls": {
        tests: [
            { name: "Ch 12", date: "2026-07-17", tm: "10" }
        ],
        students: [
            { name: "Afira Hassan", marks: ["8.5"] },
            { name: "Afshan", marks: ["A"] },
            { name: "Aiman Fatima", marks: ["04"] },
            { name: "Alishba Shahzad", marks: ["08"] },
            { name: "Aliza", marks: ["05"] },
            { name: "Amna Abbas", marks: ["8.5"] },
            { name: "Amna Ismail", marks: ["07"] },
            { name: "Aqsa Gulzar", marks: ["08"] },
            { name: "Areesha Hidayat", marks: ["A"] },
            { name: "Arfa Khalil", marks: ["07"] },
            { name: "Ariba", marks: ["07"] },
            { name: "Asia Bibi", marks: ["8.5"] },
            { name: "Ayesha Husnain", marks: ["09"] },
            { name: "Ayesha Naeem", marks: ["2.5"] },
            { name: "Ayesha Zia", marks: ["01"] },
            { name: "Briha", marks: ["07"] },
            { name: "Eman Fatima", marks: ["8.5"] },
            { name: "Farheen Fatima", marks: ["3.5"] },
            { name: "Fatima Abbas", marks: ["9.5"] },
            { name: "Fiza Ijaz", marks: ["8.5"] },
            { name: "Fiza Noor", marks: ["5.5"] },
            { name: "Iram Hafeez", marks: ["00"] },
            { name: "Maham Zhra", marks: ["01"] },
            { name: "Mahanil Fatima", marks: ["7.5"] },
            { name: "Mahnoor", marks: ["7.5"] },
            { name: "Mubashira Ijaz", marks: ["7.5"] },
            { name: "Naeema Khan", marks: ["A"] },
            { name: "Nimra Farid", marks: ["A"] },
            { name: "Noor", marks: ["08"] },
            { name: "Noor Ul Ain Naeem", marks: ["8.5"] },
            { name: "Rehma Riaz", marks: ["05"] },
            { name: "Rida Almas", marks: ["6.5"] },
            { name: "Rizwana Batool", marks: ["05"] },
            { name: "Romaisa Asghar", marks: ["8.5"] },
            { name: "Sabiha Fatima", marks: ["A"] },
            { name: "Salma Riaz", marks: ["9.5"] },
            { name: "Samia Bibi", marks: ["5.5"] },
            { name: "Sanjeeda", marks: ["08"] },
            { name: "Shabana Mehboob", marks: ["04"] },
            { name: "Tooba Sajid", marks: ["1.5"] },
            { name: "Umaema", marks: ["A"] },
            { name: "Waniza Siddique", marks: ["4.5"] },
            { name: "Wareesha Rauf", marks: ["06"] },
            { name: "Zainab Noor", marks: ["A"] },
            { name: "Zainab Saeed", marks: ["09"] },
            { name: "Zainab Zahra", marks: ["A"] },
            { name: "Zarmina", marks: ["05"] },
            { name: "Zeenat Mohsin", marks: ["00"] },
            { name: "Zunaira Yusuf", marks: ["4.5"] }
        ]
    }
};

let students = [];
let tests = [];
let currentClass = "";

const area = document.getElementById("area");
const emptyState = document.getElementById("emptyState");
const pdfClassEl = document.getElementById("pdfClass");
const classSelect = document.getElementById("classSelect");
const head = document.getElementById("head");
const body = document.getElementById("body");
const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const toastEl = document.getElementById("toast");


// ===================== TOAST =====================
function toast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
}


// ===================== MODAL HELPERS =====================
function showModal(html){
    modalBox.innerHTML = html;
    modalOverlay.classList.remove("hidden");
    let firstInput = modalBox.querySelector("input");
    if(firstInput) setTimeout(() => firstInput.focus(), 50);
}

function hideModal(){
    modalOverlay.classList.add("hidden");
    modalBox.innerHTML = "";
}

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") hideModal();
    if(e.key === "Enter" && !modalOverlay.classList.contains("hidden") &&
       e.target && e.target.tagName === "INPUT" && modalBox.contains(e.target)){
        let ok = modalBox.querySelector(".btn-primary");
        if(ok) ok.click();
    }
});


// ===================== DISPLAY NAME (prefix hiding for Boys classes only) =====================
function getDisplayName(name, cls){
    if(cls !== "9th Boys" && cls !== "10th Boys") return name;

    let trimmed = (name || "").trim();

    if(trimmed === "Muhammad") return trimmed;

    let match;

    if(match = trimmed.match(/^Muhammad\s+(.+)$/i)){
        return match[1].trim();
    }

    if(match = trimmed.match(/^M\.\s*(.+)$/)){
        return match[1].trim();
    }

    if(match = trimmed.match(/^M\s+(.+)$/)){
        return match[1].trim();
    }

    return trimmed;
}


// ===================== EXPORT NAME (Expands M. or M to Muhammad for PDF/PNG) =====================
function getExportName(name){
    let trimmed = (name || "").trim();

    if(/^M\.\s*/i.test(trimmed)){
        return trimmed.replace(/^M\.\s*/i, "Muhammad ");
    }
    if(/^M\s+/i.test(trimmed)){
        return trimmed.replace(/^M\s+/i, "Muhammad ");
    }

    return trimmed;
}


// ===================== LOAD CLASS =====================
function loadClass(){
    currentClass = classSelect.value;
    if(!currentClass){
        area.style.display = "none";
        emptyState.style.display = "block";
        pdfClassEl.textContent = "";
        let rb0 = document.getElementById("rangeBar"); if(rb0) rb0.style.display = "none";
        renderStats();
        return;
    }

    if(isCombined(currentClass)){
        loadCombined();
        return;
    }
    setCombinedMode(false);
    syncGrade(gradeOf(currentClass));     // shared test list for this class (9th / 10th)

    let saved = localStorage.getItem(currentClass);

    if(saved){
        let data = JSON.parse(saved);
        students = data.students;
        tests = data.tests;
        sortStudents();
    } else if(defaultClassData[currentClass]) {
        students = JSON.parse(JSON.stringify(defaultClassData[currentClass].students));
        tests = JSON.parse(JSON.stringify(defaultClassData[currentClass].tests));
        sortStudents();
        saveData();
    } else {
        students = classes[currentClass].map(n => ({ name: n, marks: [] }));
        tests = [];
        sortStudents();
    }

    emptyState.style.display = "none";
    area.style.display = "block";
    pdfClassEl.textContent = currentClass;
    render();
}


// ===================== SORT STUDENTS BY DISPLAYED NAME =====================
function sortStudents(){
    students.sort((a, b) => {
        let nameA = getDisplayName(a.name, currentClass);
        let nameB = getDisplayName(b.name, currentClass);
        return nameA.localeCompare(nameB);
    });
}


// ===================== ADD TEST =====================
let pendingTestIndex = null;      // where the next new test will be inserted

function addTest(pos){
    pendingTestIndex = (typeof pos === "number") ? pos : tests.length;
    let where = "";
    if(tests.length > 0){
        if(pendingTestIndex <= 0) where = "It will be placed at the very beginning.";
        else if(pendingTestIndex >= tests.length) where = "It will be placed at the end.";
        else where = "It will be placed between <strong>" + escHTML(tests[pendingTestIndex - 1].name) +
                     "</strong> and <strong>" + escHTML(tests[pendingTestIndex].name) + "</strong>.";
    }
    showModal(`
        <h3>Add New Test</h3>
        ${where ? '<p style="margin:0 0 10px;font-size:13px;opacity:.8;">' + where + '</p>' : ''}
        <label for="mTestName">Test Name</label>
        <input id="mTestName" type="text" placeholder="e.g. Chapter 5 Quiz">
        <label for="mTestDate">Date</label>
        <input id="mTestDate" type="date">
        <label for="mTestTM">Total Marks</label>
        <input id="mTestTM" type="number" min="1" placeholder="e.g. 20">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmAddTest()">Add Test</button>
        </div>
    `);
}

function confirmAddTest(){
    let name = document.getElementById("mTestName").value.trim();
    let date = document.getElementById("mTestDate").value;
    let tm = document.getElementById("mTestTM").value;

    if(!name){
        toast("Please enter a test name.");
        return;
    }

    // Same Name + Date + T.M. already exists in this class's common list -> do NOT create another
    let newKey = testKey({ name, date, tm });
    if(tests.some(t => testKey(t) === newKey)){
        pendingTestIndex = null;
        hideModal();
        toast("This test already exists (same name, date and T.M.). Existing common test is used.");
        return;
    }

    let at = (pendingTestIndex === null) ? tests.length : pendingTestIndex;
    at = Math.max(0, Math.min(at, tests.length));
    let anchorKey = at > 0 ? testKey(tests[at - 1]) : null;   // used to place it at the same spot in the other section
    tests.splice(at, 0, { name, date, tm });
    students.forEach(s => s.marks.splice(at, 0, "A"));   // marks stay lined up with their tests
    pendingTestIndex = null;

    saveData();
    // Same common test goes into the other section of this class (its students get "A")
    updateSibling(d => {
        let pos = 0;
        if(anchorKey !== null){
            let a = d.tests.findIndex(t => testKey(t) === anchorKey);
            pos = a === -1 ? d.tests.length : a + 1;
        }
        d.tests.splice(pos, 0, { name, date, tm });
        d.students.forEach(s => s.marks.splice(pos, 0, "A"));
    });
    syncGrade(gradeOf(currentClass));
    hideModal();
    render();
    toast("Test added.");
}


// ===================== ADD STUDENT =====================
function addStudent(){
    showModal(`
        <h3>Add New Student</h3>
        <label for="mStudentName">Student Name</label>
        <input id="mStudentName" type="text" placeholder="Full name">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmAddStudent()">Add Student</button>
        </div>
    `);
}

function confirmAddStudent(){
    let name = document.getElementById("mStudentName").value.trim();
    if(!name){
        toast("Please enter a student name.");
        return;
    }
    students.push({ name, marks: tests.map(() => "A") });
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student added.");
}


// ===================== DELETE =====================
function deleteStudent(i){
    let name = students[i].name;
    showModal(`
        <h3>Remove Student?</h3>
        <p class="warn">This will permanently remove <strong>${escHTML(name)}</strong> and all their marks from this class.</p>
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" style="background:linear-gradient(135deg,#DC2626,#B91C1C)" onclick="confirmDeleteStudent(${i})">Remove</button>
        </div>
    `);
}

function confirmDeleteStudent(i){
    students.splice(i, 1);
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student removed.");
}

function deleteTest(i){
    let name = tests[i].name;
    showModal(`
        <h3>Remove Test?</h3>
        <p class="warn">This will permanently remove <strong>${escHTML(name)}</strong> and every student's marks for it. This test is shared by ${escHTML(gradeOf(currentClass))} Boys, Girls and Combined, so it will be removed from all three.</p>
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" style="background:linear-gradient(135deg,#DC2626,#B91C1C)" onclick="confirmDeleteTest(${i})">Remove</button>
        </div>
    `);
}

function confirmDeleteTest(i){
    let key = testKey(tests[i]);
    tests.splice(i, 1);
    students.forEach(s => s.marks.splice(i, 1));
    saveData();
    updateSibling(d => {
        let k = d.tests.findIndex(t => testKey(t) === key);
        if(k === -1) return;
        d.tests.splice(k, 1);
        d.students.forEach(s => s.marks.splice(k, 1));
    });
    hideModal();
    render();
    toast("Test removed.");
}


// ===================== EDIT STUDENT / EDIT TEST =====================
function editStudent(i){
    let s = students[i];
    if(!s) return;
    showModal(`
        <h3>Edit Student Name</h3>
        <label for="mEditStudentName">Student Name</label>
        <input id="mEditStudentName" type="text" value="${escHTML(s.name)}">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmEditStudent(${i})">Save Changes</button>
        </div>
    `);
    let inp = document.getElementById("mEditStudentName");
    if(inp) setTimeout(() => inp.select(), 60);
}

function confirmEditStudent(i){
    let name = document.getElementById("mEditStudentName").value.trim();
    if(!name){
        toast("Please enter a student name.");
        return;
    }
    students[i].name = name;      // marks stay exactly as they are
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student updated.");
}

function editTest(i){
    let t = tests[i];
    if(!t) return;
    showModal(`
        <h3>Edit Test</h3>
        <label for="mEditTestName">Test Name</label>
        <input id="mEditTestName" type="text" value="${escHTML(t.name)}">
        <label for="mEditTestDate">Date</label>
        <input id="mEditTestDate" type="date" value="${escHTML(t.date || "")}">
        <label for="mEditTestTM">Total Marks</label>
        <input id="mEditTestTM" type="number" min="1" value="${escHTML(t.tm || "")}">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmEditTest(${i})">Save Changes</button>
        </div>
    `);
    let inp = document.getElementById("mEditTestName");
    if(inp) setTimeout(() => inp.select(), 60);
}

function confirmEditTest(i){
    let name = document.getElementById("mEditTestName").value.trim();
    let date = document.getElementById("mEditTestDate").value;
    let tm = document.getElementById("mEditTestTM").value;

    if(!name){
        toast("Please enter a test name.");
        return;
    }
    let oldKey = testKey(tests[i]);
    let newKey = testKey({ name, date, tm });
    if(newKey !== oldKey && tests.some((t, k) => k !== i && testKey(t) === newKey)){
        toast("Another test with the same name, date and T.M. already exists.");
        return;
    }
    tests[i].name = name;         // every student's marks stay untouched
    tests[i].date = date;
    tests[i].tm = tm;
    saveData();
    updateSibling(d => {
        let k = d.tests.findIndex(t => testKey(t) === oldKey);
        if(k === -1) return;
        d.tests[k].name = name;
        d.tests[k].date = date;
        d.tests[k].tm = tm;
    });
    hideModal();
    render();
    toast("Test updated.");
}


// ===================== RENDER =====================
function render(){
    head.innerHTML = "<th>Sr#</th><th>Student Name</th>";

    tests.forEach((t, i) => {
        head.innerHTML += `
        <th class="testTh">
        <button class="insBtn insLeft" title="Add a new test before this one" onclick="addTest(${i})">+</button>
        ${i === tests.length - 1 ? `<button class="insBtn insRight" title="Add a new test after this one" onclick="addTest(${i + 1})">+</button>` : ""}
        ${escHTML(t.name)}<br>
        Date : ${escHTML(t.date)}<br>
        T.M = ${escHTML(t.tm)}<br>
        <button class="edit" onclick="editTest(${i})">Edit</button>
        <button class="delete" onclick="deleteTest(${i})">Delete</button>
        </th>`;
    });

    head.innerHTML += "<th>Action</th>";
    body.innerHTML = "";

    students.forEach((s, i) => {
        let displayName = getDisplayName(s.name, currentClass);
        let row = `<tr><td>${i + 1}</td><td>${escHTML(displayName)}</td>`;

        s.marks.forEach((m, j) => {
            row += `<td>
            <input type="text" inputmode="numeric" value="${escHTML(m)}"
            class="${m=="A" ? 'absent' : ''}"
            onfocus="if(this.value=='A'){this.value='';this.className='';}"
            onclick="if(this.value=='A'){this.value='';this.className='';}"
            oninput="students[${i}].marks[${j}]=this.value;this.className=this.value=='A'?'absent':'';saveData();"
            onchange="normMark(${i},${j},this)">
            </td>`;
        });

        row += `<td class="actionCell"><button class="edit" onclick="editStudent(${i})">Edit</button> <button class="delete" onclick="deleteStudent(${i})">Delete</button></td></tr>`;
        body.innerHTML += row;
    });
    applySearch();
}


// ===================== SAVE =====================
function saveData(){
    if(!currentClass || isCombined(currentClass)) return;
    localStorage.setItem(currentClass, JSON.stringify({ students, tests }));
}

function manualSave(){
    saveData();
    toast("Saved.");
}


// ===================== BACKUP / RESTORE =====================
function exportBackup(){
    let backup = {};
    Object.keys(classes).forEach(cls => {
        let saved = localStorage.getItem(cls);
        if(saved) backup[cls] = JSON.parse(saved);
    });

    if(Object.keys(backup).length === 0){
        toast("No saved data yet to back up.");
        return;
    }

    let blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    let today = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = "Physics_Results_Backup_" + today + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast("Backup downloaded.");
}

function triggerImport(){
    document.getElementById("importFile").click();
}

function importBackup(event){
    let file = event.target.files[0];
    if(!file) return;

    let reader = new FileReader();
    reader.onload = function(e){
        try{
            let data = JSON.parse(e.target.result);
            let count = 0;
            Object.keys(data).forEach(cls => {
                if(classes[cls]){
                    localStorage.setItem(cls, JSON.stringify(data[cls]));
                    count++;
                }
            });
            syncAllGrades();          // merge any duplicate / differing tests after restore
            toast(count + " class(es) restored. Re-select the class to view.");
            if(currentClass && (data[currentClass] || isCombined(currentClass))) loadClass();
        } catch(err){
            toast("Invalid backup file.");
        }
        event.target.value = "";
    };
    reader.readAsText(file);
}


// ===================== PDF =====================
function downloadPDF(){
  try{
    if(isCombined(currentClass)){
        loadCombined();          // same fresh data as the screen
        exportStyledPDF();       // dark blue modern design: Combined lists only
    } else {
        exportClassicPDF();      // original classic design: Boys / Girls classes
    }
  } catch(err){
    console.error(err);
    toast("PDF failed: " + (err && err.message ? err.message : "unknown error"));
  }
}

// ===================== PDF HEADER HELPERS: prominent Date / T.M =====================
function pdfHeadLines(doc, name, w, fs){
    doc.setFont("helvetica", "bold");
    doc.setFontSize(fs);
    return doc.splitTextToSize(String(name), w - 3);
}
function pdfHeadHeight(doc, names, w, fs){
    let mx = 1;
    names.forEach(nm => { mx = Math.max(mx, pdfHeadLines(doc, nm, w, fs).length); });
    let lh = fs * 0.3528 * 1.2;
    return Math.max(26, 4 + mx * lh + 1.8 + 4.4 + 1.6 + 6.8 + 3);
}
// o: { fs, nameCol, dateCol, pillFill, pillText }
function pdfDrawTestHead(doc, x, y, w, h, t, o){
    let lines = pdfHeadLines(doc, t.name, w, o.fs);
    let lh = o.fs * 0.3528 * 1.2, dateH = 4.4, pillH = 6.8;
    let total = lines.length * lh + 1.8 + dateH + 1.6 + pillH;
    let cy = y + (h - total) / 2, cx = x + w / 2;

    // test name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(o.fs);
    doc.setTextColor(...o.nameCol);
    lines.forEach((ln, i) => doc.text(ln, cx, cy + lh * i + lh * 0.78, { align: "center" }));
    cy += lines.length * lh + 1.8;

    // date (bold, shrinks only if the column is very narrow)
    let dFs = 9, dTxt = "Date: " + t.date;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(dFs);
    while(doc.getTextWidth(dTxt) > w - 2 && dFs > 6){ dFs -= 0.25; doc.setFontSize(dFs); }
    doc.setTextColor(...o.dateCol);
    doc.text(dTxt, cx, cy + dateH * 0.78, { align: "center" });
    cy += dateH + 1.6;

    // T.M in a solid pill
    let tFs = 10, tTxt = "T.M: " + t.tm;
    doc.setFontSize(tFs);
    while(doc.getTextWidth(tTxt) + 5 > w - 2 && tFs > 6.5){ tFs -= 0.25; doc.setFontSize(tFs); }
    let pw = doc.getTextWidth(tTxt) + 5;
    doc.setFillColor(...o.pillFill);
    doc.roundedRect(cx - pw / 2, cy, pw, pillH, pillH / 2, pillH / 2, "F");
    doc.setTextColor(...o.pillText);
    doc.text(tTxt, cx, cy + pillH / 2 + tFs * 0.3528 * 0.35, { align: "center" });
}

// ===================== PDF (individual class design - Boys / Girls classes) =====================
// Light, clean report look with a class-colour accent (Boys = blue, Girls = rose).
// Intentionally different from the dark Combined PDF.
function exportClassicPDF(){
    let girls = /Girls$/i.test(currentClass);
    let n = tests.length;

    const INK = [15, 23, 42], MUTED = [100, 116, 139], LINE = [226, 232, 240], ZEBRA = [248, 250, 252];
    const ACC    = girls ? [190, 24, 93]   : [37, 99, 235];
    const ACC_DK = girls ? [131, 24, 67]   : [30, 64, 175];
    const ACC_SF = girls ? [253, 242, 248] : [239, 246, 255];
    const ACC_LT = girls ? [249, 168, 212] : [147, 197, 253];

    // ---- Layout: widen the page when there are many tests ----
    let margin = 12, posW = 16, nameW = 62, testW = 29;
    let neededW = margin * 2 + posW + nameW + n * testW;
    let pageW = Math.max(297, Math.ceil(neededW));

    let doc = new jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: pageW === 297 ? "a4" : [pageW, 210] });
    let W = doc.internal.pageSize.getWidth();
    let H = doc.internal.pageSize.getHeight();

    let spare = W - margin * 2 - (posW + nameW + n * testW);
    if(spare > 0 && n > 0) testW += Math.min(spare / n, 20);
    nameW = Math.max(nameW, W - margin * 2 - (posW + n * testW));

    function paintPage(pageNo){
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, W, H, "F");

        if(pageNo === 1){
            // light header: accent bar on top, dark title on white
            doc.setFillColor(...ACC);
            doc.rect(0, 0, W, 3, "F");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            doc.setTextColor(...ACC);
            doc.text("PHYSICS  |  TEST RESULT", margin, 13);

            doc.setFontSize(24);
            doc.setTextColor(...INK);
            doc.text("Physics Test Result", margin, 24);

            doc.setFillColor(...ACC);
            doc.rect(margin, 27.5, 16, 1.4, "F");
            doc.setFillColor(...LINE);
            doc.rect(margin + 16, 27.9, W - margin * 2 - 16, 0.5, "F");

            // class pill (soft fill, accent outline)
            doc.setFontSize(13);
            let tw = doc.getTextWidth(currentClass) + 18;
            doc.setFillColor(...ACC_SF);
            doc.setDrawColor(...ACC);
            doc.setLineWidth(0.5);
            doc.roundedRect(W - margin - tw, 9, tw, 13, 6.5, 6.5, "FD");
            doc.setTextColor(...ACC_DK);
            doc.text(currentClass, W - margin - tw / 2, 17.1, { align: "center" });
        } else {
            doc.setFillColor(...ACC);
            doc.rect(0, 0, W, 2, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            doc.setTextColor(...INK);
            doc.text("PHYSICS  |  TEST RESULT", margin, 9);
            doc.setTextColor(...ACC);
            doc.text(currentClass.toUpperCase(), W - margin, 9, { align: "right" });
            doc.setDrawColor(...LINE);
            doc.setLineWidth(0.3);
            doc.line(margin, 12, W - margin, 12);
        }
    }

    let headRow = ["Sr#", "Student Name"];
    tests.forEach(t => {
        headRow.push(t.name + "\nDate: " + t.date + "\nT.M: " + t.tm);
    });

    let rows = students.map((s, i) => [i + 1, getExportName(s.name), ...tests.map((t, j) => {
        let v = s.marks[j];
        return (v === undefined || v === null) ? "" : String(v);
    })]);

    let cs = {
        0: { cellWidth: posW, fontStyle: "bold", textColor: MUTED },
        1: { cellWidth: nameW, halign: "left", fontStyle: "bold", cellPadding: { top: 3, bottom: 3, left: 5, right: 3 } }
    };
    for(let c = 0; c < n; c++) cs[2 + c] = { cellWidth: testW, fontStyle: "bold" };

    let headFs = n > 6 ? 9.5 : 10.5;
    let headH = pdfHeadHeight(doc, tests.map(t => t.name), testW, headFs);
    let headOpt = { fs: headFs, nameCol: [255, 255, 255], dateCol: [255, 255, 255], pillFill: [255, 255, 255], pillText: ACC_DK };

    doc.autoTable({
        head: [headRow],
        body: rows,
        startY: 36,
        margin: { top: 18, left: margin, right: margin, bottom: 16 },
        theme: "plain",
        styles: {
            font: "helvetica",
            fontSize: n > 6 ? 10.5 : 12,
            cellPadding: 3,
            halign: "center",
            valign: "middle",
            textColor: INK,
            lineWidth: 0,
            fillColor: [255, 255, 255]
        },
        headStyles: {
            fillColor: ACC,
            textColor: [255, 255, 255],
            fontStyle: "bold",
            fontSize: n > 6 ? 8 : 9,
            minCellHeight: headH
        },
        bodyStyles: { minCellHeight: 11 },
        alternateRowStyles: { fillColor: ZEBRA },
        columnStyles: cs,

        willDrawPage: function(){
            paintPage(doc.internal.getCurrentPageInfo().pageNumber);
        },

        didParseCell: function(data){
            if(data.section === "head" && data.column.index === 1){
                data.cell.styles.halign = "left";
                data.cell.styles.cellPadding = { top: 3, bottom: 3, left: 5, right: 3 };
            }
            if(data.section === "head" && data.column.index >= 2) data.cell.text = [""];   // drawn manually (prominent)
            if(data.section === "body" && data.cell.raw == "A"){
                data.cell.text = [""];
            }
        },

        didDrawCell: function(data){
            let c = data.cell, x = c.x, y = c.y, w = c.width, h = c.height;

            if(data.section === "head"){
                if(data.column.index >= 2 && tests[data.column.index - 2]) pdfDrawTestHead(doc, x, y, w, h, tests[data.column.index - 2], headOpt);
                doc.setDrawColor(...ACC_DK);
                doc.setLineWidth(0.8);
                doc.line(x, y + h, x + w, y + h);
                return;
            }
            if(data.section !== "body") return;

            doc.setDrawColor(...LINE);
            doc.setLineWidth(0.2);
            doc.line(x, y + h, x + w, y + h);

            if(data.column.index === 1){
                doc.line(x + w, y, x + w, y + h);
            }

            // absent = soft red "A" pill
            if(data.column.index >= 2 && c.raw == "A"){
                let cx = x + w / 2, cy = y + h / 2;
                doc.setFillColor(254, 226, 226);
                doc.roundedRect(cx - 4, cy - 3, 8, 6, 3, 3, "F");
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10);
                doc.setTextColor(185, 28, 28);
                doc.text("A", cx, cy + 1.3, { align: "center" });
            }
        }
    });

    // ---- Footer ----
    let total = doc.internal.getNumberOfPages();
    for(let i = 1; i <= total; i++){
        doc.setPage(i);
        doc.setDrawColor(...LINE);
        doc.setLineWidth(0.3);
        doc.line(margin, H - 11, W - margin, H - 11);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(...MUTED);
        doc.text("Physics Test Result  |  " + currentClass, margin, H - 6.5);
        doc.setTextColor(...ACC);
        doc.text("Page " + i + " of " + total, W - margin, H - 6.5, { align: "right" });
    }

    doc.save("Physics Class " + currentClass + rangeTag() + " Result.pdf");
}

// ===================== PDF (dark modern design - Combined lists) =====================
function exportStyledPDF(){
    let combined = isCombined(currentClass);
    let m = combined ? combinedModel : null;
    let cols = combined ? m.cols : tests;
    let n = cols.length;

    // ---- Layout: widen the page when there are many tests ----
    let posW = combined ? 22 : 18, nameW = 58, testW = 28, grandW = 24, obtW = 26, pctW = 34;
    let margin = 14;
    let neededW = margin * 2 + posW + nameW + n * testW + (combined ? grandW + obtW + pctW : 0);
    let pageW = Math.max(297, Math.ceil(neededW));
    let pageFormat = pageW === 297 ? "a4" : [pageW, 210];

    let doc = new jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: pageFormat });
    let W = doc.internal.pageSize.getWidth();
    let H = doc.internal.pageSize.getHeight();

    // let the name column take any spare width so the table always spans the page
    let spare = W - margin * 2 - (posW + nameW + n * testW + (combined ? grandW + obtW + pctW : 0));
    if(spare > 0 && n > 0) testW += Math.min(spare / n, 22);
    nameW = Math.max(nameW, W - margin * 2 - (posW + n * testW + (combined ? grandW + obtW + pctW : 0)));

    // ---- Palette: deep navy page, cyan -> violet accent ----
    const BG = [8, 13, 32], ROW_A = [13, 21, 46], ROW_B = [17, 27, 58], HEAD = [21, 33, 72];
    const TXT = [226, 232, 248], MUTED = [128, 144, 184], LINE = [34, 48, 92], DOTC = [24, 38, 78];
    const CYN = [34, 211, 238], VIO = [139, 92, 246], DARKINK = [18, 26, 54];

    // 1st = light red, 2nd = light yellow, 3rd = light green
    const tint   = { 1: [254, 205, 205], 2: [254, 240, 170], 3: [187, 245, 208] };
    const strong = { 1: [239, 68, 68],   2: [250, 204, 21],  3: [34, 197, 94] };
    const medalText = { 1: [255, 255, 255], 2: [80, 52, 0], 3: [255, 255, 255] };

    function gradientBar(y, h){
        let steps = 100, sw = W / steps;
        for(let i = 0; i < steps; i++){
            let t = i / (steps - 1);
            doc.setFillColor(
                Math.round(CYN[0] + (VIO[0] - CYN[0]) * t),
                Math.round(CYN[1] + (VIO[1] - CYN[1]) * t),
                Math.round(CYN[2] + (VIO[2] - CYN[2]) * t)
            );
            doc.rect(i * sw, y, sw + 0.4, h, "F");
        }
    }

    function paintPage(pageNo){
        doc.setFillColor(...BG);
        doc.rect(0, 0, W, H, "F");

        if(pageNo === 1){
            // dot-grid texture
            doc.setFillColor(...DOTC);
            for(let gx = W - 170; gx < W - 6; gx += 4.5){
                for(let gy = 6; gy < 32; gy += 4.5) doc.circle(gx, gy, 0.38, "F");
            }
            gradientBar(0, 2.2);

            doc.setFont("courier", "bold");
            doc.setFontSize(9);
            doc.setTextColor(...CYN);
            doc.text("PHYSICS  |  TEST RESULT", margin, 13);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(27);
            doc.setTextColor(255, 255, 255);
            doc.text(combined ? "Physics Combined Result" + rangeTitle() : "Class Result", margin, 24.5);

            // class tag
            doc.setFont("courier", "bold");
            doc.setFontSize(14);
            let tag = currentClass.toUpperCase();
            let tw = doc.getTextWidth(tag) + 16;
            doc.setFillColor(14, 30, 66);
            doc.setDrawColor(...CYN);
            doc.setLineWidth(0.6);
            doc.roundedRect(W - margin - tw, 9, tw, 13, 6.5, 6.5, "FD");
            doc.setFillColor(...CYN);
            doc.circle(W - margin - tw + 6.5, 15.5, 1.1, "F");
            doc.setTextColor(...CYN);
            doc.text(tag, W - margin - tw / 2 + 2, 19.6, { align: "center" });
        } else {
            gradientBar(0, 1.6);
            doc.setFont("courier", "bold");
            doc.setFontSize(9.5);
            doc.setTextColor(...TXT);
            doc.text("PHYSICS  |  " + (combined ? "COMBINED RESULT" + rangeTitle().toUpperCase() : "CLASS RESULT"), margin, 10);
            doc.setTextColor(...CYN);
            doc.text(currentClass.toUpperCase(), W - margin, 10, { align: "right" });
        }
    }

    // ---- Table data ----
    let headRow = [combined ? "POSITION" : "SR#", "STUDENT NAME"];
    cols.forEach(t => headRow.push(t.name + "\nDate: " + t.date + "\nT.M: " + t.tm));
    if(combined) headRow.push("GRAND TOTAL", "OBTAINED", "PERCENTAGE");
    let lastCol = headRow.length - 1;

    let rows;
    if(combined){
        rows = m.rows.map(r => [
            r.posLabel, r.exportName, ...r.cells,
            fmtNum(r.grand), fmtNum(r.obtained), r.pctText
        ]);
    } else {
        rows = students.map((s, i) => [i + 1, getExportName(s.name), ...cols.map((c, j) => {
            let v = s.marks[j];
            return (v === undefined || v === null) ? "" : String(v);
        })]);
    }

    let cs = {
        0: { cellWidth: posW, halign: "center" },
        1: { cellWidth: nameW, halign: "left", fontStyle: "bold" }
    };
    for(let c = 0; c < n; c++) cs[2 + c] = { cellWidth: testW, font: "courier", fontStyle: "bold" };
    if(combined){
        cs[2 + n]     = { cellWidth: grandW, textColor: MUTED, font: "courier", fontStyle: "bold" };
        cs[2 + n + 1] = { cellWidth: obtW, fontStyle: "bold", font: "courier" };
        cs[lastCol]   = { cellWidth: pctW, fontStyle: "bold", font: "courier", fontSize: 12.5 };
    }

    let markLo = 2, markHi = 2 + n;      // [lo, hi) = test columns

    let headFs = n > 6 ? 9.5 : 10.5;
    let headH = pdfHeadHeight(doc, cols.map(t => t.name), testW, headFs);
    let headOpt = { fs: headFs, nameCol: [255, 255, 255], dateCol: [226, 232, 248], pillFill: CYN, pillText: DARKINK };

    doc.autoTable({
        head: [headRow],
        body: rows,
        startY: 38,
        margin: { top: 20, left: margin, right: margin, bottom: 16 },
        theme: "plain",
        styles: {
            font: "helvetica",
            fontSize: n > 6 ? 10 : 11,
            cellPadding: 2.5,
            halign: "center",
            valign: "middle",
            textColor: TXT,
            lineWidth: 0,
            fillColor: ROW_A
        },
        headStyles: {
            fillColor: HEAD,
            textColor: [255, 255, 255],
            font: "helvetica",
            fontStyle: "bold",
            fontSize: n > 6 ? 7.8 : 8.6,
            minCellHeight: headH
        },
        bodyStyles: { minCellHeight: 12 },
        alternateRowStyles: { fillColor: ROW_B },
        columnStyles: cs,

        willDrawPage: function(){
            paintPage(doc.internal.getCurrentPageInfo().pageNumber);
        },

        didParseCell: function(data){
            if(data.section === "head" && data.column.index >= 2 && data.column.index < 2 + n) data.cell.text = [""];   // drawn manually (prominent)
            if(data.section !== "body") return;
            let r = combined ? m.rows[data.row.index] : null;
            let top = !!(r && r.rank && r.rank <= 3);

            if(top){
                data.cell.styles.fillColor = tint[r.rank];
                data.cell.styles.textColor = DARKINK;
            }
            // percentage: plain bold number, colour-coded
            if(combined && data.column.index === lastCol && r && r.ranked && !top){
                let pv = r.pctKey / 1e6;
                data.cell.styles.textColor = pv >= 75 ? [52, 211, 153] : (pv >= 50 ? [251, 191, 36] : [248, 113, 113]);
            }
            if(data.column.index === 0 && top) data.cell.text = [""];
            if(data.column.index >= markLo && data.column.index < markHi && data.cell.raw === "A") data.cell.text = [""];
            if(data.column.index === 0 && !top){
                data.cell.styles.textColor = MUTED;
                data.cell.styles.fontStyle = "bold";
            }
        },

        didDrawCell: function(data){
            let c = data.cell, x = c.x, y = c.y, w = c.width, h = c.height;

            if(data.section === "head"){
                if(data.column.index >= 2 && data.column.index < 2 + n && cols[data.column.index - 2]) pdfDrawTestHead(doc, x, y, w, h, cols[data.column.index - 2], headOpt);
                doc.setDrawColor(...CYN);
                doc.setLineWidth(0.7);
                doc.line(x, y + h, x + w, y + h);
                return;
            }
            if(data.section !== "body") return;

            let r = combined ? m.rows[data.row.index] : null;
            let top = !!(r && r.rank && r.rank <= 3);

            doc.setDrawColor(...LINE);
            doc.setLineWidth(0.2);
            doc.line(x, y + h, x + w, y + h);

            if(data.column.index === 0 && top){
                doc.setFillColor(...strong[r.rank]);
                doc.rect(x, y, 1.4, h, "F");
                doc.circle(x + w / 2, y + h / 2, 4.6, "F");
                doc.setFont("helvetica", "bold");
                doc.setFontSize(7.5);
                doc.setTextColor(...medalText[r.rank]);
                doc.text(r.posLabel, x + w / 2, y + h / 2 + 1.1, { align: "center" });
            }

            // "A" pill for absent
            if(data.column.index >= markLo && data.column.index < markHi && c.raw === "A"){
                let cx = x + w / 2, cyy = y + h / 2;
                if(top) doc.setFillColor(255, 255, 255); else doc.setFillColor(72, 22, 40);
                doc.roundedRect(cx - 4, cyy - 3, 8, 6, 3, 3, "F");
                doc.setFont("courier", "bold");
                doc.setFontSize(10);
                if(top) doc.setTextColor(200, 35, 35); else doc.setTextColor(255, 120, 120);
                doc.text("A", cx, cyy + 1.3, { align: "center" });
            }
        }
    });

    // ---- Footer: page number only ----
    let total = doc.internal.getNumberOfPages();
    for(let i = 1; i <= total; i++){
        doc.setPage(i);
        doc.setDrawColor(...LINE);
        doc.setLineWidth(0.3);
        doc.line(margin, H - 11, W - margin, H - 11);
        doc.setFont("courier", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(...MUTED);
        doc.text("PAGE " + i + " / " + total, W - margin, H - 6.5, { align: "right" });
    }

    doc.save("Physics Class " + currentClass + rangeTag() + " Result.pdf");
}



// ===================== PNG (one single image, dark modern design) =====================
function buildDarkPngSpec(){
    let combined = true;
    let m = combinedModel;
    let cols = combined ? m.cols : tests;
    let n = cols.length;

    const CYN = "#22d3ee", VIO = "#8b5cf6";
    const tint   = { 1: "#fecdcd", 2: "#fef0aa", 3: "#bbf5d0" };
    const strong = { 1: "#ef4444", 2: "#facc15", 3: "#22c55e" };
    const medalTx = { 1: "#ffffff", 2: "#503400", 3: "#ffffff" };

    let posW = combined ? 100 : 76, nameW = 300, testW = 150, sumW = 128, pctW = 140;
    let tableW = posW + nameW + n * testW + (combined ? 2 * sumW + pctW : 0);
    let pad = 40;
    let list = combined ? m.rows : students;
    let gapX = 28, hdrEst = 300, RHrow = 62, K = 1, bestD = 1e9;
    for(let kk = 1; kk <= 4 && kk <= Math.max(1, list.length); kk++){
        let ratio = (kk * tableW + (kk - 1) * gapX + 2 * pad) / (hdrEst + Math.ceil(list.length / kk) * RHrow + 2 * pad);
        let d = Math.abs(Math.log(ratio / 0.46));          // 0.46 = typical tall phone screen (width / height)
        if(d < bestD){ bestD = d; K = kk; }
    }
    let totalW = Math.max(K * tableW + (K - 1) * gapX, 900) + pad * 2;
    // Make the image the same shape as a phone screen (width / height = 0.46) so there is no black on the sides:
    //  - too narrow  -> columns are stretched wider (rows a little tighter), so the list reaches the edges
    //  - too wide    -> rows are made taller
    let rowH = 62;
    {
        let per = Math.ceil(list.length / K);
        let ratio0 = totalW / (hdrEst + per * 62 + 2 * pad);
        if(ratio0 < 0.46){
            rowH = 54;
            let Hn = hdrEst + per * rowH + 2 * pad;
            let sx = Math.min(1.7, Math.max(1, (0.46 * Hn - 2 * pad - (K - 1) * gapX) / (K * tableW)));
            posW = Math.round(posW * sx); nameW = Math.round(nameW * sx); testW = Math.round(testW * sx);
            sumW = Math.round(sumW * sx); pctW = Math.round(pctW * sx);
            tableW = posW + nameW + n * testW + (combined ? 2 * sumW + pctW : 0);
            totalW = Math.max(K * tableW + (K - 1) * gapX, 900) + pad * 2;
        } else {
            let need = (totalW / 0.46 - hdrEst - 2 * pad) / Math.max(1, per);
            if(need > 62) rowH = Math.min(150, Math.round(need));   // rows grow so the list reaches the bottom (no empty space)
        }
    }

    let mono = "'JetBrains Mono', 'Courier New', monospace";
    let sans = "Arial, Helvetica, sans-serif";

    function cell(w, inner, extra){
        return `<div style="width:${w}px;flex:0 0 ${w}px;box-sizing:border-box;padding:0 6px;display:flex;align-items:center;justify-content:center;text-align:center;${extra || ""}">${inner}</div>`;
    }
    function pill(dark){
        return `<span style="display:inline-block;min-width:40px;padding:5px 16px;border-radius:999px;` +
               `background:${dark ? "#ffffff" : "#481628"};color:${dark ? "#c8231f" : "#ff7878"};` +
               `font-family:${mono};font-weight:bold;font-size:22px;line-height:24px;">A</span>`;
    }

    // ---- header block ----
    let html = `
      <div style="height:6px;border-radius:3px;background:linear-gradient(90deg,${CYN},${VIO});margin-bottom:30px;"></div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:32px;">
        <div>
          <div style="font-family:${mono};font-weight:bold;font-size:18px;letter-spacing:3px;color:${CYN};margin-bottom:10px;">PHYSICS &nbsp;|&nbsp; TEST RESULT</div>
          <div style="font-family:${sans};font-weight:bold;font-size:56px;color:#ffffff;line-height:1.1;">${combined ? "Physics Combined Result" + rangeTitle() : "Class Result"}</div>
        </div>
        <div style="font-family:${mono};font-weight:bold;font-size:26px;color:${CYN};border:2px solid ${CYN};background:#0e1e42;border-radius:999px;padding:10px 30px;">${escHTML(currentClass.toUpperCase())}</div>
      </div>`;

    // ---- table head ----
    let head = cell(posW, combined ? "POSITION" : "SR#", "font-size:17px;") +
               cell(nameW, "STUDENT NAME", "font-size:17px;");
    cols.forEach(t => {
        head += cell(testW,
            `<div><div style="font-size:21px;line-height:25px;">${escHTML(t.name)}</div>` +
            `<div style="font-size:19px;line-height:23px;font-weight:bold;color:#ffffff;margin-top:6px;">Date: ${escHTML(t.date)}</div>` +
            `<div style="display:inline-block;font-size:21px;line-height:25px;font-weight:bold;color:#08122e;background:${CYN};border-radius:999px;padding:2px 16px;margin-top:6px;">T.M: ${escHTML(t.tm)}</div></div>`);
    });
    if(combined){
        head += cell(sumW, "GRAND<br>TOTAL", "font-size:17px;") +
                cell(sumW, "OBTAINED", "font-size:17px;") +
                cell(pctW, "PERCENTAGE", "font-size:17px;");
    }
    let headRow = `<div style="width:${tableW}px;flex:0 0 ${tableW}px;display:flex;background:#152148;border-bottom:3px solid ${CYN};color:#fff;font-family:${sans};font-weight:bold;min-height:132px;border-radius:10px 10px 0 0;">${head}</div>`;
    html += `<div style="display:flex;gap:${gapX}px;">${new Array(K + 1).join(headRow)}</div>`;

    // ---- rows ----
    let headHtml = html, rowsHtml = [];
    list.forEach((r, i) => {
        let top = combined && r.rank && r.rank <= 3;
        let bg = top ? tint[r.rank] : (i % 2 === 0 ? "#0d152e" : "#111b3a");
        let fg = top ? "#122036" : "#e2e8f8";

        let posInner;
        if(top){
            posInner = `<span style="display:inline-block;width:44px;height:44px;line-height:44px;border-radius:50%;background:${strong[r.rank]};color:${medalTx[r.rank]};font-family:${sans};font-weight:bold;font-size:18px;">${escHTML(r.posLabel)}</span>`;
        } else {
            posInner = escHTML(combined ? r.posLabel : String(i + 1));
        }

        let name = combined ? r.exportName : getExportName(r.name);
        let marks = combined ? r.cells : cols.map((c, j) => (r.marks[j] === undefined || r.marks[j] === null) ? "" : String(r.marks[j]));

        let line = cell(posW, posInner, `font-family:${sans};font-weight:bold;font-size:21px;color:${top ? "#122036" : "#8090b8"};`) +
                   cell(nameW, escHTML(name), `justify-content:flex-start;text-align:left;font-family:${sans};font-weight:bold;font-size:23px;padding-left:12px;`);
        marks.forEach(v => {
            line += cell(testW, v === "A" ? pill(top) : escHTML(v), `font-family:${mono};font-weight:bold;font-size:24px;`);
        });
        if(combined){
            let p = r.ranked ? Math.max(0, Math.min(100, r.pctKey / 1e6)) : 0;
            let pcol = top ? "#122036" : (p >= 75 ? "#34d399" : (p >= 50 ? "#fbbf24" : "#f87171"));
            line += cell(sumW, escHTML(fmtNum(r.grand)), `font-family:${mono};font-weight:bold;font-size:24px;color:${top ? "#122036" : "#8090b8"};`) +
                    cell(sumW, escHTML(fmtNum(r.obtained)), `font-family:${mono};font-weight:bold;font-size:25px;`) +
                    cell(pctW, escHTML(r.pctText), `font-family:${mono};font-weight:bold;font-size:27px;color:${r.ranked ? pcol : "#8090b8"};`);
        }

        rowsHtml.push(`<div style="box-sizing:border-box;width:${tableW}px;display:flex;height:${rowH}px;background:${bg};color:${fg};border-bottom:1px solid ${top ? "rgba(18,32,54,0.15)" : "#22305c"};${top ? "border-left:6px solid " + strong[r.rank] + ";box-sizing:border-box;" : ""}">${line}</div>`);
    });
    if(K > 1){
        let per = Math.ceil(rowsHtml.length / K), bands = [];
        for(let b = 0; b < per; b++){
            let cells = [];
            for(let c = 0; c < K; c++){
                let idx = c * per + b;
                cells.push(idx < rowsHtml.length ? rowsHtml[idx] : `<div style="width:${tableW}px;flex:0 0 ${tableW}px;height:${rowH}px;"></div>`);
            }
            bands.push(`<div style="display:flex;gap:${gapX}px;height:${rowH}px;">${cells.join("")}</div>`);
        }
        rowsHtml = bands;
    }
    html = headHtml + rowsHtml.join("");

    return {
        parts: { head: headHtml, rows: rowsHtml },
        tileBg: "#0a1028",
        rowH: rowH,
        html: html,
        width: totalW,
        pad: pad,
        background: "linear-gradient(160deg,#080d20,#0d1533)",
        canvasBg: "#080d20"
    };
}

// Original classic look (white page, navy header) for Boys / Girls classes
function buildClassicPngSpec(){
    // Same look as the individual-class PDF: white page, class accent colour (Boys = blue, Girls = rose)
    let girls = /Girls$/i.test(currentClass);
    const INK = "#0f172a", MUTED = "#64748b", LINE = "#e2e8f0", ZEBRA = "#f8fafc";
    const ACC = girls ? "#be185d" : "#2563eb", ACC_DK = girls ? "#831843" : "#1e40af", ACC_SF = girls ? "#fdf2f8" : "#eff6ff";

    let n = tests.length;
    let posW = 76, nameW = 250, testW = 150;
    let tableW = posW + nameW + n * testW;
    if(tableW < 800){ nameW += 800 - tableW; tableW = 800; }
    let pad = 32;
    let sans = "Arial, Helvetica, sans-serif";

    function cell(w, inner, extra){
        return `<div style="width:${w}px;flex:0 0 ${w}px;box-sizing:border-box;padding:6px 8px;display:flex;align-items:center;justify-content:center;text-align:center;${extra || ""}">${inner}</div>`;
    }
    function pill(){
        return `<span style="display:inline-block;min-width:34px;padding:5px 14px;border-radius:999px;background:#fee2e2;color:#b91c1c;font-family:${sans};font-weight:bold;font-size:17px;line-height:20px;">A</span>`;
    }

    // header: accent bar on top, dark title, short accent underline, class pill on the right
    let html = `
      <div style="height:6px;background:${ACC};margin:-${pad}px -${pad}px 26px;"></div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;width:${tableW}px;">
        <div>
          <div style="font-family:${sans};font-weight:bold;font-size:15px;letter-spacing:2px;color:${ACC};margin-bottom:6px;">PHYSICS &nbsp;|&nbsp; TEST RESULT</div>
          <div style="font-family:${sans};font-weight:bold;font-size:44px;color:${INK};line-height:1.1;">Physics Test Result</div>
        </div>
        <div style="font-family:${sans};font-weight:bold;font-size:24px;color:${ACC_DK};background:${ACC_SF};border:2px solid ${ACC};border-radius:999px;padding:9px 28px;">${escHTML(currentClass)}</div>
      </div>
      <div style="display:flex;width:${tableW}px;margin:16px 0 26px;"><div style="width:48px;height:4px;background:${ACC};"></div><div style="flex:1;height:2px;margin-top:1px;background:${LINE};"></div></div>`;

    let head = cell(posW, "Sr#", "font-size:15px;") +
               cell(nameW, "Student Name", "font-size:15px;justify-content:flex-start;text-align:left;padding-left:14px;");
    tests.forEach(t => {
        head += cell(testW,
            `<div style="line-height:1.3;"><div style="font-size:18px;">${escHTML(t.name)}</div>` +
            `<div style="font-size:16px;font-weight:bold;margin-top:5px;">Date: ${escHTML(t.date)}</div>` +
            `<div style="display:inline-block;font-size:18px;font-weight:bold;color:${ACC_DK};background:#ffffff;border-radius:999px;padding:2px 14px;margin-top:6px;">T.M: ${escHTML(t.tm)}</div></div>`);
    });
    html += `<div style="width:${tableW}px;display:flex;background:${ACC};color:#ffffff;font-family:${sans};font-weight:bold;min-height:118px;border-bottom:3px solid ${ACC_DK};box-sizing:border-box;">${head}</div>`;

    students.forEach((s, i) => {
        let bg = (i % 2 === 0) ? "#ffffff" : ZEBRA;
        let line = cell(posW, String(i + 1), `font-family:${sans};font-weight:bold;font-size:16px;color:${MUTED};`) +
                   cell(nameW, escHTML(getExportName(s.name)), `justify-content:flex-start;text-align:left;font-family:${sans};font-weight:bold;font-size:17px;color:${INK};padding-left:14px;border-right:1px solid ${LINE};`);
        tests.forEach((t, j) => {
            let v = (s.marks[j] === undefined || s.marks[j] === null) ? "" : String(s.marks[j]);
            line += cell(testW, v === "A" ? pill() : escHTML(v), `font-family:${sans};font-size:17px;color:${INK};`);
        });
        html += `<div style="width:${tableW}px;display:flex;min-height:46px;background:${bg};border-bottom:1px solid ${LINE};box-sizing:border-box;">${line}</div>`;
    });

    html += `<div style="width:${tableW}px;margin-top:22px;padding-top:12px;border-top:1px solid ${LINE};display:flex;justify-content:space-between;font-family:${sans};font-weight:bold;font-size:14px;">
      <span style="color:${MUTED};">Physics Test Result &nbsp;|&nbsp; ${escHTML(currentClass)}</span>
      <span style="color:${ACC};">${students.length} students</span></div>`;

    return {
        html: html,
        width: tableW + pad * 2,
        pad: pad,
        background: "#ffffff",
        canvasBg: "#ffffff"
    };
}

// ===================== PNG: TILED ENGINE (very high resolution, any size) =====================
// Phones cap one canvas at ~16 million pixels, which forced low quality on big Combined lists.
// Here the table is drawn in strips at 3x-4x and the PNG file is written by hand strip by strip,
// so the final image can be far larger than any canvas. Pixels stay sharp when zooming.
let pngForceLegacy = false;
let pngLastError = "";
const _crcT = (function(){
    let t = new Uint32Array(256);
    for(let n = 0; n < 256; n++){ let c = n; for(let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c >>> 0; }
    return t;
})();
function _crc(buf){
    let c = 0xFFFFFFFF;
    for(let i = 0; i < buf.length; i++) c = _crcT[(c ^ buf[i]) & 255] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
}
function _pngChunk(type, data){
    let out = new Uint8Array(12 + data.length), dv = new DataView(out.buffer);
    dv.setUint32(0, data.length);
    for(let i = 0; i < 4; i++) out[4 + i] = type.charCodeAt(i);
    out.set(data, 8);
    dv.setUint32(8 + data.length, _crc(out.subarray(4, 8 + data.length)));
    return out;
}
function pngStreamer(w){
    let cs = new CompressionStream("deflate"), writer = cs.writable.getWriter(), reader = cs.readable.getReader();
    let parts = [], h = 0;
    let collect = (async () => { for(;;){ let r = await reader.read(); if(r.done) break; parts.push(r.value); } })();
    return {
        // rgba = ImageData.data of `bh` rows, `w` pixels wide
        async addRows(rgba, bh){
            let raw = new Uint8Array(bh * (1 + w * 3)), o = 0;
            for(let r = 0; r < bh; r++){
                raw[o++] = 0;
                let p = r * w * 4;
                for(let x = 0; x < w; x++){ raw[o++] = rgba[p]; raw[o++] = rgba[p + 1]; raw[o++] = rgba[p + 2]; p += 4; }
            }
            await writer.write(raw);
            h += bh;
        },
        async finish(){
            await writer.close();
            await collect;
            let ihdr = new Uint8Array(13), dv = new DataView(ihdr.buffer);
            dv.setUint32(0, w); dv.setUint32(4, h); ihdr[8] = 8; ihdr[9] = 2;
            let list = [new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), _pngChunk("IHDR", ihdr)];
            parts.forEach(p => list.push(_pngChunk("IDAT", p)));
            list.push(_pngChunk("IEND", new Uint8Array(0)));
            return new Blob(list, { type: "image/png" });
        }
    };
}

async function tiledPNG(spec){
    let live = null;
    if(typeof CompressionStream === "undefined"){ pngLastError = "this browser does not support HD mode - update Chrome / Safari"; return false; }
    function mk(inner, top, bottom){
        let el = document.createElement("div");
        el.style.cssText = "position:fixed;top:-99999px;left:-99999px;box-sizing:border-box;width:" + spec.width + "px;padding:" +
            top + "px " + spec.pad + "px " + bottom + "px;background:" + spec.tileBg + ";";
        el.innerHTML = inner;
        document.body.appendChild(el);
        live = el;
        return el;
    }
    function drop(){ if(live && live.parentNode) live.parentNode.removeChild(live); live = null; }

    try{
        let W = spec.width, pad = spec.pad, rows = spec.parts.rows, n = rows.length, RH = spec.rowH || 62;

        let probe = mk(spec.parts.head, pad, 0);
        let hH = Math.ceil(probe.getBoundingClientRect().height);
        drop();

        let H0 = hH + n * RH + pad;
        let extra = 0;   // no empty space under the list
        let H = H0 + extra;
        let s = 2, cand = [6, 5, 4, 3, 2];
        for(let k = 0; k < cand.length; k++){
            let c = cand[k];
            if(W * H * c * c <= 140e6 && H * c <= 32000 && W * c <= 16000 && W * c * c * (hH + RH) <= 15e6){ s = c; break; }
        }

        let maxCssH = Math.max(hH + RH, Math.floor(14e6 / (W * s * s)));   // each strip stays well below the phone canvas limit
        let strips = [], i = 0, first = true;
        while(first || i < n){
            let h = first ? hH : 0, cnt = 0;
            while(i + cnt < n && h + RH <= maxCssH){ h += RH; cnt++; }
            strips.push({ first: first, a: i, b: i + cnt });
            i += cnt; first = false;
        }

        let png = pngStreamer(W * s);
        for(let k = 0; k < strips.length; k++){
            let st = strips[k], last = (k === strips.length - 1);
            toast("Creating HD PNG… " + (k + 1) + " / " + strips.length);
            await new Promise(r => setTimeout(r, 30));          // let the toast paint
            let el = mk((st.first ? spec.parts.head : "") + rows.slice(st.a, st.b).join(""), st.first ? pad : 0, last ? pad + extra : 0);
            el.style.height = Math.ceil(el.getBoundingClientRect().height) + "px";
            let canvas = await html2canvas(el, { scale: s, useCORS: true, scrollX: 0, scrollY: 0, backgroundColor: spec.tileBg });
            drop();
            if(canvas.width !== W * s) throw new Error("unexpected strip width");
            let ctx = canvas.getContext("2d");
            if(!ctx || ctx.getImageData(canvas.width >> 1, canvas.height >> 1, 1, 1).data[3] === 0) throw new Error("blank strip");
            for(let y = 0; y < canvas.height; y += 200){
                let bh = Math.min(200, canvas.height - y);
                await png.addRows(ctx.getImageData(0, y, canvas.width, bh).data, bh);
            }
            canvas.width = canvas.height = 0;
        }

        let blob = await png.finish();
        let url = URL.createObjectURL(blob), link = document.createElement("a");
        link.download = "Physics Class " + currentClass + rangeTag() + " Result.png";
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 8000);
        toast("HD PNG downloaded (" + (W * s) + " px wide, " + (blob.size / 1048576).toFixed(1) + " MB).");
        return true;
    } catch(err){
        console.error("Tiled PNG failed, using fallback:", err);
        pngLastError = (err && err.message) ? err.message : String(err);
        drop();
        return false;
    }
}

// ===================== PNG (one single image) =====================
function downloadPNG(){
  try{
    let combined = isCombined(currentClass);
    if(combined) loadCombined();          // same fresh data as the screen

    // Combined lists: dark modern design. Boys / Girls classes: original classic design.
    let spec = combined ? buildDarkPngSpec() : buildClassicPngSpec();

    // Combined: tiled, ultra-sharp PNG (no phone canvas limit). Old single-canvas method stays as fallback.
    if(combined && spec.parts && !pngForceLegacy){
        tiledPNG(spec).then(ok => {
            if(!ok){
                showModal('<h3>HD PNG could not run</h3><p class="warn">Reason: ' + escHTML(pngLastError || "unknown") +
                    '.<br>A standard-quality PNG is being downloaded instead. Please tell the developer this reason.</p>' +
                    '<div class="modal-actions"><button class="btn btn-primary" onclick="hideModal()">OK</button></div>');
                pngForceLegacy = true; try{ downloadPNG(); } finally { pngForceLegacy = false; } }
        });
        return;
    }

    let wrapper = document.createElement("div");
    wrapper.style.cssText = "position:fixed;top:-99999px;left:-99999px;box-sizing:border-box;" +
        "width:" + spec.width + "px;padding:" + spec.pad + "px;background:" + spec.background + ";";
    wrapper.innerHTML = spec.html;
    document.body.appendChild(wrapper);

    // ONE single, very sharp image. Start at the highest quality the browser can
    // handle and step down automatically if a device cannot draw that large.
    let fullH = wrapper.offsetHeight || 1;
    let fullW = wrapper.offsetWidth || spec.width;
    let best = Math.min(4, 16000 / Math.max(fullW, fullH), Math.sqrt(120e6 / (fullW * fullH)));
    let scales = [];
    for(let sc = best; sc >= 1; sc *= 0.75) scales.push(sc);
    if(scales.length === 0 || scales[scales.length - 1] > 1) scales.push(Math.min(1, best));

    function looksBlank(canvas){
        try{
            let ctx = canvas.getContext("2d");
            if(!ctx) return true;
            let x = Math.floor(canvas.width / 2), y = Math.floor(canvas.height / 2);
            return ctx.getImageData(x, y, 1, 1).data[3] === 0;
        } catch(e){ return false; }
    }

    function finish(){
        if(wrapper.parentNode) document.body.removeChild(wrapper);
    }

    function attempt(k){
        if(k >= scales.length){
            finish();
            toast("PNG failed: image too large for this device.");
            return;
        }
        html2canvas(wrapper, { scale: scales[k], useCORS: true, scrollY: 0, backgroundColor: spec.canvasBg }).then(canvas => {
            if(looksBlank(canvas)){ attempt(k + 1); return; }
            canvas.toBlob(function(blob){
                if(!blob){ attempt(k + 1); return; }
                finish();
                let url = URL.createObjectURL(blob);
                let link = document.createElement("a");
                link.download = "Physics Class " + currentClass + rangeTag() + " Result.png";
                link.href = url;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setTimeout(() => URL.revokeObjectURL(url), 4000);
                toast("PNG downloaded.");
            }, "image/png");
        }).catch(err => {
            console.error(err);
            attempt(k + 1);
        });
    }
    attempt(0);
  } catch(err){
    console.error(err);
    toast("PNG failed: " + (err && err.message ? err.message : "unknown error"));
  }
}


// ===================== COMBINED RESULT (9th / 10th) =====================
// Built fresh from the Boys + Girls data on every open/refresh.
// Nothing is copied or stored, so it can never go stale or duplicate.
let combinedModel = null;
let combinedRange = "all";   // "all" | 3 | 5

function isCombined(cls){
    return /\sCombined$/.test(cls || "");
}

// Builds the 3 separate Combined lists (tabs) by itself if the page does not have them
function ensureRangeUI(){
    if(!document.getElementById("rangeStyle")){
        let st = document.createElement("style"); st.id = "rangeStyle";
        st.textContent =
        "#rangeBar{display:block;margin:0 0 22px;padding:16px;border-radius:18px;background:rgba(6,18,42,.75);border:1px solid rgba(147,197,253,.25)}" +
        "#rangeBar .rangeHead{display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 16px;margin-bottom:12px;color:#f1f6ff}" +
        "#rangeBar .rangeHead h3{margin:0;font-size:20px}#rangeInfo{font-size:13px;color:#9db4d8}" +
        "#rangeBar .rangeTabs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}" +
        "#rangeBar .rangeTab{display:flex;flex-direction:column;align-items:center;gap:2px;padding:12px 6px;border:1px solid rgba(147,197,253,.25);border-radius:12px;background:transparent;color:#9db4d8;cursor:pointer;font:inherit}" +
        "#rangeBar .rangeTab b{font-size:15px}#rangeBar .rangeTab small{font-size:11.5px;opacity:.8}" +
        "#rangeBar .rangeTab.on{background:linear-gradient(135deg,#2563eb,#22d3ee);color:#fff;border-color:transparent}" +
        ".combinedStats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:18px}" +
        ".statCard{padding:12px 14px;border-radius:12px;background:rgba(10,26,58,.6);border:1px solid rgba(147,197,253,.2);color:#f1f6ff}" +
        ".statCard small{display:block;font-size:12px;color:#9db4d8}.searchBox{width:100%;box-sizing:border-box;margin-bottom:16px;padding:12px 16px;border-radius:12px;border:1px solid rgba(147,197,253,.25);background:rgba(10,26,58,.65);color:#f1f6ff;font:inherit}" +
        "@media(max-width:560px){#rangeBar .rangeTab small{display:none}}";
        document.head.appendChild(st);
    }
    let wrap = head && head.closest("table") ? head.closest("table").parentElement : null;
    if(!wrap || !wrap.parentNode) return;
    function make(tag, id, cls, html){
        if(document.getElementById(id)) return;
        let el = document.createElement(tag); el.id = id; el.className = cls; if(html) el.innerHTML = html;
        wrap.parentNode.insertBefore(el, wrap);
        return el;
    }
    let rb = make("section", "rangeBar", "rangeBar",
        '<div class="rangeHead"><h3 id="rangeTitle"></h3><span id="rangeInfo"></span></div><div class="rangeTabs" role="tablist">' +
        '<button type="button" role="tab" class="rangeTab" data-range="3"><b>Last 3 Tests</b><small>Combined List</small></button>' +
        '<button type="button" role="tab" class="rangeTab" data-range="5"><b>Last 5 Tests</b><small>Combined List</small></button>' +
        '<button type="button" role="tab" class="rangeTab" data-range="all"><b>All Tests</b><small>Combined List</small></button></div>');
    if(rb) rb.addEventListener("click", e => { let b = e.target.closest("[data-range]"); if(b) setRange(b.dataset.range); });
    make("div", "combinedStats", "combinedStats");
    let sb = make("input", "searchBox", "searchBox"); 
    if(sb){ sb.type = "search"; sb.placeholder = "Search student name..."; sb.addEventListener("input", applySearch); }
}

function setCombinedMode(on){
    ensureRangeUI();
    ["btnAddTest", "btnAddStudent", "btnSave"].forEach(id => {
        let el = document.getElementById(id);
        if(el) el.style.display = on ? "none" : "";
    });
    let rb = document.getElementById("rangeBar");
    if(rb) rb.style.display = on ? "" : "none";
    renderStats();
    updateRangeUI();
}

function setRange(r){
    combinedRange = (r === "all") ? "all" : Number(r);
    if(isCombined(currentClass)) loadCombined();
}
function updateRangeUI(){
    let names = { "3": "Last 3 Tests Combined List", "5": "Last 5 Tests Combined List", "all": "All Tests Combined List" };
    document.querySelectorAll("#rangeBar [data-range]").forEach(b => {
        let on = String(b.dataset.range) === String(combinedRange);
        b.classList.toggle("on", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
    });
    let live = isCombined(currentClass) && combinedModel;
    let t = document.getElementById("rangeTitle");
    if(t) t.textContent = live ? currentClass.replace(" Combined", "") + " \u2013 " + names[String(combinedRange)] : "";
    let info = document.getElementById("rangeInfo");
    if(info) info.textContent = live ? "Showing " + combinedModel.cols.length + " of " + combinedModel.total + " tests" : "";
}
function rangeTag(){ return (isCombined(currentClass) && combinedRange !== "all") ? " (Last " + combinedRange + " Tests)" : ""; }
function rangeTitle(){ return (isCombined(currentClass) && combinedRange !== "all") ? " - Last " + combinedRange + " Tests" : ""; }

function renderStats(){
    let el = document.getElementById("combinedStats");
    if(!el) return;
    if(!isCombined(currentClass) || !combinedModel){ el.style.display = "none"; el.innerHTML = ""; return; }
    let m = combinedModel, rk = m.rows.filter(r => r.ranked);
    let avg = rk.length ? rk.reduce((a, r) => a + r.pctKey / 1e6, 0) / rk.length : 0;
    let c = (k, v) => '<div class="statCard"><small>' + k + '</small><b>' + v + '</b></div>';
    el.style.display = "";
    el.innerHTML = c("Students", m.rows.length) + c("Tests shown", m.cols.length + " / " + m.total) +
                   c("Class average", avg.toFixed(1) + "%") + c("Topper", rk[0] ? escHTML(rk[0].name) + " · " + rk[0].pctText : "-");
}
function applySearch(){
    let box = document.getElementById("searchBox"), q = ((box && box.value) || "").trim().toLowerCase();
    body.querySelectorAll("tr").forEach(tr => {
        let n = tr.children[1];
        tr.style.display = (!q || (n && n.textContent.toLowerCase().indexOf(q) !== -1)) ? "" : "none";
    });
}
function normMark(i, j, el){
    let v = el.value.trim();
    if(v === "" || v === "A") return;
    let c = cleanMark(v);
    if(c !== v){ el.value = c; students[i].marks[j] = c; saveData(); }
}

// Reads a class's data without touching the globals or saving anything
function getClassData(cls){
    let saved = localStorage.getItem(cls);
    if(saved){
        try{
            let d = JSON.parse(saved);
            return { students: d.students || [], tests: d.tests || [] };
        } catch(e){}
    }
    if(defaultClassData[cls]){
        return JSON.parse(JSON.stringify(defaultClassData[cls]));
    }
    return {
        students: (classes[cls] || []).map(n => ({ name: n, marks: [] })),
        tests: []
    };
}

// "A", blank or invalid marks count as 0 obtained
function numVal(v){
    let s = String(v === undefined || v === null ? "" : v).trim();
    if(s === "") return 0;
    let n = Number(s);
    return (isNaN(n) || !isFinite(n)) ? 0 : n;
}

function fmtNum(n){
    return String(Math.round(n * 100) / 100);
}

// Any way a zero can come out of handwriting / OCR -> "00".
// Handles: 0  0)  (0)  [0]  ()  )  O  o  Ø  ∅  ○  zero  nil  0.0  and Urdu / Arabic / full-width digits.
function cleanMark(raw){
    let s = String(raw === undefined || raw === null ? "" : raw).trim();
    s = s.replace(/[\u0660-\u0669]/g, d => d.charCodeAt(0) - 0x660)
         .replace(/[\u06F0-\u06F9]/g, d => d.charCodeAt(0) - 0x6F0)
         .replace(/[\uFF10-\uFF19]/g, d => d.charCodeAt(0) - 0xFF10);
    if(/^[()\[\]{}]+$/.test(s.replace(/\s+/g, ""))) return s === "" ? "" : "00";   // only brackets = a drawn zero
    s = s.replace(/[()\[\]{}<>|"'\u201C\u201D\u2018\u2019]/g, "").trim();
    const ZERO_RE = /^(?:0+(?:[.,]0+)?|[oO]+|[\u00F8\u00D8\u2205\u2300\u25CB\u25EF\u00B0]+|(?:zero|nil|\u0635\u0641\u0631)(?:\s*0+)?)$/i;
    let z = s.replace(/[.,;:!_\s]+$/, "").trim();            // "zero." "0," "0 ." still mean zero
    if(ZERO_RE.test(z)) return "00";
    let fr = z.match(/^(.+?)\s*\/\s*\d+(?:[.,]\d+)?$/);     // "0/10", "zero/10"
    if(fr && ZERO_RE.test(fr[1].trim())) return "00";
    return s;
}

function ordinal(n){
    let v = n % 100;
    if(v >= 11 && v <= 13) return n + "th";
    switch(n % 10){
        case 1: return n + "st";
        case 2: return n + "nd";
        case 3: return n + "rd";
        default: return n + "th";
    }
}

function escHTML(s){
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildCombined(cls){
    let grade = gradeOf(cls);
    let sources = [grade + " Boys", grade + " Girls"];

    // NOTE: Combined does NOT merge the Boys + Girls test lists together.
    // It takes ONE section's tests as the base and fills in the obtained marks
    // of ALL students (Boys + Girls) against those same tests.
    let data = sources.map(src => {
        let d = getClassData(src);
        return dedupeSection({ students: d.students || [], tests: d.tests || [] });
    });

    // ---- base = the section that has the tests (Boys on a tie) ----
    let baseIdx = data[1].tests.length > data[0].tests.length ? 1 : 0;
    let otherIdx = 1 - baseIdx;

    // group = ONE common test column; parts = where its marks live in each section
    let groups = data[baseIdx].tests.map((t, j) => ({
        test: t,
        parts: [{ si: baseIdx, j }]
    }));

    // ---- match the other section's tests to the base tests (never duplicate) ----
    let taken = [];           // groups already matched by a test of the other section
    let lastPos = -1;
    data[otherIdx].tests.forEach((t, j) => {
        let found = null;
        let tiers = [
            g => testKey(g.test) === testKey(t),                                     // same name + date + T.M.
            g => !!t.date && dateTmKey(g.test) === dateTmKey(t),                     // same date + T.M.
            g => normTestName(g.test.name) === normTestName(t.name),                 // same name
            g => !!t.date && String(g.test.date || "").trim() === String(t.date).trim() // same date
        ];
        for(let q = 0; q < tiers.length && !found; q++){
            found = groups.find(g => taken.indexOf(g) === -1 && tiers[q](g)) || null;
        }
        if(found){
            found.parts.push({ si: otherIdx, j });
            taken.push(found);
            lastPos = groups.indexOf(found);
        } else {
            // a test that really has no match anywhere: keep it as its own column
            let g = { test: t, parts: [{ si: otherIdx, j }] };
            groups.splice(lastPos + 1, 0, g);
            taken.push(g);
            lastPos = lastPos + 1;
        }
    });

    // ---- clean up old data: two columns that are the same test, one filled only by
    //      Boys and the other only by Girls (and share the same date, or the same name + T.M.), become ONE column ----
    function realSections(g){
        let set = {};
        g.parts.forEach(p => {
            data[p.si].students.forEach(s => { if(isRealMark(s.marks[p.j])) set[p.si] = true; });
        });
        return set;
    }
    let merged = true;
    while(merged){
        merged = false;
        outer:
        for(let a = 0; a < groups.length; a++){
            for(let b = a + 1; b < groups.length; b++){
                let A = groups[a], B = groups[b];
                let sa = realSections(A), sb = realSections(B);
                let overlap = (sa[0] && sb[0]) || (sa[1] && sb[1]);
                let sameDate = !!A.test.date && String(A.test.date).trim() === String(B.test.date || "").trim();
                let sameName = normTestName(A.test.name) === normTestName(B.test.name) && normTM(A.test.tm) === normTM(B.test.tm);
                if(!overlap && (sameDate || sameName)){
                    A.parts = A.parts.concat(B.parts);
                    groups.splice(b, 1);
                    merged = true;
                    break outer;
                }
            }
        }
    }

    let totalTests = groups.length;
    if(combinedRange !== "all" && groups.length > combinedRange){
        // "latest" = newest by date (ties / missing dates fall back to column order)
        let order = groups.map((g, i) => ({ i: i, d: String(g.test.date || "") }));
        order.sort((a, b) => a.d === b.d ? a.i - b.i : (a.d < b.d ? -1 : 1));
        let keep = order.slice(-combinedRange).map(o => o.i).sort((a, b) => a - b);
        groups = keep.map(i => groups[i]);
    }

    let cols = groups.map(g => ({
        key: testKey(g.test), name: g.test.name, date: g.test.date, tm: g.test.tm
    }));

    // ONE Grand Total for everyone: sum of the actual T.M of EVERY test column
    let grandAll = cols.reduce((sum, c) => sum + numVal(c.tm), 0);

    // ---- every student of Boys + Girls gets his/her obtained marks in the common columns ----
    let rows = [];
    data.forEach((d, si) => {
        d.students.forEach(s => {
            let cells = groups.map(g => {
                let mine = g.parts.filter(p => p.si === si);
                for(let q = 0; q < mine.length; q++){
                    if(isRealMark(s.marks[mine[q].j])) return String(s.marks[mine[q].j]);
                }
                for(let q = 0; q < mine.length; q++){
                    let v = s.marks[mine[q].j];
                    if(v !== undefined && v !== null && String(v).trim() !== "") return String(v);
                }
                return "A";   // did not appear in this test = Absent
            });

            let obtained = cells.reduce((sum, v) => sum + numVal(v), 0);
            let grand = grandAll;
            let pct = grand > 0 ? (obtained / grand) * 100 : 0;
            let src = sources[si];

            rows.push({
                name: getDisplayName(s.name, src),
                exportName: getExportName(s.name),
                sortName: getDisplayName(s.name, src),
                cells, grand, obtained,
                ranked: grand > 0,
                pctKey: Math.round(pct * 1e6),
                pctText: grand > 0 ? (+pct.toFixed(2)) + "%" : "-",
                rank: null,
                posLabel: "-"
            });
        });
    });

    // Highest percentage first; students with no tests go last
    rows.sort((a, b) => {
        if(a.ranked !== b.ranked) return a.ranked ? -1 : 1;
        if(a.pctKey !== b.pctKey) return b.pctKey - a.pctKey;
        return a.sortName.localeCompare(b.sortName);
    });

    // DENSE ranking: equal results share a position and the next position is
    // NOT skipped (1, 2, 2, 3, 4 ...)
    let prevKey = null, prevRank = 0;
    rows.forEach(r => {
        if(!r.ranked) return;
        if(r.pctKey !== prevKey){
            prevRank += 1;
            prevKey = r.pctKey;
        }
        r.rank = prevRank;
        r.posLabel = ordinal(prevRank);
    });

    return { cols, rows, total: totalTests };
}

function loadCombined(){
    students = [];
    tests = [];
    combinedModel = buildCombined(currentClass);
    setCombinedMode(true);
    emptyState.style.display = "none";
    area.style.display = "block";
    pdfClassEl.textContent = currentClass;
    renderCombined();
}

function renderCombined(){
    let m = combinedModel;

    let h = "<th>Position</th><th>Student Name</th>";
    m.cols.forEach(t => {
        h += `<th><span class="thName">${escHTML(t.name)}</span><span class="thMeta">Date: ${escHTML(t.date)}</span><span class="thTm">T.M: ${escHTML(t.tm)}</span></th>`;
    });
    h += "<th>Grand Total</th><th>Obtained Marks</th><th>Percentage</th>";
    head.innerHTML = h;

    body.innerHTML = m.rows.map(r => {
        let top = (r.rank && r.rank <= 3) ? ` class="rank-${r.rank}"` : "";
        let pos = (r.rank && r.rank <= 3)
            ? `<span class="posBadge">${r.posLabel}</span>`
            : r.posLabel;

        let marks = r.cells.map(c => {
            if(c === null) return `<td class="naCell">—</td>`;
            return `<td${c === "A" ? ' class="absentCell"' : ""}>${escHTML(c)}</td>`;
        }).join("");

        return `<tr${top}><td>${pos}</td><td>${escHTML(r.name)}</td>${marks}` +
               `<td>${fmtNum(r.grand)}</td><td>${fmtNum(r.obtained)}</td>` +
               `<td class="pctCell">${r.pctText}</td></tr>`;
    }).join("");
    applySearch();
}

// Refresh if data changes in another tab while a combined view is open
window.addEventListener("storage", () => {
    if(currentClass && isCombined(currentClass)) loadCombined();
});


// Make sure the two Combined choices always exist in the class dropdown,
// even if the HTML page does not list them.
function ensureCombinedOptions(){
    ["9th Combined", "10th Combined"].forEach(v => {
        let exists = Array.from(classSelect.options).some(o => o.value === v || o.textContent.trim() === v);
        if(!exists){
            let o = document.createElement("option");
            o.value = v;
            o.textContent = v;
            classSelect.appendChild(o);
        }
    });
}
ensureCombinedOptions();


// ===================== COMMON TEST LIST (Boys + Girls + Combined) =====================
// A test is identified by:  Test/Chapter Name + Date + Total Marks.
// 9th Boys / 9th Girls / 9th Combined share ONE test list.
// 10th Boys / 10th Girls / 10th Combined share ONE test list.
// 9th and 10th are never mixed. Only the test DEFINITIONS are shared;
// every student keeps his/her own marks inside his/her own section.

function gradeOf(cls){
    return String(cls || "").split(" ")[0];
}

function siblingOf(cls){
    if(/\sBoys$/.test(cls)) return gradeOf(cls) + " Girls";
    if(/\sGirls$/.test(cls)) return gradeOf(cls) + " Boys";
    return null;
}

// "CHAPTER 08", "Ch 8", "ch. 08" all become "ch 8"
function normTestName(n){
    return String(n || "").toLowerCase()
        .replace(/[^a-z0-9\u0600-\u06ff]+/g, " ")
        .replace(/\bchapter\b/g, "ch")
        .replace(/\b0+(\d)/g, "$1")
        .replace(/\s+/g, " ")
        .trim();
}

function normTM(v){
    let tmRaw = String(v === undefined || v === null ? "" : v).trim();
    let tmNum = Number(tmRaw);
    return (tmRaw !== "" && isFinite(tmNum)) ? String(tmNum) : tmRaw.toLowerCase();
}

function dateTmKey(t){
    return String((t && t.date) || "").trim() + "|" + normTM(t && t.tm);
}

function testKey(t){
    return normTestName(t && t.name) + "|" + dateTmKey(t);
}

function isRealMark(v){
    if(v === undefined || v === null) return false;
    let x = String(v).trim();
    return x !== "" && x.toUpperCase() !== "A";
}

// Collapse duplicate tests inside one section (marks are kept, never dropped)
function dedupeSection(d){
    let order = [], info = {};
    d.tests.forEach((t, j) => {
        let k = testKey(t);
        if(!(k in info)){ info[k] = { test: t, srcs: [] }; order.push(k); }
        info[k].srcs.push(j);
    });

    let students = d.students.map(s => {
        let old = s.marks || [];
        let marks = order.map(k => {
            let srcs = info[k].srcs;
            for(let q = 0; q < srcs.length; q++){
                if(isRealMark(old[srcs[q]])) return old[srcs[q]];
            }
            for(let q = 0; q < srcs.length; q++){
                let v = old[srcs[q]];
                if(v !== undefined && v !== null) return v;
            }
            return "A";
        });
        return { ...s, marks };
    });

    return { keys: order, tests: order.map(k => info[k].test), students };
}

// Makes Boys + Girls of one class hold the SAME test list (same order),
// merging duplicates. Marks never move between sections.
function syncGrade(grade){
    let names = [grade + " Boys", grade + " Girls"];
    if(!classes[names[0]] || !classes[names[1]]) return;

    let raw = names.map(n => getClassData(n));
    let before = raw.map(d => JSON.stringify({ students: d.students, tests: d.tests }));
    let ded = raw.map(d => dedupeSection({ students: d.students || [], tests: d.tests || [] }));

    // A Girls test that has the SAME Date + T.M. as a Boys test (only the name is
    // written differently) is the same test: pair them one-to-one.
    let paired = {};
    ded[1].keys = ded[1].keys.map((k, j) => {
        if(ded[0].keys.indexOf(k) !== -1){ paired[k] = true; return k; }
        return k;
    });
    ded[1].keys = ded[1].keys.map((k, j) => {
        if(ded[0].keys.indexOf(k) !== -1) return k;
        let dk = dateTmKey(ded[1].tests[j]);
        for(let b = 0; b < ded[0].tests.length; b++){
            let bk = ded[0].keys[b];
            if(!paired[bk] && dateTmKey(ded[0].tests[b]) === dk){
                paired[bk] = true;
                return bk;
            }
        }
        return k;
    });

    // ordered union of the two lists
    let merged = ded[0].tests.map(t => ({ ...t }));
    let mergedKeys = ded[0].keys.slice();

    ded[1].tests.forEach((t, j) => {
        let k = ded[1].keys[j];
        if(mergedKeys.indexOf(k) !== -1) return;

        let pos = -1;
        for(let p = j - 1; p >= 0 && pos === -1; p--){
            let a = mergedKeys.indexOf(ded[1].keys[p]);
            if(a !== -1) pos = a + 1;
        }
        for(let p = j + 1; p < ded[1].tests.length && pos === -1; p++){
            let a = mergedKeys.indexOf(ded[1].keys[p]);
            if(a !== -1) pos = a;
        }
        if(pos === -1){
            pos = merged.length;
            for(let p = 0; p < merged.length; p++){
                if((merged[p].date || "") > (t.date || "")){ pos = p; break; }
            }
        }
        merged.splice(pos, 0, { ...t });
        mergedKeys.splice(pos, 0, k);
    });

    names.forEach((n, si) => {
        let d = ded[si];
        let students = d.students.map(s => {
            let marks = mergedKeys.map(k => {
                let idx = d.keys.indexOf(k);
                return idx === -1 ? "A" : s.marks[idx];   // not taken by this section = Absent
            });
            return { ...s, marks };
        });
        let out = { students, tests: merged.map(t => ({ ...t })) };
        if(JSON.stringify(out) !== before[si]){
            localStorage.setItem(n, JSON.stringify(out));
        }
    });
}

function syncAllGrades(){
    ["9th", "10th"].forEach(syncGrade);
}

// Applies a change to the other section (Boys <-> Girls) of the current class
function updateSibling(fn){
    let sib = siblingOf(currentClass);
    if(!sib) return;
    let d = getClassData(sib);
    fn(d);
    localStorage.setItem(sib, JSON.stringify({ students: d.students, tests: d.tests }));
}


syncAllGrades();

// Initial state
emptyState.style.display = "block";


// ===================== PINNED TEST HEADER =====================
// While scrolling down the table, the test header (name / date / T.M) stays
// pinned at the top of the screen. It follows the table's sideways scroll too.
(function(){
    let pin = document.createElement("div");
    pin.id = "pinnedHead";
    pin.className = "pinned-head";
    pin.innerHTML = '<div class="pinned-clip"><table class="modern-table pinned-table"><thead><tr></tr></thead></table></div>';
    document.body.appendChild(pin);

    let pinClip = pin.firstChild;
    let pinTable = pinClip.firstChild;
    let pinRow = pinTable.querySelector("tr");
    let queued = false;
    let lastHTML = "";

    function hidePin(){
        pin.classList.remove("show");
    }

    function syncPin(){
        queued = false;
        if(!head || !area || area.style.display === "none"){ hidePin(); return; }

        let table = head.closest("table");
        if(!table){ hidePin(); return; }
        let wrap = table.parentElement;
        let top = 3;                                   // sits just under the spectrum bar
        let hr = head.getBoundingClientRect();
        let tr = table.getBoundingClientRect();

        if(hr.top >= top || tr.bottom < top + hr.height + 24){ hidePin(); return; }

        // rebuild copy only when the real header changed
        let html = head.innerHTML;
        if(html !== lastHTML){
            pinRow.innerHTML = html;
            lastHTML = html;
        }

        // copy exact column widths
        let src = head.children, dst = pinRow.children;
        for(let i = 0; i < src.length && i < dst.length; i++){
            let w = src[i].getBoundingClientRect().width;
            dst[i].style.width = w + "px";
            dst[i].style.minWidth = w + "px";
            dst[i].style.maxWidth = w + "px";
        }
        pinTable.style.width = tr.width + "px";

        let wr = wrap.getBoundingClientRect();
        pin.style.top = top + "px";
        pin.style.left = (wr.left + wrap.clientLeft) + "px";
        pin.style.width = wrap.clientWidth + "px";
        pinTable.style.transform = "translateX(" + (-wrap.scrollLeft) + "px)";

        pin.classList.add("show");
    }

    function queue(){
        if(queued) return;
        queued = true;
        requestAnimationFrame(syncPin);
    }

    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    document.addEventListener("scroll", function(e){
        if(e.target && e.target.classList && e.target.classList.contains("glass-table-container")) queue();
    }, true);

    // real header re-rendered (class change, add / edit / delete test) -> refresh copy
    new MutationObserver(function(){ lastHTML = ""; queue(); }).observe(head, { childList: true, subtree: true, characterData: true });
    new MutationObserver(queue).observe(area, { attributes: true, attributeFilter: ["style"] });
})();


// ===================== AI IMPORT - HANDWRITTEN TEST SHEET =====================
// Photo of a handwritten sheet -> test details + names + marks -> PREVIEW -> confirm -> import (+ Undo).
// Modes: AUTO (Gemini API key, 2 passes)  |  PASTE (prompt for any AI chat, paste the answer back).
// The API key lives only in this device's localStorage under its own key, so Backup never includes it.
(function(){
"use strict";

const KEY_STORE  = "physics_ai_gemini_key";
const UNDO_STORE = "physics_ai_import_undo";
const MODELS     = ["gemini-2.5-flash", "gemini-flash-latest", "gemini-2.0-flash"];
const SECTIONS   = ["9th Boys", "9th Girls", "10th Boys", "10th Girls"];

let S = fresh(true);
let root = null, bodyEl = null, footEl = null;

function lsGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
function fresh(first){
    return {
        mode: "auto", step: 1, key: first ? (lsGet(KEY_STORE) || "") : S.key, showKey: false,
        imgUrl: "", imgB64: "", imgNotes: [], paste: "", abort: null,
        test: { name: "", date: "", tm: "" }, rows: [], notes: [],
        scan: { p1: "wait", p2: "wait", err: "" }, done: null
    };
}
function sectionOk(){ return SECTIONS.indexOf(currentClass) !== -1; }
function $(sel){ return root.querySelector(sel); }

// ---------------------------------------------------------------- build / open / close
function build(){
    if(root) return;
    root = document.createElement("div");
    root.id = "aiOverlay";
    root.className = "ai-overlay ai-hidden";
    root.innerHTML =
      '<div class="ai-panel" role="dialog" aria-modal="true" aria-label="AI Import Handwritten Test">' +
        '<div class="ai-top">' +
          '<div class="ai-title"><span class="ai-spark">✦</span><div><b>AI Import</b><small>Handwritten sheet → marks, checked by you</small></div></div>' +
          '<button type="button" class="ai-x" data-ai="close" aria-label="Close">✕</button>' +
        '</div>' +
        '<ol class="ai-steps" id="aiSteps">' +
          '<li data-s="1"><i>1</i><span>Source</span></li><li data-s="2"><i>2</i><span>Scan</span></li>' +
          '<li data-s="3"><i>3</i><span>Review</span></li><li data-s="4"><i>4</i><span>Done</span></li>' +
        '</ol>' +
        '<div class="ai-body" id="aiBody"></div>' +
        '<div class="ai-foot" id="aiFoot"></div>' +
      '</div>';
    document.body.appendChild(root);
    bodyEl = $("#aiBody"); footEl = $("#aiFoot");

    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onChange);
    root.addEventListener("dragover", e => { if(e.target.closest && e.target.closest(".ai-drop")){ e.preventDefault(); e.target.closest(".ai-drop").classList.add("over"); } });
    root.addEventListener("dragleave", e => { let d = e.target.closest && e.target.closest(".ai-drop"); if(d) d.classList.remove("over"); });
    root.addEventListener("drop", e => {
        let d = e.target.closest && e.target.closest(".ai-drop");
        if(!d) return;
        e.preventDefault(); d.classList.remove("over");
        if(e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
    });
    document.addEventListener("keydown", e => {
        if(e.key === "Escape" && root && !root.classList.contains("ai-hidden")){ if(lbEl()) lbClose(); else close(); }
    });
}

function open(){
    build();
    if(S.imgUrl) try{ URL.revokeObjectURL(S.imgUrl); }catch(e){}
    S = fresh(false);
    root.classList.remove("ai-hidden");
    document.body.style.overflow = "hidden";
    renderSetup();
}

function close(){
    if(S.abort) try{ S.abort.abort(); }catch(e){}
    if(root) root.classList.add("ai-hidden");
    document.body.style.overflow = "";
}

function steps(){
    root.querySelectorAll("#aiSteps li").forEach(li => {
        let n = +li.dataset.s;
        li.className = n < S.step ? "done" : (n === S.step ? "on" : "");
    });
}

// ---------------------------------------------------------------- name matching
const M_ALIASES = ["m","md","mhd","mohd","muhd","mohammad","mohammed","muhammed","mohamed","mohamad","muhammad"];

function tokens(s){
    return String(s || "").toLowerCase()
        .replace(/[.\-_,()\/]/g, " ").replace(/[^a-z0-9\u0600-\u06ff\s]/g, "")
        .split(/\s+/).filter(Boolean)
        .map(w => M_ALIASES.indexOf(w) !== -1 ? "muhammad" : w);
}
function lev(a, b){
    let m = a.length, n = b.length;
    if(!m) return n; if(!n) return m;
    let prev = [], cur = [];
    for(let j = 0; j <= n; j++) prev[j] = j;
    for(let i = 1; i <= m; i++){
        cur = [i];
        for(let j = 1; j <= n; j++){
            cur[j] = Math.min(prev[j] + 1, cur[j-1] + 1, prev[j-1] + (a[i-1] === b[j-1] ? 0 : 1));
        }
        prev = cur;
    }
    return prev[n];
}
function tokSim(a, b){
    if(a === b) return 1;
    if(a.length === 1 || b.length === 1) return a[0] === b[0] ? 0.6 : 0;
    let r = 1 - lev(a, b) / Math.max(a.length, b.length);
    if(r >= 0.75) return r;
    if(Math.min(a.length, b.length) >= 3 && (a.indexOf(b) === 0 || b.indexOf(a) === 0)) return 0.7;
    return 0;
}
function nameScore(h, c){
    let strip = t => { let x = t.filter(w => w !== "muhammad"); return x.length ? x : t; };
    h = strip(h); c = strip(c);
    if(!h.length || !c.length) return 0;
    let used = {}, sum = 0;
    h.forEach(ht => {
        let best = 0, bi = -1;
        c.forEach((ct, i) => { if(used[i]) return; let s = tokSim(ht, ct); if(s > best){ best = s; bi = i; } });
        if(bi !== -1){ used[bi] = true; sum += best; }
    });
    return sum / Math.max(h.length, c.length);
}

function autoMatch(){
    let roster = students.map((s, i) => ({ i: i, tok: tokens(s.name) }));
    S.rows.forEach(r => {
        let ht = tokens(r.name), hk = ht.join(" ");
        r.cands = roster.map(c => ({ idx: c.i, score: nameScore(ht, c.tok), exact: ht.length > 0 && hk === c.tok.join(" ") }))
                        .filter(c => c.score > 0.3).sort((a, b) => b.score - a.score).slice(0, 5);
        r.match = ""; r.status = r.cands.length ? "unclear" : "newq";
    });
    let taken = {};
    S.rows.forEach(r => {                       // 1) exact, unique
        let ex = r.cands.filter(c => c.exact);
        if(ex.length === 1){
            if(!taken[ex[0].idx]){ taken[ex[0].idx] = true; r.match = String(ex[0].idx); r.status = "exact"; }
            else r.note = (r.note ? r.note + " · " : "") + "Same name appears twice on the sheet.";
        }
    });
    S.rows.map((r, i) => i).filter(i => S.rows[i].match === "" && S.rows[i].cands.length)
        .sort((a, b) => S.rows[b].cands[0].score - S.rows[a].cands[0].score)
        .forEach(i => {                         // 2) approx, clear winner only
            let r = S.rows[i], top = r.cands[0], second = r.cands[1];
            if(top.score >= 0.72 && (!second || top.score - second.score >= 0.15)){
                if(!taken[top.idx]){ taken[top.idx] = true; r.match = String(top.idx); r.status = "approx"; }
                else r.note = (r.note ? r.note + " · " : "") + "Best match is already used by another row.";
            }
        });
}

// ---------------------------------------------------------------- marks / dates
function parseMark(raw, tm, tmOk){
    let s = cleanMark(raw);
    if(s === "") return { err: "Marks missing." };
    if(/^(a|ab|abs|absent)$/i.test(s)) return { val: "A" };
    s = s.replace(",", ".");
    let f = s.match(/^(\d+(?:\.\d+)?)\s*\/\s*\d+(?:\.\d+)?$/);
    if(f) s = f[1];
    if(/^-/.test(s)) return { err: "Negative marks are not allowed." };
    if(!/^(\d+(\.\d+)?|\.\d+)$/.test(s)) return { err: "“" + String(raw).trim() + "” is not a valid mark." };
    if(tmOk && Number(s) > tm) return { err: "⚠ Marks " + s + " exceed T.M. " + fmtNum(tm) + " — Please verify." };
    if(Number(s) === 0) return { val: "00" };          // zero is always stored as 00
    return { val: s };
}
function normDate(v){
    if(!v) return "";
    let s = String(v).trim(), m;
    let f = (y, mo, d) => (mo >= 1 && mo <= 12 && d >= 1 && d <= 31 && y > 1999)
        ? y + "-" + String(mo).padStart(2, "0") + "-" + String(d).padStart(2, "0") : "";
    if(m = s.match(/^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})$/)) return f(+m[1], +m[2], +m[3]);
    if(m = s.match(/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{2,4})$/)){ let y = +m[3]; if(y < 100) y += 2000; return f(y, +m[2], +m[1]); }
    let d = new Date(s);
    return isNaN(d) ? "" : f(d.getFullYear(), d.getMonth() + 1, d.getDate());
}
function canon(m){
    let s = cleanMark(m);
    if(/^(a|ab|abs|absent)$/i.test(s)) return "A";
    let n = Number(s.replace(",", "."));
    return (s !== "" && isFinite(n)) ? String(n) : s.toLowerCase();
}

// ---------------------------------------------------------------- prompts
function schemaText(){
    return '{\n  "test": { "name": "test / chapter name as written", "date": "YYYY-MM-DD", "total_marks": 10 },\n' +
           '  "students": [ { "name": "name exactly as written", "marks": "8.5", "unsure": false, "note": "" } ],\n' +
           '  "image_quality": { "blurry": false, "dark": false, "cropped": false, "tilted": false, "low_resolution": false, "unreadable_parts": false, "notes": "" }\n}';
}
function rosterText(){
    if(!students.length) return "";
    return "\nReference list of students in " + currentClass + " (ONLY to help you read difficult handwriting - still write each name AS WRITTEN on the sheet, never replace it with a list name unless the sheet really says so):\n" +
        students.map((s, i) => (i + 1) + ". " + getExportName(s.name)).join("\n") + "\n";
}
function rulesText(){
    return "Rules:\n" +
    "- Include EVERY student row in the order written. Never skip rows and never invent rows.\n" +
    "- \"marks\" = obtained marks exactly as written. Keep decimals (8.5 stays 8.5). Write \"A\" for Absent (A / Abs / Absent).\n" +
    "- If a mark cannot be read, set \"marks\" to null and \"unsure\": true. NEVER guess silently.\n" +
    "- If any digit, decimal point or name is doubtful, give your best reading but set \"unsure\": true and explain in \"note\".\n" +
    "- If the test name, date or total marks cannot be found, use null.\n" +
    "- \"date\" must be ISO YYYY-MM-DD; the sheet is day-first (17/07/2026 = 2026-07-17).\n" +
    "- Do not calculate, convert or correct anything. Report only what is written.\n" +
    "- If the obtained mark is zero - however the sheet shows it (0, (0), 0), O, a circle, empty brackets) - write it as \"00\" (two zeros), exactly like that.\n" +
    "- Fill \"image_quality\" honestly (blurry, too dark, cropped, tilted, low resolution, unreadable handwriting).\n" +
    "- Be extra careful with: 0 vs 6, 1 vs 7, 3 vs 8, 5 vs 6, 8 vs 9, decimal points, \"A\" vs a number, and similar student names.\n";
}
function promptPass1(){
    return "You are reading a photo of a HANDWRITTEN school test result sheet (subject: Physics). It contains the test/chapter name, date, total marks (T.M.), student names and each student's obtained marks.\n\n" +
        "Return ONLY one JSON object (no markdown, no explanation) in exactly this shape:\n" + schemaText() + "\n\n" + rulesText() + rosterText();
}
function promptPaste(){
    return promptPass1().replace("You are reading", "You are reading") +
        "\nWORK IN TWO PASSES before you answer:\n" +
        "Pass 1 - read the sheet and extract everything.\n" +
        "Pass 2 - look at the ORIGINAL image again and re-check every name and every mark against your Pass 1 result. Where Pass 2 disagrees with Pass 1, or you are still not sure, set \"unsure\": true for that row.\n" +
        "Then output only the final JSON object.";
}
function promptPass2(p1json){
    return "Below is a FIRST-PASS reading of the attached photo of a handwritten test result sheet (subject: Physics).\n" +
        "Now VERIFY it: look at the original image again and re-check the test name, date, total marks and EVERY student's name and mark. Do not trust the first pass; read each value from the image yourself.\n" +
        "Return the full corrected result as ONE JSON object (no markdown) in exactly this shape:\n" + schemaText() + "\n\n" + rulesText() +
        "If your re-check differs from the first pass, or a value is still doubtful, set \"unsure\": true for that row and say why in \"note\".\n" +
        rosterText() + "\nFIRST-PASS JSON:\n" + p1json;
}

// ---------------------------------------------------------------- parsing AI answers
function parseJSONLoose(text){
    let t = String(text || "").trim();
    try{ return JSON.parse(t); }catch(e){}
    let a = t.indexOf("{"), b = t.lastIndexOf("}");
    if(a >= 0 && b > a){ try{ return JSON.parse(t.slice(a, b + 1)); }catch(e){} }
    a = t.indexOf("["); b = t.lastIndexOf("]");
    if(a >= 0 && b > a){ try{ return JSON.parse(t.slice(a, b + 1)); }catch(e){} }
    return null;
}
function parseTextFallback(text){
    let out = { test: {}, students: [] }, m;
    String(text).split(/\r?\n/).forEach(line => {
        let l = line.replace(/^[\s*#>-]+/, "").replace(/\*\*/g, "").trim();
        if(!l) return;
        if(m = l.match(/^(?:test|chapter)(?:\s*name)?\s*[:=]\s*(.+)$/i)){ out.test.name = m[1].trim(); return; }
        if(m = l.match(/^date\s*[:=]\s*(.+)$/i)){ out.test.date = m[1].trim(); return; }
        if(m = l.match(/^(?:t\.?\s?m\.?|total\s*marks?)\s*[:=]\s*([\d.]+)/i)){ out.test.total_marks = m[1]; return; }
        l = l.replace(/^\|/, "").replace(/\|$/, "");
        if(/^[\s|:-]+$/.test(l)) return;
        if(m = l.match(/^(?:\d+\s*[.)]\s*)?(.+?)\s*(?:\||:|\t|,|\s-\s|–|—)\s*(\(\s*\d*[.,]?\d*\s*\)?|\d+(?:[.,]\d+)?\)?|[oO\u00F8\u00D8\u2205\u25CB]|zero|nil|A|Abs(?:ent)?|\?)\s*$/i)){
            let mk = m[2] === "?" ? null : m[2];
            out.students.push({ name: m[1].replace(/\|/g, " ").trim(), marks: mk, unsure: mk === null });
        }
    });
    return out;
}
function normalize(o){
    if(Array.isArray(o)) o = { students: o };
    o = o || {};
    let t = o.test || o.test_details || {};
    let pick = (...v) => { for(let x of v) if(x !== undefined && x !== null && String(x).trim() !== "") return String(x).trim(); return ""; };
    let notes = [];
    let date = normDate(pick(t.date, o.date));
    if(pick(t.date, o.date) && !date) notes.push("The date on the sheet could not be read clearly — please set it.");
    let list = o.students || o.results || o.marks || [];
    let studentsOut = list.map(s => {
        let mk = cleanMark(s.marks);
        if(/^(a|ab|abs|absent)$/i.test(mk)) mk = "A";
        return { name: String(s.name !== undefined ? s.name : (s.student || "")).trim(), marks: mk,
                 unsure: !!s.unsure || mk === "", note: String(s.note || "").trim() };
    }).filter(s => s.name || s.marks);
    let q = o.image_quality || {};
    let map = { blurry: "AI says the photo is blurry.", dark: "AI says the photo is too dark.", cropped: "AI says part of the sheet is cropped out.",
                tilted: "AI says the photo is tilted.", low_resolution: "AI says the resolution is too low.", unreadable_parts: "AI could not read some handwriting." };
    Object.keys(map).forEach(k => { if(q[k]) notes.push(map[k]); });
    if(q.notes && String(q.notes).trim()) notes.push("AI note: " + String(q.notes).trim());
    return { test: { name: pick(t.name, t.test_name, o.test_name), date: date, tm: pick(t.total_marks, t.tm, t.t_m, o.total_marks, o.tm) },
             students: studentsOut, notes: notes };
}
function mergePasses(p1, p2){
    let notes = p2.notes.slice();
    p2.students.forEach((s, i) => {
        let k = tokens(s.name).join(" ");
        let m = p1.students.find(x => tokens(x.name).join(" ") === k);
        if(!m && p1.students[i] && nameScore(tokens(p1.students[i].name), tokens(s.name)) >= 0.7) m = p1.students[i];
        if(!m){ s.unsure = true; s.note = (s.note ? s.note + " · " : "") + "Row not found in Pass 1."; return; }
        if(canon(m.marks) !== canon(s.marks)){
            s.unsure = true;
            s.note = (s.note ? s.note + " · " : "") + "Pass 1 read “" + (m.marks || "?") + "”, Pass 2 read “" + (s.marks || "?") + "”.";
        }
    });
    if(p1.students.length !== p2.students.length) notes.push("Pass 1 found " + p1.students.length + " rows but Pass 2 found " + p2.students.length + " — check for missing or extra rows.");
    ["name", "date", "tm"].forEach(k => {
        if(!p2.test[k]) p2.test[k] = p1.test[k];
        else if(p1.test[k] && String(p1.test[k]) !== String(p2.test[k])) notes.push("Test " + (k === "tm" ? "T.M." : k) + " differed between passes (" + p1.test[k] + " vs " + p2.test[k] + ") — please check.");
    });
    p2.notes = notes.concat(p1.notes.filter(n => notes.indexOf(n) === -1));
    return p2;
}

function loadExtraction(x){
    S.test = { name: x.test.name || "", date: x.test.date || "", tm: x.test.tm || "" };
    S.rows = x.students.map(s => ({ name: s.name, marks: s.marks, unsure: s.unsure, note: s.note, markOk: false, nameOk: false, newName: s.name, cands: [], match: "", status: "unclear" }));
    S.notes = x.notes.slice();
    autoMatch();
}

// ---------------------------------------------------------------- Gemini
function sleep(ms, signal){
    return new Promise((resolve, reject) => {
        let t = setTimeout(resolve, ms);
        if(signal) signal.addEventListener("abort", () => { clearTimeout(t); reject(new DOMException("Aborted", "AbortError")); });
    });
}
// Busy / overloaded (503, 500, 504) or rate limited (429): try the next model, then wait and go round again.
async function gemini(parts, key, signal){
    let lastErr = "Model not available.", busy = false, quota = false;
    const ROUNDS = 4, WAITS = [3000, 6000, 10000];
    for(let round = 0; round < ROUNDS; round++){
        for(let m = 0; m < MODELS.length; m++){
            let res;
            try{
                res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/" + MODELS[m] + ":generateContent?key=" + encodeURIComponent(key), {
                    method: "POST", signal: signal, headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ contents: [{ role: "user", parts: parts }], generationConfig: { temperature: 0, responseMimeType: "application/json" } })
                });
            }catch(e){
                if(e && e.name === "AbortError") throw e;
                throw new Error("Network error — check your internet connection and try again.");
            }
            let data = null;
            try{ data = await res.json(); }catch(e){}
            let apiMsg = (data && data.error && data.error.message) || ("Request failed (" + res.status + ")");

            if(res.status === 404){ lastErr = apiMsg; continue; }
            if(res.status === 503 || res.status === 500 || res.status === 504){ busy = true; lastErr = apiMsg; continue; }
            if(res.status === 429){ quota = true; lastErr = apiMsg; continue; }
            if(!res.ok){
                if(res.status === 400 && /api key/i.test(apiMsg)) apiMsg = "The API key is not valid. Check it and try again.";
                if(res.status === 403) apiMsg = "This API key is not allowed to use Gemini (" + apiMsg + ")";
                throw new Error(apiMsg);
            }
            let c = data && data.candidates && data.candidates[0];
            let text = c && c.content && c.content.parts ? c.content.parts.map(p => p.text || "").join("") : "";
            if(!text) throw new Error("The AI returned no answer (the image may have been blocked). Try another photo or Paste mode.");
            return text;
        }
        if(!busy && !quota) break;                       // only 404s: no point waiting
        if(round < ROUNDS - 1){
            let st = $("#aiRetry"); if(st) st.textContent = "Gemini is busy — retrying automatically (" + (round + 1) + "/" + (ROUNDS - 1) + ")…";
            await sleep(WAITS[round] || 10000, signal);
        }
    }
    if(busy) throw new Error("Google's Gemini servers are overloaded right now (this is on Google's side, not your key or photo). I tried several times and other models too. Wait a minute and press Back → Scan again, or use Paste mode.");
    if(quota) throw new Error("Free quota reached for now. Wait a minute and try again, or use Paste mode.");
    throw new Error(lastErr);
}

// ---------------------------------------------------------------- image handling + quality check
function loadImg(file){
    return new Promise((resolve, reject) => {
        let url = URL.createObjectURL(file), img = new Image();
        img.onload = () => resolve({ img: img, url: url });
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("This image format is not supported. Use JPG or PNG.")); };
        img.src = url;
    });
}
function analyse(img, w, h){
    let notes = [];
    if(Math.max(w, h) < 1000 || Math.min(w, h) < 700) notes.push("Low resolution (" + w + "×" + h + ") — small handwriting may be misread. Retake it closer or in higher quality.");
    let sc = Math.min(1, 700 / Math.max(w, h)), cw = Math.max(8, Math.round(w * sc)), ch = Math.max(8, Math.round(h * sc));
    let cv = document.createElement("canvas"); cv.width = cw; cv.height = ch;
    let ctx = cv.getContext("2d"); ctx.drawImage(img, 0, 0, cw, ch);
    let d = ctx.getImageData(0, 0, cw, ch).data, g = new Float32Array(cw * ch), mean = 0;
    for(let i = 0; i < g.length; i++){ g[i] = 0.299 * d[i*4] + 0.587 * d[i*4+1] + 0.114 * d[i*4+2]; mean += g[i]; }
    mean /= g.length;
    let sum = 0, sq = 0, n = 0;
    for(let y = 1; y < ch - 1; y++) for(let x = 1; x < cw - 1; x++){
        let i = y * cw + x, v = 4 * g[i] - g[i-1] - g[i+1] - g[i-cw] - g[i+cw];
        sum += v; sq += v * v; n++;
    }
    let variance = n ? sq / n - (sum / n) * (sum / n) : 999;
    if(mean < 70) notes.push("The photo looks too dark — retake it with more light.");
    else if(mean > 225) notes.push("The photo looks washed out / over-exposed — avoid direct flash.");
    if(variance < 28) notes.push("The photo looks blurry — hold the camera steady and retake it.");
    return notes;
}
async function setFile(file){
    if(!file || !/^image\//.test(file.type)){ toast("Please choose a photo (JPG / PNG)."); return; }
    try{
        let L = await loadImg(file), w = L.img.naturalWidth, h = L.img.naturalHeight;
        let sc = Math.min(1, 2400 / Math.max(w, h)), cv = document.createElement("canvas");
        cv.width = Math.round(w * sc); cv.height = Math.round(h * sc);
        cv.getContext("2d").drawImage(L.img, 0, 0, cv.width, cv.height);
        S.imgB64 = cv.toDataURL("image/jpeg", 0.92).split(",")[1];
        S.imgNotes = analyse(L.img, w, h);
        if(S.imgUrl) try{ URL.revokeObjectURL(S.imgUrl); }catch(e){}
        S.imgUrl = L.url;
        if(S.step === 1) renderSetup();
    }catch(err){ toast(err.message || "Could not open this image."); }
}

// ---------------------------------------------------------------- STEP 1: setup
function renderSetup(){
    S.step = 1; steps();
    let ok = sectionOk();
    let secNote = ok
        ? students.length + " students and " + tests.length + " tests in " + escHTML(currentClass) + ". Names are matched ONLY against this section."
        : "Pick a Boys or Girls section. Combined is calculated automatically from Boys + Girls, so marks are imported into Boys or Girls.";

    let modeBody;
    if(S.mode === "auto"){
        modeBody =
          '<label class="ai-label" for="aiKey">Google Gemini API key</label>' +
          '<div class="ai-keyrow"><input id="aiKey" type="' + (S.showKey ? "text" : "password") + '" autocomplete="off" spellcheck="false" placeholder="Paste your free key (AIza…)" value="' + escHTML(S.key) + '">' +
          '<button type="button" class="ai-mini" data-ai="togglekey">' + (S.showKey ? "Hide" : "Show") + '</button>' +
          '<button type="button" class="ai-mini" data-ai="forgetkey">Forget</button></div>' +
          '<p class="ai-note">🔒 Saved only on this device. It is never added to Backup. Free key: <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a></p>';
    } else {
        modeBody =
          '<div class="ai-label">① Copy this prompt</div>' +
          '<textarea id="aiPrompt" class="ai-ta" rows="5" readonly>' + escHTML(promptPaste()) + '</textarea>' +
          '<div class="ai-row-btns"><button type="button" class="ai-mini ai-mini-go" data-ai="copyprompt">Copy prompt</button></div>' +
          '<div class="ai-label">② Send the prompt + your sheet photo to any AI chat (Gemini, ChatGPT, Claude)</div>' +
          '<div class="ai-label">③ Paste the AI answer here</div>' +
          '<textarea id="aiPaste" class="ai-ta" rows="6" placeholder="Paste the AI answer here…">' + escHTML(S.paste) + '</textarea>' +
          '<p class="ai-note">No API key needed. Adding the photo below is optional: it shows beside the preview and runs the quality check.</p>';
    }

    let drop = '<label class="ai-drop" id="aiDrop"><input type="file" id="aiFile" accept="image/*" hidden>' +
        (S.imgUrl
            ? '<div class="ai-frame"><img src="' + S.imgUrl + '" alt="Sheet photo"></div><span class="ai-drop-t">Tap to change the photo</span>'
            : '<span class="ai-drop-ic">📷</span><span class="ai-drop-t">Tap to take / choose the photo of the sheet</span><small>or drop it here</small>') +
        '</label>' +
        (S.imgNotes.length ? '<div class="ai-alert">' + S.imgNotes.map(n => '<div>⚠ ' + escHTML(n) + '</div>').join("") + '<div class="ai-alert-s">You can still continue — unclear values will be flagged, never imported silently.</div></div>' : "");

    bodyEl.innerHTML =
      '<div class="ai-block"><div class="ai-label">Section</div><div class="ai-chips">' +
        SECTIONS.map(c => '<button type="button" class="ai-chip' + (c === currentClass ? " on" : "") + '" data-ai="section" data-v="' + c + '">' + c + '</button>').join("") +
      '</div><p class="ai-note' + (ok ? "" : " bad") + '">' + secNote + '</p></div>' +
      '<div class="ai-block"><div class="ai-label">How should the sheet be read?</div><div class="ai-modes">' +
        '<button type="button" class="ai-mode' + (S.mode === "auto" ? " on" : "") + '" data-ai="mode" data-v="auto"><b>⚡ Auto</b><span>API key + photo. Two checking passes, then preview.</span></button>' +
        '<button type="button" class="ai-mode' + (S.mode === "paste" ? " on" : "") + '" data-ai="mode" data-v="paste"><b>📋 Paste</b><span>No key. Copy prompt, use any AI chat, paste the answer.</span></button>' +
      '</div></div>' +
      '<div class="ai-block">' + modeBody + '</div>' +
      '<div class="ai-block"><div class="ai-label">Handwritten sheet photo</div>' + drop + '</div>';

    footEl.innerHTML =
      '<button type="button" class="btn btn-outline" data-ai="close">Cancel</button>' +
      '<button type="button" class="btn btn-primary" data-ai="go">' + (S.mode === "auto" ? "✦ Scan sheet" : "Read answer") + '</button>';
}

// ---------------------------------------------------------------- STEP 2: scanning (auto)
function passLi(id, key, title, text){
    let st = S.scan[key];
    return '<li id="' + id + '" class="st-' + st + '"><i></i><div><b>' + title + '</b><span>' + text + '</span></div></li>';
}
function renderScan(){
    S.step = 2; steps();
    bodyEl.innerHTML =
      '<div class="ai-scan"><div class="ai-frame ai-scanning"><img src="' + S.imgUrl + '" alt="Sheet photo"><i class="ai-laser"></i></div>' +
      '<ul class="ai-pass">' + passLi("aiP1", "p1", "Pass 1", "Reading test details, names and marks") +
      passLi("aiP2", "p2", "Pass 2", "Re-checking every value against the photo") + '</ul></div>' +
      (S.scan.err ? '<div class="ai-alert bad"><b>Could not finish:</b> ' + escHTML(S.scan.err) + '</div>' : '<p class="ai-note c" id="aiRetry">Nothing is imported yet. You will review everything first.</p>');
    footEl.innerHTML = S.scan.err
        ? '<button type="button" class="btn btn-outline" data-ai="close">Close</button><button type="button" class="btn btn-primary" data-ai="back">← Back</button>'
        : '<button type="button" class="btn btn-outline" data-ai="back">Cancel scan</button>';
}
function setPass(k, st){ S.scan[k] = st; let li = $("#ai" + (k === "p1" ? "P1" : "P2")); if(li) li.className = "st-" + st; }

async function runAuto(){
    if(!sectionOk()){ toast("Select 9th/10th Boys or Girls first."); return; }
    if(!S.imgB64){ toast("Choose the photo of the handwritten sheet."); return; }
    let key = S.key.trim();
    if(!key){ toast("Enter your Gemini API key."); return; }
    try{ localStorage.setItem(KEY_STORE, key); }catch(e){}
    S.scan = { p1: "active", p2: "wait", err: "" };
    S.abort = new AbortController();
    renderScan();
    let img = { inline_data: { mime_type: "image/jpeg", data: S.imgB64 } };
    try{
        let t1 = await gemini([{ text: promptPass1() }, img], key, S.abort.signal);
        let j1 = parseJSONLoose(t1);
        if(!j1) throw new Error("Pass 1 gave an unreadable answer. Please try again.");
        let p1 = normalize(j1);
        if(!p1.students.length) throw new Error("No student rows were found. Retake the photo so the whole sheet is visible.");
        setPass("p1", "done"); setPass("p2", "active");
        let final = p1;
        try{
            let t2 = await gemini([{ text: promptPass2(JSON.stringify(j1)) }, img], key, S.abort.signal);
            let j2 = parseJSONLoose(t2);
            if(!j2) throw new Error("bad");
            final = mergePasses(p1, normalize(j2));
            setPass("p2", "done");
        }catch(e2){
            if(e2 && e2.name === "AbortError") throw e2;
            setPass("p2", "fail");
            p1.notes.push("The verification pass failed, so this is a single reading only — please check every row against the photo.");
            final = p1;
        }
        loadExtraction(final);
        renderReview();
    }catch(err){
        if(err && err.name === "AbortError") return;
        S.scan.err = err.message || "Unknown error.";
        if(S.scan.p1 === "active") S.scan.p1 = "fail";
        renderScan();
    }
}

function runPaste(){
    if(!sectionOk()){ toast("Select 9th/10th Boys or Girls first."); return; }
    let text = S.paste.trim();
    if(!text){ toast("Paste the AI answer first."); return; }
    let j = parseJSONLoose(text), x = j ? normalize(j) : null;
    if(!x || !x.students.length) x = normalize(parseTextFallback(text));
    if(!x.students.length){ toast("Could not find student rows in that answer. Ask the AI for the JSON format."); return; }
    x.notes.unshift("Paste mode: please compare each row with the photo before importing.");
    loadExtraction(x);
    renderReview();
}

// ---------------------------------------------------------------- STEP 3: review
function matchSelect(r){
    let sel = r.match, sug = r.cands.map(c => c.idx);
    let nm = i => escHTML(getExportName(students[i].name));
    let inSug = /^\d+$/.test(sel) && sug.indexOf(Number(sel)) !== -1;
    let h = '<option value=""' + (sel === "" ? " selected" : "") + '>— select student —</option>' +
            '<option value="skip"' + (sel === "skip" ? " selected" : "") + '>⤫ Skip this row</option>' +
            '<option value="new"' + (sel === "new" ? " selected" : "") + '>➕ Add as new student</option>';
    if(sug.length) h += '<optgroup label="Suggested">' + sug.map(i => '<option value="' + i + '"' + (sel === String(i) ? " selected" : "") + '>' + nm(i) + '</option>').join("") + '</optgroup>';
    h += '<optgroup label="All students in ' + escHTML(currentClass) + '">' +
         students.map((s, i) => '<option value="' + i + '"' + (sel === String(i) && !inSug ? " selected" : "") + '>' + nm(i) + '</option>').join("") + '</optgroup>';
    return h;
}
function renderReview(){
    S.step = 3; steps();
    let side = S.imgUrl
        ? '<div class="ai-frame ai-zoom" data-ai="zoom" title="Tap to enlarge"><img src="' + S.imgUrl + '" alt="Sheet photo"></div><p class="ai-note c">Tap the photo to enlarge</p>'
        : '<div class="ai-noimg">No photo attached.<br>Compare with your paper sheet.</div>';
    let allNotes = S.imgNotes.concat(S.notes);
    let alertBox = allNotes.length ? '<div class="ai-alert">' + allNotes.map(n => '<div>⚠ ' + escHTML(n) + '</div>').join("") + '</div>' : "";
    let labels = { exact: "Exact", approx: "Approx", unclear: "Unclear", manual: "Manual", newq: "Not in class list", new: "New student" };

    let rows = S.rows.map((r, i) =>
      '<div class="ai-row" data-i="' + i + '">' +
        '<div class="ai-n">' + (i + 1) + '</div>' +
        '<div class="ai-sn"><b>' + escHTML(r.name || "(unreadable name)") + '</b><span class="ai-st st-' + r.status + '" data-st>' + labels[r.status] + '</span>' +
          '<input type="text" class="ai-newname" data-f="newname" value="' + escHTML(r.newName) + '" placeholder="New student name" aria-label="New student name" style="display:none">' +
        '</div>' +
        '<div class="ai-mt"><select data-f="match" aria-label="Student">' + matchSelect(r) + '</select></div>' +
        '<div class="ai-mk"><input type="text" inputmode="decimal" data-f="marks" aria-label="Marks" value="' + escHTML(r.marks) + '"></div>' +
        '<div class="ai-ms" data-ms></div>' +
      '</div>').join("");

    bodyEl.innerHTML =
      '<div class="ai-review"><aside class="ai-side">' + side + '</aside><section class="ai-main">' + alertBox +
        '<div class="ai-test">' +
          '<div class="ai-f ai-f-name"><label for="aiTName">Test Name</label><input id="aiTName" type="text" value="' + escHTML(S.test.name) + '" placeholder="e.g. Ch 12"></div>' +
          '<div class="ai-f"><label for="aiTDate">Date</label><input id="aiTDate" type="date" value="' + escHTML(S.test.date) + '"></div>' +
          '<div class="ai-f"><label for="aiTTM">T.M.</label><input id="aiTTM" type="number" min="1" step="any" value="' + escHTML(S.test.tm) + '"></div>' +
          '<div class="ai-testmsg" id="aiTestMsg"></div>' +
        '</div>' +
        '<div class="ai-bulk" id="aiBulk"><button type="button" class="ai-mini ai-mini-go" data-ai="tickall">☑ Confirm all approximate name matches</button></div>' +
        '<div class="ai-list-h"><span>#</span><span>On the sheet</span><span>Student in ' + escHTML(currentClass) + '</span><span>Marks</span><span>Check</span></div>' +
        '<div class="ai-list">' + rows + '</div>' +
        '<div class="ai-missing" id="aiMissing"></div>' +
      '</section></div>';

    footEl.innerHTML =
      '<div class="ai-sum" id="aiSum"></div>' +
      '<div class="ai-foot-b"><button type="button" class="btn btn-outline" data-ai="back">← Back</button>' +
      '<button type="button" class="btn btn-primary" id="aiImportGo" data-ai="import">Import Test</button></div>';
    refreshAll();
}

function existingTestIdx(){
    return tests.findIndex(t => testKey(t) === testKey({ name: S.test.name, date: S.test.date, tm: S.test.tm }));
}

function tick(f, on, label){
    return '<label class="ai-tick"><input type="checkbox" data-f="' + f + '"' + (on ? " checked" : "") + '><span>' + label + '</span></label>';
}

function refreshAll(){
    if(S.step !== 3) return;
    let tm = Number(S.test.tm), tmOk = isFinite(tm) && tm > 0 && String(S.test.tm).trim() !== "";
    let tErr = [], tWarn = [];
    if(!S.test.name.trim()) tErr.push("Test name is missing.");
    if(!tmOk) tErr.push("Enter a valid T.M. (total marks).");
    if(!S.test.date) tWarn.push("No date set.");
    let exK = (S.test.name.trim() && tmOk) ? existingTestIdx() : -1;

    let use = {};
    S.rows.forEach((r, i) => { if(/^\d+$/.test(r.match)) (use[r.match] = use[r.match] || []).push(i + 1); });
    let newUse = {}, rosterKeys = {};
    S.rows.forEach((r, i) => { if(r.match === "new"){ let k = tokens(r.newName).join(" "); (newUse[k] = newUse[k] || []).push(i + 1); } });
    students.forEach(s => { rosterKeys[tokens(s.name).join(" ")] = true; });

    let errs = 0, warns = 0, ready = 0, replaced = 0;
    S.rows.forEach((r, i) => {
        let el = bodyEl.querySelector('.ai-row[data-i="' + i + '"]');
        if(!el) return;
        let msgs = [], lvl = "ok", ticks = "", extra = "";
        let stEl = el.querySelector("[data-st]");
        stEl.className = "ai-st st-" + r.status;
        stEl.textContent = { exact: "Exact", approx: "Approx", unclear: "Unclear", manual: "Manual", newq: "Not in class list", new: "New student" }[r.status];
        el.querySelector(".ai-newname").style.display = r.match === "new" ? "" : "none";

        if(r.match === "skip"){ lvl = "skip"; msgs.push("Skipped — will not be imported."); }
        else {
            let bad = false, pm = null;
            if(r.match === ""){
                bad = true;
                msgs.push(r.status === "newq" ? "This name is not in " + currentClass + " — it looks like a NEW student." : "Choose the matching student." + (r.note && /name|used/i.test(r.note) ? " " + r.note : ""));
                extra = '<button type="button" class="ai-addnew" data-ai="addnew" data-i="' + i + '">➕ Add as new student</button>';
            }
            else if(r.match === "new"){
                let nk = tokens(r.newName).join(" ");
                if(!nk){ bad = true; msgs.push("Type the new student's name."); }
                else if(rosterKeys[nk]){ bad = true; msgs.push("“" + r.newName.trim() + "” is already in " + currentClass + " — pick them from the list instead."); }
                else if(newUse[nk].length > 1){ bad = true; msgs.push("The same new student is added twice (rows " + newUse[nk].join(", ") + ")."); }
                else msgs.push("New student — will be added to " + currentClass + ", marked A in older tests.");
            }
            else if(use[r.match] && use[r.match].length > 1){ bad = true; msgs.push("Duplicate — same student also in row " + use[r.match].filter(n => n !== i + 1).join(", ") + "."); }
            pm = parseMark(r.marks, tm, tmOk);
            if(pm.err){ bad = true; msgs.push(pm.err); }

            if(r.status === "approx" && /^\d+$/.test(r.match)){
                ticks += tick("tickname", r.nameOk, "Name match is correct");
                if(!r.nameOk){ bad = true; msgs.push("Matched approximately — tick the box to confirm."); }
            }
            if(r.unsure){
                ticks += tick("tickmark", r.markOk, "I checked the mark on the photo");
                if(!r.markOk){ bad = true; msgs.push("Unclear on the photo" + (r.note ? " — " + r.note : "") + "."); }
                else if(r.note) msgs.push(r.note);
            }
            if(bad){ lvl = "err"; errs++; }
            else {
                ready++;
                if(exK !== -1 && /^\d+$/.test(r.match)){
                    let old = students[Number(r.match)] && students[Number(r.match)].marks[exK];
                    if(isRealMark(old) && String(old) !== pm.val) replaced++;
                }
            }
        }
        el.className = "ai-row " + lvl;
        el.querySelector("[data-ms]").innerHTML = msgs.map(m => '<div>' + escHTML(m) + '</div>').join("") + extra + ticks;
        el.querySelector('input[data-f="marks"]').classList.toggle("ai-a", String(r.marks).trim().toUpperCase() === "A");
    });

    let nApprox = S.rows.filter(r => r.status === "approx" && !r.nameOk && /^\d+$/.test(r.match)).length;
    let bulk = $("#aiBulk");
    bulk.style.display = nApprox ? "" : "none";
    bulk.querySelector("button").textContent = "☑ Confirm all " + nApprox + " approximate name match" + (nApprox === 1 ? "" : "es");

    // test messages
    let tm_ = tErr.map(m => '<span class="e">⚠ ' + escHTML(m) + '</span>').concat(tWarn.map(m => '<span class="w">' + escHTML(m) + '</span>'));
    if(exK !== -1) tm_.push('<span class="i">ℹ This test already exists in ' + escHTML(gradeOf(currentClass)) + ' — its marks column will be reused, no duplicate test.' + (replaced ? ' ' + replaced + ' existing mark(s) will be replaced.' : '') + '</span>');
    else if(!tErr.length) tm_.push('<span class="i">ℹ A new test will be added and shared with ' + escHTML(siblingOf(currentClass) || "") + ' and ' + escHTML(gradeOf(currentClass)) + ' Combined.</span>');
    $("#aiTestMsg").innerHTML = tm_.join("");

    // students not on the sheet
    let miss = [];
    students.forEach((s, i) => { if(!use[String(i)]) miss.push(getExportName(s.name)); });
    $("#aiMissing").innerHTML = miss.length
        ? '<b>Not on the sheet (' + miss.length + ')</b><p>' + miss.map(escHTML).join(", ") + '</p><small>' +
          (exK === -1 ? 'These students will be marked <b>A</b> (absent) for this test.' : 'Their existing marks for this test stay unchanged.') + '</small>'
        : '<b>✓ Every student of ' + escHTML(currentClass) + ' is on the sheet.</b>';

    let block = errs > 0 || tErr.length > 0 || ready === 0;
    let nNew = S.rows.filter(r => r.match === "new").length;
    let sumTxt = ready + " ready" + (nNew ? " · " + nNew + " new student" + (nNew === 1 ? "" : "s") : "") + (errs ? " · <b class='e'>" + errs + " need attention</b>" : "") + (warns ? " · " + warns + " to confirm" : "") + (miss.length ? " · " + miss.length + " missing" : "");
    $("#aiSum").innerHTML = block && ready === 0 && !errs && !tErr.length ? "Nothing to import." : sumTxt;
    let go = $("#aiImportGo"); go.disabled = block;
    go.title = block ? "Fix the highlighted items first." : "";
}

// ---------------------------------------------------------------- STEP 4: import + undo
function doImport(){
    refreshAll();
    let go = $("#aiImportGo");
    if(!go || go.disabled) return;
    let name = S.test.name.trim(), date = S.test.date, tm = String(S.test.tm).trim();
    if(!sectionOk()) return;

    saveData();
    let sib = siblingOf(currentClass), snap = {};
    snap[currentClass] = lsGet(currentClass);
    if(sib) snap[sib] = lsGet(sib);

    let newCount = 0;
    let refs = S.rows.map(r => {
        if(r.match === "skip") return null;
        if(/^\d+$/.test(r.match)) return students[Number(r.match)] || null;
        if(r.match === "new"){
            let st = { name: r.newName.trim(), marks: tests.map(() => "A") };
            students.push(st); newCount++;
            return st;
        }
        return null;
    });

    let key = testKey({ name: name, date: date, tm: tm });
    let k = tests.findIndex(t => testKey(t) === key), created = false;
    if(k === -1){
        let anchorKey = tests.length ? testKey(tests[tests.length - 1]) : null;
        tests.push({ name: name, date: date, tm: tm });
        students.forEach(s => s.marks.push("A"));
        k = tests.length - 1; created = true;
        saveData();
        updateSibling(d => {
            let pos = 0;
            if(anchorKey !== null){
                let a = d.tests.findIndex(t => testKey(t) === anchorKey);
                pos = a === -1 ? d.tests.length : a + 1;
            }
            d.tests.splice(pos, 0, { name: name, date: date, tm: tm });
            d.students.forEach(s => s.marks.splice(pos, 0, "A"));
        });
    }
    let tmN = Number(tm), count = 0;
    S.rows.forEach((r, ri) => {
        let st = refs[ri];
        if(!st) return;
        let pm = parseMark(r.marks, tmN, true);
        if(pm.err) return;
        while(st.marks.length < k) st.marks.push("A");
        st.marks[k] = pm.val;
        count++;
    });
    if(newCount) sortStudents();
    saveData();
    syncGrade(gradeOf(currentClass));
    render();

    try{ localStorage.setItem(UNDO_STORE, JSON.stringify({ cls: currentClass, test: name, count: count, snap: snap })); }catch(e){}
    refreshUndoBtn();
    S.done = { name: name, count: count, created: created, cls: currentClass, newCount: newCount };
    renderDone();
    toast("Imported " + count + " marks.");
}

function renderDone(){
    S.step = 4; steps();
    let d = S.done, sib = siblingOf(d.cls);
    bodyEl.innerHTML =
      '<div class="ai-done"><div class="ai-check">✓</div><h3>Import complete</h3>' +
      '<p><b>' + escHTML(d.name) + '</b> — ' + d.count + ' student marks added to <b>' + escHTML(d.cls) + '</b>.</p>' +
      (d.newCount ? '<p><b>' + d.newCount + ' new student' + (d.newCount === 1 ? '' : 's') + '</b> added to ' + escHTML(d.cls) + '.</p>' : '') +
      '<p class="ai-note c">' + (d.created ? "The test is now shared with " + escHTML(sib || "") + " and " + escHTML(gradeOf(d.cls)) + " Combined." : "The existing shared test was used — no duplicate was created.") +
      ' Only ' + escHTML(d.cls) + ' marks were changed.</p></div>';
    footEl.innerHTML =
      '<button type="button" class="btn btn-outline" data-ai="undo">↶ Undo this import</button>' +
      '<button type="button" class="btn btn-primary" data-ai="close">Done</button>';
}

function undoInfo(){
    let raw = lsGet(UNDO_STORE);
    if(!raw) return null;
    try{ return JSON.parse(raw); }catch(e){ return null; }
}
function askUndo(){
    let u = undoInfo();
    if(!u){ toast("Nothing to undo."); return; }
    close();
    showModal(
        '<h3>Undo AI Import?</h3>' +
        '<p class="warn">This brings <strong>' + escHTML(u.cls) + '</strong> back to how it was before importing <strong>' + escHTML(u.test) + '</strong>. ' +
        'Any change made after that import (to this class or its Boys/Girls partner) is undone too.</p>' +
        '<div class="modal-actions"><button class="btn btn-outline" onclick="hideModal()">Keep it</button>' +
        '<button class="btn btn-primary" style="background:linear-gradient(135deg,#DC2626,#B91C1C)" onclick="aiUndoImport()">Undo import</button></div>');
}
function undoImport(){
    let u = undoInfo();
    hideModal();
    if(!u){ return; }
    try{
        Object.keys(u.snap).forEach(k => { if(u.snap[k] === null) localStorage.removeItem(k); else localStorage.setItem(k, u.snap[k]); });
        localStorage.removeItem(UNDO_STORE);
    }catch(e){ toast("Undo failed: " + e.message); return; }
    refreshUndoBtn();
    if(currentClass) loadClass();
    toast("Import undone.");
}
window.aiUndoImport = undoImport;

// ---------------------------------------------------------------- events
function onClick(e){
    if(e.target === root){ close(); return; }
    let t = e.target.closest("[data-ai]");
    if(!t) return;
    let a = t.dataset.ai;
    if(a === "close") close();
    else if(a === "section"){ classSelect.value = t.dataset.v; loadClass(); renderSetup(); }
    else if(a === "mode"){ S.mode = t.dataset.v; renderSetup(); }
    else if(a === "togglekey"){ S.showKey = !S.showKey; renderSetup(); }
    else if(a === "forgetkey"){ S.key = ""; try{ localStorage.removeItem(KEY_STORE); }catch(err){} renderSetup(); toast("API key removed from this device."); }
    else if(a === "copyprompt") copyPrompt();
    else if(a === "go"){ S.mode === "auto" ? runAuto() : runPaste(); }
    else if(a === "back"){ if(S.abort) try{ S.abort.abort(); }catch(err){} renderSetup(); }
    else if(a === "import") doImport();
    else if(a === "undo") askUndo();
    else if(a === "tickall"){ S.rows.forEach(r => { if(r.status === "approx") r.nameOk = true; }); refreshAll(); }
    else if(a === "addnew"){
        let i = +t.dataset.i, r = S.rows[i], row = bodyEl.querySelector('.ai-row[data-i="' + i + '"]');
        r.match = "new"; r.status = "new";
        row.querySelector('select[data-f="match"]').value = "new";
        refreshAll();
        let ni = row.querySelector(".ai-newname"); if(ni){ ni.focus(); ni.select(); }
    }
    else if(a === "zoom") lightbox();
    else if(a === "lbin") lbStep(1);
    else if(a === "lbout") lbStep(-1);
    else if(a === "lbfit"){ lbSet(100); }
    else if(a === "lbclose") lbClose();
}
function onInput(e){
    let t = e.target;
    if(t.id === "aiKey") S.key = t.value;
    else if(t.id === "aiPaste") S.paste = t.value;
    else if(t.id === "aiTName"){ S.test.name = t.value; refreshAll(); }
    else if(t.id === "aiTDate"){ S.test.date = t.value; refreshAll(); }
    else if(t.id === "aiTTM"){ S.test.tm = t.value; refreshAll(); }
    else if(t.dataset && t.dataset.f === "newname"){
        S.rows[+t.closest(".ai-row").dataset.i].newName = t.value;
        refreshAll();
    }
    else if(t.dataset && t.dataset.f === "marks"){
        let i = +t.closest(".ai-row").dataset.i;
        S.rows[i].marks = t.value;
        if(S.rows[i].unsure) S.rows[i].markOk = true;     // user typed it himself
        refreshAll();
    }
}
function onChange(e){
    let t = e.target;
    if(t.id === "aiFile"){ if(t.files && t.files[0]) setFile(t.files[0]); t.value = ""; }
    else if(t.dataset && (t.dataset.f === "tickname" || t.dataset.f === "tickmark")){
        let r = S.rows[+t.closest(".ai-row").dataset.i];
        if(t.dataset.f === "tickname") r.nameOk = t.checked; else r.markOk = t.checked;
        refreshAll();
    }
    else if(t.dataset && t.dataset.f === "match"){
        let i = +t.closest(".ai-row").dataset.i;
        S.rows[i].match = t.value;
        S.rows[i].status = t.value === "new" ? "new" : "manual";
        refreshAll();
    }
}
function copyPrompt(){
    let txt = promptPaste();
    let fallback = () => { let ta = $("#aiPrompt"); if(ta){ ta.select(); try{ document.execCommand("copy"); toast("Prompt copied."); }catch(e){ toast("Select and copy the prompt manually."); } } };
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(() => toast("Prompt copied."), fallback);
    else fallback();
}
const LB_STEPS = [100, 150, 200, 300, 400, 600];
function lbEl(){ return root ? root.querySelector(".ai-lightbox") : null; }
function lbClose(){ let lb = lbEl(); if(lb) lb.remove(); }
function lbSet(z){
    let lb = lbEl(); if(!lb) return;
    let v = lb.querySelector("#aiLbView"), img = lb.querySelector("#aiLbImg");
    let cx = (v.scrollLeft + v.clientWidth / 2) / Math.max(1, v.scrollWidth);
    let cy = (v.scrollTop + v.clientHeight / 2) / Math.max(1, v.scrollHeight);
    S.lbZ = z;
    img.style.width = z + "%";
    lb.querySelector("#aiLbPct").textContent = z + "%";
    v.scrollLeft = cx * v.scrollWidth - v.clientWidth / 2;       // keep the same spot in view
    v.scrollTop = cy * v.scrollHeight - v.clientHeight / 2;
}
function lbStep(dir){
    let z = S.lbZ || 100, idx = 0;
    LB_STEPS.forEach((s, i) => { if(s <= z) idx = i; });
    lbSet(LB_STEPS[Math.max(0, Math.min(LB_STEPS.length - 1, idx + dir))]);
}
function lightbox(){
    if(!S.imgUrl || lbEl()) return;
    let lb = document.createElement("div");
    lb.className = "ai-lightbox";
    lb.innerHTML =
      '<div class="ai-lb-bar"><span class="ai-lb-t">Scroll or drag to move around the photo</span><div class="ai-lb-ctl">' +
      '<button type="button" data-ai="lbout" aria-label="Zoom out">−</button><b id="aiLbPct">100%</b>' +
      '<button type="button" data-ai="lbin" aria-label="Zoom in">＋</button>' +
      '<button type="button" data-ai="lbfit">Fit</button>' +
      '<button type="button" class="x" data-ai="lbclose">✕ Close</button></div></div>' +
      '<div class="ai-lb-view" id="aiLbView"><img id="aiLbImg" src="' + S.imgUrl + '" alt="Sheet photo" draggable="false"></div>';
    root.querySelector(".ai-panel").appendChild(lb);
    S.lbZ = 100; lbSet(100);

    let v = lb.querySelector("#aiLbView"), drag = null;
    v.addEventListener("pointerdown", e => {
        if(e.pointerType !== "mouse") return;                    // touch uses normal finger scrolling
        drag = { x: e.clientX, y: e.clientY, l: v.scrollLeft, t: v.scrollTop };
        v.classList.add("drag"); v.setPointerCapture(e.pointerId);
    });
    v.addEventListener("pointermove", e => {
        if(!drag) return;
        v.scrollLeft = drag.l - (e.clientX - drag.x);
        v.scrollTop = drag.t - (e.clientY - drag.y);
    });
    let end = () => { drag = null; v.classList.remove("drag"); };
    v.addEventListener("pointerup", end);
    v.addEventListener("pointercancel", end);
    v.addEventListener("wheel", e => { if(e.ctrlKey){ e.preventDefault(); lbStep(e.deltaY < 0 ? 1 : -1); } }, { passive: false });
    v.addEventListener("dblclick", () => lbSet((S.lbZ || 100) > 100 ? 100 : 250));
}

// ---------------------------------------------------------------- buttons (inside .backup-bar, else floating bottom-left)
function refreshUndoBtn(){
    let b = document.getElementById("aiUndoBtn");
    if(b) b.style.display = undoInfo() ? "" : "none";
}
function mount(){
    let btn = document.getElementById("aiImportBtn");
    let undo = document.getElementById("aiUndoBtn");
    let bar = document.querySelector(".backupBar, .backup-bar");
    if(!btn){
        btn = document.createElement("button");
        btn.type = "button"; btn.id = "aiImportBtn";
        btn.className = bar ? "btn-mini ai-import-btn" : "ai-fab";
        btn.innerHTML = '<span class="ai-btn-spark">✦</span> AI Import';
        if(!undo){
            undo = document.createElement("button");
            undo.type = "button"; undo.id = "aiUndoBtn";
            undo.className = bar ? "btn-mini ai-undo-btn" : "ai-fab ai-fab-undo";
            undo.textContent = "↶ Undo AI Import";
            undo.style.display = "none";
        }
        if(bar){ bar.appendChild(btn); bar.appendChild(undo); }
        else {
            let wrap = document.createElement("div");
            wrap.className = "ai-fab-wrap";
            wrap.appendChild(undo); wrap.appendChild(btn);
            document.body.appendChild(wrap);
        }
    }
    btn.addEventListener("click", open);
    if(undo) undo.addEventListener("click", askUndo);
    refreshUndoBtn();
}
mount();

})();

// ===================== COMBINED TABS (built by script, works with ANY index.html) =====================
// Adds the 3 separate lists (Last 3 / Last 5 / All Tests) above the table.
// Light styling only (no blur / animation), so it runs on slow computers too.
(function(){
    let st = document.createElement("style");
    st.textContent =
      "#rangeBar{margin:0 0 18px;display:block}" +
      "#rangeBar .rangeHead{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:6px 14px;margin-bottom:10px}" +
      "#rangeBar #rangeTitle{margin:0;font-size:19px;font-weight:700;color:#f1f6ff}" +
      "#rangeBar #rangeInfo{font-size:13px;color:#9db4d8}" +
      "#rangeBar .rangeTabs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:6px;border-radius:14px;background:#0a1a3a;border:1px solid #1e3a6e}" +
      "#rangeBar .rangeTab{display:flex;flex-direction:column;align-items:center;gap:2px;padding:11px 6px;border:0;border-radius:10px;background:transparent;color:#9db4d8;cursor:pointer;font-family:inherit}" +
      "#rangeBar .rangeTab b{font-size:15px}#rangeBar .rangeTab small{font-size:11.5px;opacity:.85}" +
      "#rangeBar .rangeTab:hover{background:#12306a;color:#fff}" +
      "#rangeBar .rangeTab.on{background:#2563eb;color:#fff;box-shadow:0 0 0 2px #22d3ee inset}" +
      "#combinedStats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:0 0 16px}" +
      "#combinedStats .statCard{padding:12px 14px;border-radius:10px;background:#0a1a3a;border:1px solid #1e3a6e}" +
      "#combinedStats .statCard small{display:block;font-size:12px;color:#9db4d8;margin-bottom:3px}" +
      "#combinedStats .statCard b{font-size:17px;color:#f1f6ff;overflow-wrap:anywhere}" +
      "@media(max-width:560px){#rangeBar .rangeTab small{display:none}#rangeBar .rangeTab b{font-size:13px}}";
    document.head.appendChild(st);

    // give the existing buttons ids so Combined can hide Add Test / Add Student / Save
    [["addTest()", "btnAddTest"], ["addStudent()", "btnAddStudent"], ["manualSave()", "btnSave"]].forEach(p => {
        let b = document.querySelector('button[onclick="' + p[0] + '"]');
        if(b && !b.id) b.id = p[1];
    });

    if(!document.getElementById("rangeBar")){
        let anchor = document.querySelector(".tableScroll, .glass-table-container") || (document.getElementById("resultTable") || {}).parentElement;
        if(anchor){
            let bar = document.createElement("section");
            bar.id = "rangeBar";
            bar.style.display = "none";
            bar.innerHTML =
              '<div class="rangeHead"><h3 id="rangeTitle"></h3><span id="rangeInfo"></span></div>' +
              '<div class="rangeTabs" role="tablist">' +
              '<button type="button" role="tab" class="rangeTab" data-range="3"><b>Last 3 Tests</b><small>Combined List</small></button>' +
              '<button type="button" role="tab" class="rangeTab" data-range="5"><b>Last 5 Tests</b><small>Combined List</small></button>' +
              '<button type="button" role="tab" class="rangeTab on" data-range="all"><b>All Tests</b><small>Combined List</small></button></div>';
            bar.addEventListener("click", e => {
                let t = e.target.closest("[data-range]");
                if(t) setRange(t.dataset.range);
            });
            let stats = document.createElement("div");
            stats.id = "combinedStats";
            stats.style.display = "none";
            anchor.parentNode.insertBefore(bar, anchor);
            anchor.parentNode.insertBefore(stats, anchor);
        }
    }
    updateRangeUI();
})();


// ===================== AUTO-BACKUP TO A FILE ON THE COMPUTER (Chrome / Edge) =====================
// "New Auto-Backup File" -> choose a name + folder once. After that the SAME file is updated by itself
// every time any class data changes. The file is kept in the browser's memory between visits; after a
// restart the browser may ask for one click ("Resume") to allow writing again.
(function(){
    const AB = { handle: null, state: "off", name: "", last: "", timer: null, busy: false, dirty: false };
    const supported = typeof window.showSaveFilePicker === "function";

    // ---- tiny IndexedDB helpers (to remember the file between visits) ----
    function idb(){
        return new Promise((res, rej) => {
            let r = indexedDB.open("physicsAutoBackup", 1);
            r.onupgradeneeded = () => r.result.createObjectStore("h");
            r.onsuccess = () => res(r.result);
            r.onerror = () => rej(r.error);
        });
    }
    async function idbGet(k){ let db = await idb(); return new Promise((res, rej) => { let q = db.transaction("h").objectStore("h").get(k); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); }); }
    async function idbSet(k, v){ let db = await idb(); return new Promise((res, rej) => { let q = db.transaction("h", "readwrite").objectStore("h").put(v, k); q.onsuccess = () => res(); q.onerror = () => rej(q.error); }); }
    async function idbDel(k){ let db = await idb(); return new Promise((res, rej) => { let q = db.transaction("h", "readwrite").objectStore("h").delete(k); q.onsuccess = () => res(); q.onerror = () => rej(q.error); }); }

    function build(){
        let out = {};
        Object.keys(classes).forEach(cls => {
            let sv = localStorage.getItem(cls);
            if(sv){ try{ out[cls] = JSON.parse(sv); }catch(e){} }
        });
        return out;
    }

    async function write(){
        if(!AB.handle) return;
        if(AB.busy){ AB.dirty = true; return; }
        let data = build();
        if(!Object.keys(data).length) return;            // never overwrite a good backup with an empty one
        AB.busy = true;
        try{
            if((await AB.handle.queryPermission({ mode: "readwrite" })) !== "granted") throw new Error("permission");
            let w = await AB.handle.createWritable();
            await w.write(JSON.stringify(data, null, 2));
            await w.close();
            AB.state = "on";
            AB.last = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        } catch(e){
            AB.state = "paused";
        }
        AB.busy = false;
        render();
        if(AB.dirty){ AB.dirty = false; if(AB.state === "on") write(); }
    }
    window.autoBackupSoon = function(){
        if(!AB.handle) return;
        clearTimeout(AB.timer);
        AB.timer = setTimeout(write, 900);
    };

    async function setup(){
        if(!supported){ toast("Auto-backup works only in Chrome or Edge on a computer."); return; }
        try{
            let h = await window.showSaveFilePicker({
                suggestedName: "Physics_Results_AutoBackup.json",
                types: [{ description: "Backup file", accept: { "application/json": [".json"] } }]
            });
            AB.handle = h; AB.name = h.name; AB.state = "on";
            try{ await idbSet("handle", h); }catch(e){}
            await write();
            toast("Auto-backup is ON: " + h.name);
        } catch(e){
            if(!e || e.name !== "AbortError") toast("Could not create the backup file.");
        }
        render();
    }
    async function resume(){
        try{
            let p = await AB.handle.requestPermission({ mode: "readwrite" });
            if(p === "granted"){ AB.state = "on"; await write(); toast("Auto-backup resumed."); }
            else toast("Permission was not given.");
        } catch(e){ toast("Could not resume. Use Change file."); }
        render();
    }
    async function stop(){
        AB.handle = null; AB.state = "off"; AB.name = "";
        try{ await idbDel("handle"); }catch(e){}
        render();
        toast("Auto-backup turned off.");
    }

    // ---- buttons inside the backup bar ----
    let box = null;
    function mountUI(){
        let bar = document.querySelector(".backupBar, .backup-bar");
        if(!bar) return;
        let ref = bar.querySelector("button");
        let cls = ref ? ref.className.replace(/\bai-[\w-]+/g, "").trim() : "btn-mini";
        box = document.createElement("span");
        box.id = "abBox";
        box.style.cssText = "display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;";
        box.innerHTML = '<button type="button" id="abMain" class="' + cls + '"></button>' +
                        '<button type="button" id="abStop" class="' + cls + '" style="display:none">Stop</button>' +
                        '<span id="abInfo" style="font-size:12.5px;opacity:.85"></span>';
        bar.appendChild(box);
        box.querySelector("#abMain").onclick = () => { if(AB.state === "paused") resume(); else setup(); };
        box.querySelector("#abStop").onclick = stop;
    }
    function render(){
        if(!box) return;
        let main = box.querySelector("#abMain"), stopB = box.querySelector("#abStop"), info = box.querySelector("#abInfo");
        stopB.style.display = AB.handle ? "" : "none";
        if(!supported){ main.textContent = "📁 Auto-Backup File"; info.textContent = "Chrome / Edge on a computer only"; return; }
        if(AB.state === "on"){
            main.textContent = "📁 Change file";
            info.textContent = "✓ Auto-backup ON → " + AB.name + (AB.last ? " · saved " + AB.last : "");
        } else if(AB.state === "paused"){
            main.textContent = "▶ Resume auto-backup";
            info.textContent = "⚠ Paused: " + AB.name + " (click Resume)";
        } else {
            main.textContent = "📁 New Auto-Backup File";
            info.textContent = "";
        }
    }

    // ---- every write to a class key triggers the (debounced) file update ----
    (function(){
        let setI = Storage.prototype.setItem, remI = Storage.prototype.removeItem;
        Storage.prototype.setItem = function(k){ let r = setI.apply(this, arguments); if(this === window.localStorage && classes[k]) window.autoBackupSoon(); return r; };
        Storage.prototype.removeItem = function(k){ let r = remI.apply(this, arguments); if(this === window.localStorage && classes[k]) window.autoBackupSoon(); return r; };
    })();

    mountUI();
    render();
    (async function init(){
        if(!supported) return;
        try{
            let h = await idbGet("handle");
            if(h){
                AB.handle = h; AB.name = h.name;
                AB.state = (await h.queryPermission({ mode: "readwrite" })) === "granted" ? "on" : "paused";
                if(AB.state === "on") write();
            }
        } catch(e){}
        render();
    })();
})();