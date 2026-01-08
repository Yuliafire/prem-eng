export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    question: "What is the past tense of 'run'?",
    options: ['Run', 'Runs', 'Ran', 'Running'],
    correctAnswer: 'Ran',
    explanation:
      "Correct! 'Ran' is the past tense of 'run'. Past tense indicates an action completed in the past.",
  },
  {
    question: "Which word is a synonym for 'beautiful'?",
    options: ['Ugly', 'Pretty', 'Dirty', 'Dark'],
    correctAnswer: 'Pretty',
    explanation:
      "Right! 'Pretty' means attractive or beautiful, a synonym with a similar meaning.",
  },
  {
    question: "Choose the correct sentence: 'He _____ to the park every day.'",
    options: ['Go', 'Goes', 'Gone', 'Going'],
    correctAnswer: 'Goes',
    explanation:
      "Correct! 'Goes' is the third-person singular present tense of 'go'.",
  },
  {
    question: "What is an antonym for 'happy'?",
    options: ['Joyful', 'Sad', 'Excited', 'Glad'],
    correctAnswer: 'Sad',
    explanation: "Good job! 'Sad' is the opposite of 'happy', an antonym.",
  },
  {
    question: "Fill in the blank: 'She _____ a book yesterday.'",
    options: ['Read', 'Reads', 'Reading', 'Readed'],
    correctAnswer: 'Read',
    explanation:
      "Right! 'Read' is the past tense of 'read', used for yesterday's action.",
  },
  {
    question: 'Which word is a plural noun?',
    options: ['Cat', 'Dogs', 'Horse', 'Bird'],
    correctAnswer: 'Dogs',
    explanation: "Correct! 'Dogs' is plural, indicating more than one dog.",
  },
  {
    question: "What is the correct form: 'I _____ to school.'",
    options: ['Walk', 'Walks', 'Walked', 'Walking'],
    correctAnswer: 'Walk',
    explanation:
      "Right! 'Walk' is the base form, correct for the first-person present tense.",
  },
  {
    question: "Choose the adjective: 'The _____ sky is blue.'",
    options: ['Running', 'Beautiful', 'Jump', 'Sing'],
    correctAnswer: 'Beautiful',
    explanation: "Good! 'Beautiful' describes the sky, making it an adjective.",
  },
  {
    question: "What is the future tense of 'eat'?",
    options: ['Ate', 'Eaten', 'Will eat', 'Eating'],
    correctAnswer: 'Will eat',
    explanation: "Correct! 'Will eat' indicates a future action.",
  },
  {
    question: "Select the correct pronoun: '_____ is my teacher.'",
    options: ['He', 'Run', 'Book', 'Jump'],
    correctAnswer: 'He',
    explanation: "Right! 'He' is a pronoun used to replace a male person.",
  },
];
