const PAGES = {
	home: '/',
	signUp: '/sign-up',
	careerPrompt: '/escolha-a-sua-carreira',
	careerPath: '/trilha-de-estudos',
	topicContent: (topic?:string) =>topic? `/topic-content/${topic}` : '/topic-content/:topic',
	topicSelection: '/escolha-os-topicos'
}

export default PAGES
