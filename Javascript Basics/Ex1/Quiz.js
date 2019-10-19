const readline = require('readline');

(function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var keepScore = score();

    function Question(description, answers, answer) {
        this.description = description;
        this.answers = answers;
        this.answer = answer;
    }

    Question.prototype.printQuestion = function () {
        console.log(this.description);
        for (i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (this.answer === ans) {
            console.log("Answer is correct !. Your score is : " + keepScore(true));
        } else {
            console.log("Incorrect answer !. Your score is : " + keepScore(false));
        }
    }

    var questions = [
        new Question('Is javascript good?', ['No, it is Not', 'Yes, it Is'], 1),
        new Question('Which one is better out of following?', ['Java', 'Node', 'Javascript'], 2),
        new Question('Which subject is most difficult?', ['Science', 'Maths', 'Dancing'], 1),
        new Question('Who is the richest person?', ['Jeff', 'Bill Gates', 'Bin larden'], 0),
        new Question('When is my birthday', ['1982', '1983', '1985', '1986'], 3)
    ];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    function nextQuestion() {
        var randQ = Math.floor(Math.random() * questions.length);
        questions[randQ].printQuestion();

        rl.question('Please enter the answer? ', (answer) => {
            if (answer !== 'exit') {
                var inputAns = parseInt(answer);
                questions[randQ].checkAnswer(inputAns);
                nextQuestion();
            } else {
                rl.close();
            }
        });
    }

    nextQuestion();

})();
