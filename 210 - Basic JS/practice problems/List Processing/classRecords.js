var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


const EXERCISE_WEIGHT = 0.35;
const EXAM_WEIGHT = 0.65;

function generateClassRecordSummary(studentScores) {
  var results;

  results = {
    studentGrades:  [],
    exams: [],
  };

  addStudentGrades(studentScores, results);
  addExamSummary(studentScores, results);

  return results;
}

function addStudentGrades(studentScores, results) {
  for (student in studentScores) {
    var aveExams = averageExams(studentScores[student].scores.exams);
    var totalExercises = sumExercises(studentScores[student].scores.exercises);

    var finalScore = weightScores(aveExams, EXAM_WEIGHT, totalExercises, EXERCISE_WEIGHT);
    var roundedScore = Math.round(finalScore);
    var letterScore = lookupGrade(finalScore);

    results.studentGrades.push(`${roundedScore} (${letterScore})`);
  }
}

function addExamSummary(studentScores, results) {
  var orderedExams = organiseExamScores(studentScores);

  orderedExams.forEach(function(exam) {
    var averageScore = averageExams(exam);
    var minScore = minExam(exam);
    var maxScore = maxExam(exam);

    var summary = {
      average: averageScore,
      minimum: minScore,
      maximum: maxScore,
    }

    results.exams.push(summary)
    });
}

function organiseExamScores(studentScores) {
  var exams = []

  for (student in studentScores) {
    var examScores = studentScores[student].scores.exams

    examScores.forEach(function(score, index) {
      (exams[index]) ? exams[index].push(score) : exams[index] = [score];
    });
    }

  return exams;
}

function averageExams(exams) {
  return (exams.reduce((total, examScore) => sum(total, examScore)) / exams.length);
}

function sumExercises(exercises) {
  return exercises.reduce((total, exercise) => sum(total, exercise));
}

function minExam(exam) {
  return Math.min(...exam)
}

function maxExam(exam) {
  return Math.max(...exam)
}

function weightScores(examAverageScore, examWeight, exercisesScore, exerciseWeight) {
  return( examAverageScore * examWeight) + (exercisesScore * exerciseWeight);
}

function lookupGrade(finalScore) {
 if (finalScore >= 93) return 'A';
 if (finalScore >= 85) return 'B';
 if (finalScore >= 77) return 'C';
 if (finalScore >= 69) return 'D';
 if (finalScore >= 60) return 'E';
 return 'F';
}

function sum(total, value) {
  return total + value;
}

console.log(generateClassRecordSummary(studentScores));

