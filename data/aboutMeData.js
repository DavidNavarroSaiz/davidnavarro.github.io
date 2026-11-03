import { v4 as uuidv4 } from 'uuid';
import { experienceYears } from './experienceData';

export const aboutMeData = [
	{
		id: uuidv4(),
		bio: `I am a Senior AI Engineer with ${experienceYears}+ years of experience designing, deploying, and productionizing ML and LLM systems. I take ownership across the full path: data and retrieval, model and agent behavior, evaluation, infrastructure, observability, and the last mile into dependable operation.`,
	},
	{
		id: uuidv4(),
		bio: 'My recent work includes stateful AI agents, retrieval platforms, evaluation systems, and cloud integrations. I care about the boundary between interpretation and action: what the system knows, what it is allowed to do, how the result is verified, and how a team can debug it later.',
	},
	{
		id: uuidv4(),
		bio: 'I work best with people who stay close to the problem. I bring technical curiosity, practical collaboration, and a preference for explicit trade-offs—whether the system is an industrial inspection line, a retrieval service, or an agent that changes business state.',
	},
];
