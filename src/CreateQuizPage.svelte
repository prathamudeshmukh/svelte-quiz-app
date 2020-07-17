<script>
    import {quizStore} from "./store";
    let quiz;
    quizStore.subscribe(value => {
        quiz = value;
    });

    let question = "";
    let options = [
        '','','',''
    ];
    let rightAnswer = "";

    function add() {
        const newQuestion = {
            question, options, rightAnswer
        };
        quizStore.addQuestion(newQuestion);
    }
</script>
<main>
    <label>
    Question
    <textarea bind:value={question}></textarea>
    </label>
    <label>Option 1 <input type="text" bind:value={options[0]}></label>
    <label>Option 2 <input type="text" bind:value={options[1]}></label>
    <label>Option 3 <input type="text" bind:value={options[2]}></label>
    <label>Option 4 <input type="text" bind:value={options[3]}></label>
    <label>
        <input type="text" bind:value={rightAnswer}>
    </label>
    <div>
        <button on:click={add}>Add</button>
    </div>
</main>
