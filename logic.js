import {SEM_INFO} from './variables.js';

var selected_sem = SEM_INFO.first;

function tableDrawerExecution() {
    var myTableBodyDiv = document.getElementById("VarTable");
    while (myTableBodyDiv.hasChildNodes()) {
        myTableBodyDiv.removeChild(myTableBodyDiv.childNodes[0]);
    }

    var subjects = selected_sem.subjects;
    for (var i = 0; i < subjects.length; i++) {
        var tr = document.createElement('TR');

        var th = document.createElement('TH');
        th.appendChild(document.createTextNode(i + 1));
        tr.appendChild(th);

        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(subjects[i].code));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(subjects[i].subject));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(subjects[i].credit));
        tr.appendChild(td);

        var td = document.createElement('TD');
        var div = document.createElement('DIV');
        div.className = "row g-3 align-items-center";
        var input = document.createElement('INPUT');
        input.type = "text";
        input.className = "form-control";
        input.placeholder = "0";
        input.id = "g" + i;
        div.appendChild(input);
        td.appendChild(div);
        tr.appendChild(td);

        var tdLG = document.createElement('TD');
        tdLG.id = "L" + i;
        tdLG.appendChild(document.createTextNode("0"));
        tr.appendChild(tdLG);

        if (i === 0) {
            var tdGPA = document.createElement('TD');
            tdGPA.id = "GPA";
            tdGPA.rowSpan = 100;
            tdGPA.appendChild(document.createTextNode("0"));
            tr.appendChild(tdGPA);

            if (selected_sem.previous_cch == 0) {
                var td = document.createElement('TD');
                td.id = "PGPA";
                td.rowSpan = 100;
                td.appendChild(document.createTextNode("0"));
                tr.appendChild(td);
            } else {
                var td = document.createElement('TD');
                var div = document.createElement('DIV');
                div.className = "row g-3 align-items-center";
                var input = document.createElement('INPUT');
                input.type = "text";
                input.className = "form-control";
                input.placeholder = "0";
                input.id = "PGPA";
                div.appendChild(input);
                td.rowSpan = 100;
                td.appendChild(div);
                tr.appendChild(td);
            }

            var tdPCCH = document.createElement('TD');
            tdPCCH.id = "PCCH";
            tdPCCH.rowSpan = 100;
            tdPCCH.appendChild(document.createTextNode(selected_sem.previous_cch));
            tr.appendChild(tdPCCH);

            var tdCGPA = document.createElement('TD');
            tdCGPA.id = "CGPA";
            tdCGPA.rowSpan = 100;
            tdCGPA.appendChild(document.createTextNode("0"));
            tr.appendChild(tdCGPA);

            var tdCCH = document.createElement('TD');
            tdCCH.id = "CCH";
            tdCCH.rowSpan = 100;
            tdCCH.appendChild(document.createTextNode("0"));
            tr.appendChild(tdCCH);

            var tdRemarks = document.createElement('TD');
            tdRemarks.id = "remarks";
            tdRemarks.rowSpan = 100;
            tdRemarks.appendChild(document.createTextNode("0"));
            tr.appendChild(tdRemarks);
        }

        myTableBodyDiv.appendChild(tr);
    }
}

function tableSelector(sem_no) {
    for (const key in SEM_INFO) {
        sem_no--;
        if (sem_no) {
            continue;
        }
        console.log(key);
        selected_sem = SEM_INFO[key];
        document.getElementById("SemName").innerText = key.charAt(0).toUpperCase() + key.slice(1) + " Semester";
        break;
    }
    tableDrawerExecution();
}

document.querySelectorAll('.page-link').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.page-item').forEach(item => item.classList.remove('active'));
        this.parentElement.classList.add('active');
        tableSelector(parseInt(this.innerText));
    });
});

tableDrawerExecution();

function calculateLetterGrade(grade) {
    if (grade >= 4) {
        return 'A+';
    } else if (grade >= 3.75) {
        return 'A';
    } else if (grade >= 3.5) {
        return 'A-';
    } else if (grade >= 3.25) {
        return 'B+';
    } else if (grade >= 3) {
        return 'B';
    } else if (grade >= 2.75) {
        return 'B-';
    } else if (grade >= 2.5) {
        return 'C+';
    } else if (grade >= 2.25) {
        return 'C';
    } else if (grade >= 2) {
        return 'D';
    } else {
        return 'F';
    }
}

document.getElementById('calculate').addEventListener('click', function () {
    let total_GradexCredit = 0;
    let total_credit = 0;
    let f_grade = 0;

    for (var i = 0; i < selected_sem.subjects.length; i++) {
        let grade = parseFloat(document.getElementById('g' + i).value);
        let credit = selected_sem.subjects[i].credit;

        document.getElementById("L" + i).innerText = calculateLetterGrade(grade);
        total_credit += credit;
        total_GradexCredit += grade * credit;
        if (grade < 2) {
            f_grade += 1;
        }
    }

    let gpa = total_GradexCredit / total_credit;

    let PCCH = document.getElementById('PCCH').innerText;
    let total_doubled_credit = total_credit + parseFloat(PCCH);

    let PGPA = 0;
    if (selected_sem.previous_cch != 0)
        PGPA = document.getElementById('PGPA').value;
    console.log(PGPA, PCCH, total_GradexCredit, total_doubled_credit);

    let CGPA = (parseFloat(PGPA) * parseFloat(PCCH) + total_GradexCredit) / total_doubled_credit;

    document.getElementById("GPA").innerText = gpa.toFixed(3);
    document.getElementById("CCH").innerText = total_doubled_credit.toFixed(3);
    document.getElementById("CGPA").innerText = CGPA.toFixed(3);

    document.getElementById("remarks").innerText = "F in " + f_grade;

    alert('Your CGPA is ' + CGPA.toFixed(3));
});
