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
    <div class="w-full bg-gray-100">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
            <div class="mb-4">
                <input bind:value={question} placeholder="Question" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <input bind:value={options[0]} placeholder="Option 1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <input bind:value={options[1]} placeholder="Option 2" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <input bind:value={options[2]} placeholder="Option 3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="mb-4">
                <input bind:value={options[3]} placeholder="Option 4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>

            <div class="mb-4">
                <input bind:value={rightAnswer} placeholder="Right Answer" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" >
            </div>
            <div class="flex justify-end">
                <button on:click={add} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Add
                </button>
            </div>
        </form>
    </div>
</main>
