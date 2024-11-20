var selected_sem = 1;
const SEM_INFO = {
    first: {
        subjects: [{ code: 'PHY-111', subject: 'Physics-I', credit: 3 },
        { code: 'PHY-112', subject: 'Physics-I Sessional.', credit: 0.75 },
        { code: 'CHE-111', subject: 'Chemistry', credit: 3 },
        { code: 'CHE-112', subject: 'Chemistry Sessional', credit: 0.75 },
        { code: 'MAT-111', subject: 'Mathematics-I', credit: 3 },
        { code: 'EEE-111', subject: 'Basic Electrical Engineering', credit: 3 },
        { code: 'EEE-112', subject: 'Basic Electrical Engineering Sessional', credit: 1.5 },
        { code: 'CIT-111', subject: 'Programming Language', credit: 3 },
        { code: 'CIT-112', subject: 'Programming Language Sessional', credit: 1.5 },
        { code: 'CCE-112', subject: 'Engineering Drawing', credit: 0.75 }],
        previous_cch: 0
    },
    second: {
        subjects: [{ code: 'PHY-121', subject: 'Physics-II', credit: 3 },
        { code: 'PHY-122', subject: 'Physics-II Sessional.', credit: 0.75 },
        { code: 'MAT-121', subject: 'Mathematics-II', credit: 3 },
        { code: 'CIT-121', subject: 'Discrete Mathematics', credit: 3 },
        { code: 'LCM-121', subject: 'Communicative English', credit: 2 },
        { code: 'EEE-121', subject: 'Electronic Device and Circuits', credit: 3 },
        { code: 'EEE-122', subject: 'Electronic Device and Circuits Sessional', credit: 1.5 },
        { code: 'CCE-121', subject: 'Object Oriented Programming', credit: 3 },
        { code: 'CCE-122', subject: 'Object Oriented Programming Sessional', credit: 1.5 }],
        previous_cch: 20.25
    }
}

function tableDrawer(sem) {
    var myTableBodyDiv = document.getElementById("VarTable");
    if (myTableBodyDiv.hasChildNodes()) {
        myTableBodyDiv.removeChild(myTableBodyDiv.childNodes[0]);
    }

    var subjects = sem.subjects;
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

        myTableBodyDiv.appendChild(tr);
    }
}

tableDrawer(SEM_INFO.first);

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

