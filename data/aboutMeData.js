import { v4 as uuidv4 } from 'uuid';

export const aboutMeData = [
	{
		id: uuidv4(),
		bio: 'Senior AI Engineer with 7+ years of experience designing, deploying, and productionizing ML and LLM systems, backed by strong software engineering skills. Skilled in end-to-end system design, data ingestion and retrieval pipelines, offline/online evaluation, deployment, observability, LLMOps, CI/CD, and multi-agent orchestration across education, healthcare, CRM/marketing, industrial automation, and B2B SaaS.',
	},
	{
		id: uuidv4(),
		bio: 'Recent projects include building a PM Agent for Azure DevOps that answers status queries, suggests next actions, executes updates, and preserves traceability using LangChain, AutoGen, FastAPI, Azure OpenAI, PGVector, and ADO APIs.',
	},
	{
		id: uuidv4(),
		bio: 'Developed a production RAG platform for chatbots and automations using LangChain, PGVector, and FastAPI with evaluation and CI/CD practices supporting faster iteration and feature rollout.',
	},
];
