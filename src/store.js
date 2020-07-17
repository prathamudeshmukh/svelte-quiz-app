import { writable } from 'svelte/store';

const quiz = [

	];


function createQuiz() {
	const { subscribe, update } = writable(quiz);

	return {
		subscribe,
		setAnswer: (question, playerAnswer) => update((quiz) => {
			quiz[question].playerAnswer = playerAnswer
			return quiz;
		}),
        addQuestion: (question) => update((quiz) => [...quiz, question]),
		reset: () => {
			update(() => {
				return [...quiz];
			})
		}
	};
}

export const quizStore = createQuiz();
