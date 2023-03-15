let container = document.querySelector("#container");
let current_question = 1;
let total_correct_ans = 0;

window.onload = () => {
    quizRules();
}

let quizRules = () => {
    current_question = 1;
    total_correct_ans = 0;

    container.innerHTML = `
    <div class="header">Regras do Quiz</div>
        <ol></ol>
        <div id="start-quiz-wrapper">
            <button id="start-quiz">Começar</button>
        </div>
    `;

    ol = document.querySelector("ol");

    quiz_rules.forEach(rule => {
        ol.innerHTML += `<li>${rule}</li>`
    });

    start_quiz_btn = document.querySelector("#start-quiz");

    start_quiz_btn.addEventListener("click", () => {
        quizQuestion(current_question);
    });
}


let quizQuestion = (q) => {
    q--;
    container.innerHTML = `
    <div class="header">Quiz de UX/UI</div>
        <div class="content">
            <div class="content-wrapper">
                <h2 class="question">${current_question + "." + quiz_questions[q]['question']}</h2>
                <div id="option-container">
                </div>
            </div>
            <div class="footer" id="footer">
                <p id="timer">Tempo restante: 20 s</p>
            </div>
        </div>
    `;

    let options_container = document.querySelector("#option-container");

    quiz_questions[q]['options'].forEach((option, index) => {
        options_container.innerHTML += `<p class="option">${option}</p>`
    });


    options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        option.addEventListener("click", () => {
            clearInterval(interval);
            // adding next question button
            document.querySelector("#footer").innerHTML += `<button id="next-question">Próxima</button>`;

            document.querySelector("#next-question").addEventListener("click", () => {
                if (current_question == quiz_questions.length) {
                    clearInterval(interval);
                    quizResult();
                    return;
                }
                current_question++;
                clearInterval(interval);
                quizQuestion(current_question);
            });


            // disable all options.
            options.forEach(disabled => {
                disabled.style.pointerEvents = "none";
            });

            // storing selected answers
            quiz_questions[q]['selected_answer'] = index + 1;
            console.log(quiz_questions);

            if ((index + 1) == quiz_questions[q]["answer"]) {
                option.classList.add("correct");
                total_correct_ans++;
                option.innerHTML += "<span>Boa</span>";
            } else {
                option.classList.add("wrong");
                option.innerHTML += "<span>Ops</span>";
            }

        });
    });

    // creating timer
    // 20 seconds (default time)
    time_left = 20;
    interval = setInterval(() => {
        time_left--;
        if (time_left == 0) {
            clearInterval(interval);
            // disable all options.
            options.forEach(disabled => {
                disabled.style.pointerEvents = "none";
            });

            // adding next question button
            document.querySelector("#footer").innerHTML += `<button id="next-question">Próxima</button>`;

            document.querySelector("#next-question").addEventListener("click", () => {
                if (current_question == quiz_questions.length) {
                    clearInterval(interval);
                    quizResult();
                    return;
                }
                current_question++;
                quizQuestion(current_question);
            });
            document.querySelector("#timer").classList.add("time-over");
            document.querySelector("#timer").innerHTML = `Tempo esgotado`;
        }else{   
            document.querySelector("#timer").innerHTML = `Tempo restante: ${time_left} s`;
        }
    }, 1000);
}


let quizResult = () => {
    container.innerHTML = `
    <div class="header">Sua pontuação</div>
        <div id="trophy">
            <i class="fa-solid fa-trophy"></i>
        </div>
        <h3 id="score">Você acertou <b>${total_correct_ans}</b> de <b>${quiz_questions.length}</b></h3>
        <div id="result-footer">
            <button id="start-again">Jogar novamente</button>
            <button id="detailed-result">Ver detalhes</button>
        </div>
    `;

    document.querySelector("#start-again").addEventListener("click",()=>{
        quizRules();
    });

    
    document.querySelector("#detailed-result").addEventListener("click",()=>{
        viewResult();
    });
}


let viewResult = ()=>{
    container.innerHTML = `
    <div class="header">Detalhes do seu jogo</div>
        <div class="content"></div>

        <h3 id="score" class="result-score">Você acertou <b>${total_correct_ans}</b> de <b>${quiz_questions.length}</b></h3>
        <div id="result-footer">
            <button id="start-again">Jogar novamente</button>
            <button id="view-result">Voltar ao resultado</button>
        </div>
    `;

    document.querySelector("#start-again").addEventListener("click",()=>{
        quizRules();
    });

    document.querySelector("#view-result").addEventListener("click",()=>{
        quizResult();
    });



    let quiz_result = document.querySelector(".content");
    quiz_questions.forEach((quiz,index) => {
        console.log(quiz);
        quiz_result.innerHTML += `
        <div class="content-wrapper">
                <h2 class="question">${index+1 + "." + quiz['question']}</h2>
                <div class="option-container${index}"></div>
        </div>
        `;


        option_container = document.querySelector(`.option-container${index}`);

        quiz['options'].forEach((option,index)=>{

            
            if(quiz['selected_answer'] == quiz['answer']){
                if(index+1 == quiz['answer']){
                    option_container.innerHTML += `<p class="result-option correct">${option} <span>You</span></p>`
                }else{
                    option_container.innerHTML += `<p class="result-option">${option}</p>`
                }
            }else{
                if(index+1 == quiz['answer']){
                    option_container.innerHTML += `<p class="result-option correct">${option} <span>Boa</span></p>`
                }else if(index+1 == quiz['selected_answer']){
                    option_container.innerHTML += `<p class="result-option wrong">${option} <span>You</span></p>`
                }else{
                    option_container.innerHTML += `<p class="result-option">${option}</p>`
                }
            }


        });

    });
}
