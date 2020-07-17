<script>
    import {quizStore} from "./store.js";
    import CreateQuizPage from "./CreateQuizPage.svelte";

    let current = 0;
    let answer;
    let finalScore = 0;
    let gameOver = false;
    let quiz;
    $: currentQuestion = quiz[current];
    $: isLastQuestion = quiz.length - 1 === current;

    quizStore.subscribe(value => {
        quiz = value;
    });

    function next() {
        quizStore.setAnswer(current, answer);
        current += 1;
        answer = "";
    }

    function previous() {
        current -= 1;
        answer = quiz[current].playerAnswer;
    }

    function finish() {
        quizStore.setAnswer(current, answer);
        finalScore = quiz.filter(question => question.rightAnswer === question.playerAnswer).length * 10;
        gameOver = true;
    }

    function reset() {
        current = 0;
        quizStore.reset();
    }

    $: console.log(quiz)
</script>
<h1>Quiz</h1>
<CreateQuizPage/>

{#if currentQuestion}
<h2>Question:</h2>
{currentQuestion.question}
<div>
{#each currentQuestion.options as option}
<label>
	<input name="answer" type=radio bind:group={answer} value={option}> {option}
	</label>
{/each}
</div>
{#if gameOver}
	<p>Game Over!! Your final score is {finalScore}</p>
<button on:click={reset}>Reset</button>
{:else}
	<div>
		{#if current > 0}
			<button on:click={previous}>Previous</button>
		{/if}
		{#if isLastQuestion}
			<button on:click={finish}>Finish</button>
		{:else}
			<button on:click={next}>Next</button>
		{/if}
	</div>
{/if}
{/if}
