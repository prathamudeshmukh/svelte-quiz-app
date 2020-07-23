<script>
    import {quizStore} from "../store";
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
        question = "";
        options = ['','','',''];
        rightAnswer = "";
    }
</script>
<main>
    <div class="w-full bg-gray-100">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
            <div >Create your own quiz</div>
            <div class="mb-4">
                <label for="question">Question</label>
                <input bind:value={question} id="question" placeholder="Question" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <label for="question">Option 1</label>
                <input bind:value={options[0]} placeholder="Option 1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <label for="question">Option 2</label>
                <input bind:value={options[1]} placeholder="Option 2" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <label for="question">Option 3</label>
                <input bind:value={options[2]} placeholder="Option 3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <label for="question">Option 4</label>
                <input bind:value={options[3]} placeholder="Option 4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>

            <div class="mb-4">
                <label for="question">Right answer</label>
                <input bind:value={rightAnswer} placeholder="Right Answer" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="flex justify-end">
                <button type="button" on:click={add} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Add
                </button>
            </div>
        </form>
    </div>
</main>