document.getElementById('calculate-1').addEventListener('click', function () {
    let total_grade = 0;
    let total_credit = 0;
    let f_grade = 0;

    document.getElementById("LG11").innerText = calculateLetterGrade(document.getElementById('s11').value);
    total_credit += parseFloat(document.getElementById('c11').innerText);
    total_grade += parseFloat(document.getElementById('s11').value) * parseFloat(document.getElementById('c11').innerText);
    if (document.getElementById('s11').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG12").innerText = calculateLetterGrade(document.getElementById('s12').value);
    total_credit += parseFloat(document.getElementById('c12').innerText);
    total_grade += parseFloat(document.getElementById('s12').value) * parseFloat(document.getElementById('c12').innerText);
    if (document.getElementById('s12').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG13").innerText = calculateLetterGrade(document.getElementById('s13').value);
    total_credit += parseFloat(document.getElementById('c13').innerText);
    total_grade += parseFloat(document.getElementById('s13').value) * parseFloat(document.getElementById('c13').innerText);
    if (document.getElementById('s13').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG14").innerText = calculateLetterGrade(document.getElementById('s14').value);
    total_credit += parseFloat(document.getElementById('c14').innerText);
    total_grade += parseFloat(document.getElementById('s14').value) * parseFloat(document.getElementById('c14').innerText);
    if (document.getElementById('s14').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG15").innerText = calculateLetterGrade(document.getElementById('s15').value);
    total_credit += parseFloat(document.getElementById('c15').innerText);
    total_grade += parseFloat(document.getElementById('s15').value) * parseFloat(document.getElementById('c15').innerText);
    if (document.getElementById('s15').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG16").innerText = calculateLetterGrade(document.getElementById('s16').value);
    total_credit += parseFloat(document.getElementById('c16').innerText);
    total_grade += parseFloat(document.getElementById('s16').value) * parseFloat(document.getElementById('c16').innerText);
    if (document.getElementById('s16').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG17").innerText = calculateLetterGrade(document.getElementById('s17').value);
    total_credit += parseFloat(document.getElementById('c17').innerText);
    total_grade += parseFloat(document.getElementById('s17').value) * parseFloat(document.getElementById('c17').innerText);
    if (document.getElementById('s17').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG18").innerText = calculateLetterGrade(document.getElementById('s18').value);
    total_credit += parseFloat(document.getElementById('c18').innerText);
    total_grade += parseFloat(document.getElementById('s18').value) * parseFloat(document.getElementById('c18').innerText);
    if (document.getElementById('s18').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG19").innerText = calculateLetterGrade(document.getElementById('s19').value);
    total_credit += parseFloat(document.getElementById('c19').innerText);
    total_grade += parseFloat(document.getElementById('s19').value) * parseFloat(document.getElementById('c19').innerText);
    if (document.getElementById('s19').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG110").innerText = calculateLetterGrade(document.getElementById('s110').value);
    total_credit += parseFloat(document.getElementById('c110').innerText);
    total_grade += parseFloat(document.getElementById('s110').value) * parseFloat(document.getElementById('c110').innerText);
    if (document.getElementById('s110').value < 2) {
        f_grade += 1;
    }

    let gpa = total_grade / total_credit;

    let PCCH1 = document.getElementById('PCCH1').innerText;
    total_doubled_credit = total_credit + parseFloat(PCCH1);
    // total_credit += parseFloat(PCCH1);

    let PGPA1 = document.getElementById('PGPA1').innerText;
    let CGPA = (parseFloat(PGPA1) * parseFloat(PCCH1) + gpa * total_credit) / total_doubled_credit;

    document.getElementById("GPA1").innerText = gpa.toFixed(3);
    document.getElementById("CCH1").innerText = total_doubled_credit.toFixed(3);
    document.getElementById("CGPA1").innerText = CGPA.toFixed(3);

    document.getElementById("remarks1").innerText = "F in " + f_grade;

    alert('Your GPA is ' + CGPA.toFixed(3));
});

document.getElementById('calculate-2').addEventListener('click', function () {
    let total_grade = 0;
    let total_credit = 0;
    let f_grade = 0;

    document.getElementById("LG21").innerText = calculateLetterGrade(document.getElementById('s21').value);
    total_credit += parseFloat(document.getElementById('c21').innerText);
    total_grade += parseFloat(document.getElementById('s21').value) * parseFloat(document.getElementById('c21').innerText);
    if (document.getElementById('s21').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG22").innerText = calculateLetterGrade(document.getElementById('s22').value);
    total_credit += parseFloat(document.getElementById('c22').innerText);
    total_grade += parseFloat(document.getElementById('s22').value) * parseFloat(document.getElementById('c22').innerText);
    if (document.getElementById('s22').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG23").innerText = calculateLetterGrade(document.getElementById('s23').value);
    total_credit += parseFloat(document.getElementById('c23').innerText);
    total_grade += parseFloat(document.getElementById('s23').value) * parseFloat(document.getElementById('c23').innerText);
    if (document.getElementById('s23').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG24").innerText = calculateLetterGrade(document.getElementById('s24').value);
    total_credit += parseFloat(document.getElementById('c24').innerText);
    total_grade += parseFloat(document.getElementById('s24').value) * parseFloat(document.getElementById('c24').innerText);
    if (document.getElementById('s24').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG25").innerText = calculateLetterGrade(document.getElementById('s25').value);
    total_credit += parseFloat(document.getElementById('c25').innerText);
    total_grade += parseFloat(document.getElementById('s25').value) * parseFloat(document.getElementById('c25').innerText);
    if (document.getElementById('s25').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG26").innerText = calculateLetterGrade(document.getElementById('s26').value);
    total_credit += parseFloat(document.getElementById('c26').innerText);
    total_grade += parseFloat(document.getElementById('s26').value) * parseFloat(document.getElementById('c26').innerText);
    if (document.getElementById('s26').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG27").innerText = calculateLetterGrade(document.getElementById('s27').value);
    total_credit += parseFloat(document.getElementById('c27').innerText);
    total_grade += parseFloat(document.getElementById('s27').value) * parseFloat(document.getElementById('c27').innerText);
    if (document.getElementById('s27').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG28").innerText = calculateLetterGrade(document.getElementById('s28').value);
    total_credit += parseFloat(document.getElementById('c28').innerText);
    total_grade += parseFloat(document.getElementById('s28').value) * parseFloat(document.getElementById('c28').innerText);
    if (document.getElementById('s28').value < 2) {
        f_grade += 1;
    }

    document.getElementById("LG29").innerText = calculateLetterGrade(document.getElementById('s29').value);
    total_credit += parseFloat(document.getElementById('c29').innerText);
    total_grade += parseFloat(document.getElementById('s29').value) * parseFloat(document.getElementById('c29').innerText);
    if (document.getElementById('s29').value < 2) {
        f_grade += 1;
    }

    let gpa = total_grade / total_credit;

    let PCCH2 = document.getElementById('PCCH2').innerText;
    total_doubled_credit = total_credit + parseFloat(PCCH2);
    // total_credit += parseFloat(PCCH2);

    let PGPA2 = document.getElementById('PGPA2').value;
    let CGPA = (parseFloat(PGPA2) * parseFloat(PCCH2) + gpa * total_credit) / total_doubled_credit;

    document.getElementById("GPA2").innerText = gpa.toFixed(3);
    document.getElementById("CCH2").innerText = total_doubled_credit.toFixed(3);
    document.getElementById("CGPA2").innerText = CGPA.toFixed(3);

    document.getElementById("remarks2").innerText = "F in " + f_grade;

    alert('Your GPA is ' + CGPA.toFixed(3));
});
