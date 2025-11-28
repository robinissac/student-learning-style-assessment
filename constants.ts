import { Question, PersonalityType, PersonalityResult } from './types';

export const PERSONALITY_RESULTS: Record<PersonalityType, PersonalityResult> = {
  [PersonalityType.Dynamo]: {
    type: PersonalityType.Dynamo,
    nickname: "Ideas Smart",
    season: "Spring",
    description: "You are great at starting things, but not so good at finishing. Greats include famous entrepreneurs like Richard Branson, Bill Gates, and Steve Jobs. Dynamo is 'Spring' energy. You focus on strengths in creating. You ignore those who criticize you for not being organized. You don't worry about being forgetful or missing small things. You are remembered for creative brilliance.",
    vision: "Perspective",
    visionDescription: "Perspective gives a deeper view of what is possible. Dynamos are great at providing perspective, but often at the expense of peripheral issues.",
    questionKey: "What?",
    color: "bg-green-500",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    lightBg: "bg-green-50",
    icon: "🌳"
  },
  [PersonalityType.Blaze]: {
    type: PersonalityType.Blaze,
    nickname: "People Smart",
    season: "Summer",
    description: "You love people, but get distracted quickly. Icons from Marilyn Monroe to Oprah share this genius. Blaze is 'Summer' energy. You focus on strengths in leadership and connections. You ignore those who criticize you for not focusing on numbers. You never worry that you change focus often. You get out there to make a difference through people, fun, and variety.",
    vision: "Colour",
    visionDescription: "Color is related to drama of vision. Color can make our vision come alive with variety and vibrancy. Blazes see the excitement, but often miss the detail.",
    questionKey: "Who?",
    color: "bg-red-500",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    lightBg: "bg-red-50",
    icon: "🔥"
  },
  [PersonalityType.Tempo]: {
    type: PersonalityType.Tempo,
    nickname: "Senses Smart",
    season: "Autumn",
    description: "You are grounded, but often get lost in activity. Leaders from Gandhi to Nelson Mandela share this genius. Tempo is 'Autumn' energy. You focus on your strengths in senses and perseverance. You ignore those who criticize you for not being forceful. You don't worry that you like being extra careful. You stay calm and grounded, taking your time.",
    vision: "Perception",
    visionDescription: "Perception is related to breadth of vision. Peripheral vision gives a wider view of what is there. Tempos see the wood for the trees, but often miss the bigger picture.",
    questionKey: "When?",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-200",
    lightBg: "bg-yellow-50",
    icon: "🍂"
  },
  [PersonalityType.Steel]: {
    type: PersonalityType.Steel,
    nickname: "Systems Smart",
    season: "Winter",
    description: "You take care with detail, but are often over-cautious. Figures from Warren Buffett to Mark Zuckerberg share this genius. Steel is 'Winter' energy. You focus on strengths in systems and managing data. You ignore those who criticize you for not having better social skills. You don't worry that you like being alone. You find smarter ways to do things through systems.",
    vision: "Clarity",
    visionDescription: "Clarity is related to the detail of vision. Clarity can see in black and white, and can pick up detail that others will miss. Steels see every detail, but often at the expense of the people involved.",
    questionKey: "How?",
    color: "bg-slate-500",
    textColor: "text-slate-600",
    borderColor: "border-slate-200",
    lightBg: "bg-slate-50",
    icon: "⚙️"
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "When starting a new project, what is your natural focus?",
    options: [
      { text: "What is the big idea? (Creating)", type: PersonalityType.Dynamo },
      { text: "Who is involved? (Communicating)", type: PersonalityType.Blaze },
      { text: "When do we need to do it? (Timing)", type: PersonalityType.Tempo },
      { text: "How will it work? (Details)", type: PersonalityType.Steel },
    ],
  },
  {
    id: 2,
    question: "What is your biggest challenge in school or work?",
    options: [
      { text: "Finishing what I start.", type: PersonalityType.Dynamo },
      { text: "Focusing on the boring details.", type: PersonalityType.Blaze },
      { text: "Being too slow or missing the big picture.", type: PersonalityType.Tempo },
      { text: "Being too critical or over-analyzing.", type: PersonalityType.Steel },
    ],
  },
  {
    id: 3,
    question: "How do you prefer to communicate?",
    options: [
      { text: "Through pictures, vision boards, and quick sketches.", type: PersonalityType.Dynamo },
      { text: "Through talking, stories, and conversation.", type: PersonalityType.Blaze },
      { text: "Through listening, observing, and taking action.", type: PersonalityType.Tempo },
      { text: "Through data, written reports, and facts.", type: PersonalityType.Steel },
    ],
  },
  {
    id: 4,
    question: "Which role best describes you in a team?",
    options: [
      { text: "The Creator - I bring the new ideas.", type: PersonalityType.Dynamo },
      { text: "The Supporter - I lead and connect the team.", type: PersonalityType.Blaze },
      { text: "The Trader - I keep things grounded and on time.", type: PersonalityType.Tempo },
      { text: "The Lord - I analyze the information and control flow.", type: PersonalityType.Steel },
    ],
  },
  {
    id: 5,
    question: "What energizes you the most?",
    options: [
      { text: "Freedom to create and innovate.", type: PersonalityType.Dynamo },
      { text: "Variety, fun, and being around people.", type: PersonalityType.Blaze },
      { text: "Stability, harmony, and a steady pace.", type: PersonalityType.Tempo },
      { text: "Order, clarity, and certainty.", type: PersonalityType.Steel },
    ],
  },
  {
    id: 6,
    question: "If you were a season, which would you be?",
    options: [
      { text: "Spring - New life, energy, and beginnings.", type: PersonalityType.Dynamo },
      { text: "Summer - Bright, social, and vibrant.", type: PersonalityType.Blaze },
      { text: "Autumn - Grounded, sensory, and harvesting.", type: PersonalityType.Tempo },
      { text: "Winter - Cool, structured, and minimal.", type: PersonalityType.Steel },
    ],
  },
  {
    id: 7,
    question: "When making decisions, you rely on...",
    options: [
      { text: "Intuition - Does it feel like a breakthrough?", type: PersonalityType.Dynamo },
      { text: "Extroversion - How does it affect the people?", type: PersonalityType.Blaze },
      { text: "Sensing - Does the timing feel right?", type: PersonalityType.Tempo },
      { text: "Logic - Do the numbers add up?", type: PersonalityType.Steel },
    ],
  },
  {
    id: 8,
    question: "Your ideal way to solve a problem is...",
    options: [
      { text: "Brainstorming a completely new solution.", type: PersonalityType.Dynamo },
      { text: "Talking to people to find the answer.", type: PersonalityType.Blaze },
      { text: "Waiting and observing before acting.", type: PersonalityType.Tempo },
      { text: "Analyzing the data to find the error.", type: PersonalityType.Steel },
    ],
  },
  {
    id: 9,
    question: "What question do you ask most often?",
    options: [
      { text: "What? (What could we do?)", type: PersonalityType.Dynamo },
      { text: "Who? (Who can do this?)", type: PersonalityType.Blaze },
      { text: "When? (When should we do this?)", type: PersonalityType.Tempo },
      { text: "How? (How do we do this?)", type: PersonalityType.Steel },
    ],
  },
  {
    id: 10,
    question: "At the end of a project, you feel successful if...",
    options: [
      { text: "We created something original.", type: PersonalityType.Dynamo },
      { text: "Everyone had a good time working together.", type: PersonalityType.Blaze },
      { text: "We finished on time and on budget.", type: PersonalityType.Tempo },
      { text: "The result was accurate and error-free.", type: PersonalityType.Steel },
    ],
  },
];