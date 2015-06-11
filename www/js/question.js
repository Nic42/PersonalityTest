var PersonalityTypes = [
	{type:"E", detail:"Extravert" ,description:"You prefer to spend time and re-energize in the outer world of people and things"},
	{type:"I", detail:"Introvert" ,description:"You prefer to spend time and re-energize in your inner world of ideas and images"},
	{type:"S", detail:"Sensing" ,description:"You see the world with more emphasis on information that comes in through your five senses"},
	{type:"N", detail:"Intuitive" ,description:"You see the world with more emphasis on patterns and possibilities in the information you get"},
	{type:"T", detail:"Thinking" ,description:"You make decisions mostly based on objective principles and impersonal facts"},
	{type:"F", detail:"Feeling" ,description:"You make decisions mostly based on personal concerns and the people involved "},
	{type:"J", detail:"Judging" ,description:"You lead a generally structured and decided lifestyle"},
	{type:"P", detail:"Perceiving" ,description:"You lead a generally flexible and adaptable lifestyle"}
];

var PersonalityDetails = [
	{
		type:"ESTJ",
		desc1:"Supervisor",	
		desc2:"a Guardian",	
		desc3:"Practical, traditional, and organized. Not interested in theory or abstraction unless you see the practical application. Have clear visions of the way things should be. Loyal and hard-working. Like to be in charge. Exceptionally capable in organizing and running activities. 'Good citizens' who value security and peaceful living.",
		match1:"ISTP",
		match2:"INTP",
		match1desc:"Crafter",
		match2desc:"Architect",
		poppercent:"40% to 45% of population",
		imgSrc:"./img/estj.png",
		famous:"Famous ESTJs include Henry Ford, Hillary Clinton, Michelle Obama, Saddam Hussein, Uma Thurman, Emma Watson and Alec Baldwin"
	},
	{
		type:"ISTJ",
		desc1:"Inspector",
		desc2:"a Guardian",
		desc3:"Serious and quiet, interested in security and peaceful living. Extremely thorough, responsible, and dependable. Well-developed powers of concentration. Usually interested in supporting and promoting traditions and establishments. Well-organized and hard working, you work steadily towards identified goals. You can usually accomplish any task once you have set your mind to it.",
		match1:"ESFP",
		match2:"ESTP",
		match1desc:"Performer",
		match2desc:"Promoter",
		poppercent:"40% to 45% of population",
		imgSrc:"./img/istj.png",
		famous:"Famous ISTJs include Elizabeth II, George Washington, Warren Buffett, Jeff Bezos, Richard Nixon, Calvin Coolidge, Robert De Niro and Natalie Portman"
	},
	{
		type:"ESFJ",
		desc1:"Provider",
		desc2:"a Guardian",
		desc3:"Warm-hearted, popular, and conscientious. Tend to put the needs of others over your own needs. Feel strong sense of responsibility and duty. Value traditions and security. Interested in serving others. Need positive reinforcement to feel good about yourself. Well-developed sense of space and function.",
		match1:"ISFP",
		match2:"INFP",
		match1desc:"Composer",
		match2desc:"Healer",
		poppercent:"40% to 45% of population",
		imgSrc:"./img/esfj.png",
		famous:"Famous ESFJs include Harry S. Truman, Gerald Ford, Colin Powell, Sam Walton, Larry King, Sarah Jessica Parker, Celine Dion, Hugh Jackman and Prince William"
	},
	{
		type:"ISFJ",
		desc1:"Protector",
		desc2:"a Guardian",
		desc3:"Quiet, kind, and conscientious. Can be depended on to follow through. Usually puts the needs of others above your own needs. Stable and practical, you value security and traditions. Well-developed sense of space and function. Rich inner world of observations about people. Extremely perceptive of other's feelings. Interested in serving others.",
		match1:"ESTP",
		match2:"ESFP",
		match1desc:"Promoter",
		match2desc:"Performer",
		poppercent:"40% to 45% of population",
		imgSrc:"./img/isfj.png",
		famous:"Famous ISFJs include Jimmy Carter, George H.W. Bush, Mother Teresa, Anthony Hopkins, Bruce Willis, Halle Berry, Kim Kardashian and Prince Charles"
	},
	{
		type:"ESTP",
		desc1:"Promoter",
		desc2:"an Artisan",
		desc3:"Friendly, adaptable, action-oriented. 'Doers' who are focused on immediate results. Living in the here-and-now, you're a risk-taker who live a fast-paced lifestyle. Impatient with long explanations. Extremely loyal to your peers, but not usually respectful of laws and rules if they get in the way of getting things done. Great people skills.",
		match1:"ISFJ",
		match2:"ISTJ",
		match1desc:"Protector",
		match2desc:"Inspector",
		poppercent:"30% to 35% of population",
		imgSrc:"./img/estp.png",
		famous:"Famous ESTPs include Alexander the Great, Winston Churchill, Theodore Roosevelt, Franklin D. Roosevelt, Arthur Conan Doyle, George W. Bush, Alfred Hitchcock, Madonna and Angelina Jolie"
	},
	{
	type:"ISTP",
		desc1:"Crafter",
		desc2:"an Artisan",
		desc3:"Quiet and reserved, interested in how and why things work. Excellent skills with mechanical things. Risk-takers wholive for the moment. Usually interested in extreme sports. Uncomplicated in your desires. Loyal to your peers and to your internal value systems, but not overly concerned with respecting laws and rules if they get in the way of getting something done. Detached and analytical, you excel at finding solutions to practical problems.",
		match1:"ESTJ",
		match2:"ENTJ",
		match1desc:"Supervisor",
		match2desc:"Fieldmarshal",
		poppercent:"30% to 35% of population",
		imgSrc:"./img/istp.png",
		famous:"Famous ISTPs include Steve Jobs, Dalai Lama XIV, Vladimir Putin, Clint Eastwood, Harrison Ford, Tom Cruise, Demi Moore, David Blaine and Bruce Lee"
	},
	{
		type:"ESFP",
		desc1:"Performer",
		desc2:"an Artisan",
		desc3:"People-oriented and fun-loving, you make things more fun for others by your enjoyment. Living for the moment, you love new experiences. You dislike theory and impersonal analysis. Interested in serving others. Likely to be the center of attention in social situations. Well-developed common sense and practical ability.",
		match1:"ISTJ",
		match2:"ISFJ",
		match1desc:"Inspector",
		match2desc:"Protector",
		poppercent:"30% to 35% of population",
		imgSrc:"./img/esfp.png",
		famous:"Famous ESFPs include Bill Clinton, John F. Kennedy, Ronald Reagan, Larry Ellison, Hugh Hefner, Steven Spielberg, Justin Bieber, Leonardo DiCaprio, Mel Gibson and Katy Perry"
	},
	{
		type:"ISFP",
		desc1:"Composer",
		desc2:"an Artisan",
		desc3:"Quiet, serious, sensitive and kind. Do not like conflict, and not likely to do things which may generate conflict. Loyal and faithful. Extremely well-developed senses, and aesthetic appreciation for beauty. Not interested in leading or controlling others. Flexible and open-minded. Likely to be original and creative. Enjoy the present moment.",
		match1:"ESFJ",
		match2:"ENFJ",
		match1desc:"Provider",
		match2desc:"Teacher",
		poppercent:"30% to 35% of population",
		imgSrc:"./img/isfp.png",
		famous:"Famous ISFPs include Princess Diana, Ulysses S. Grant, Michael Jackson, Paul McCartney, Paris Hilton, David Beckham, Justin Timberlake, Brad Pitt, Marilyn Monroe and Prince Harry"
	},
	{
		type:"ENFJ",
		desc1:"Teacher",
		desc2:"an Idealist",
		desc3:"Popular and sensitive, with outstanding people skills. Externally focused, with real concern for how others think and feel. Usually dislike being alone. You see everything from the human angle, and dislike impersonal analysis. Very effective at managing people issues, and leading group discussions. Interested in serving others, and probably place the needs of others over your own needs.",
		match1:"INFP",
		match2:"ISFP",
		match1desc:"Healer",
		match2desc:"Composer",
		poppercent:"15% to 20% of population",
		imgSrc:"./img/enfj.png",
		famous:"Famous ENFJs include Martin Luther King, Jr, Nelson Mandela, Mikhail Gorbachev, Tony Blair, Yasser Arafat, Oprah Winfrey, Morgan Freeman, Emma Stone and Charlie Rose"
	},
	{
		type:"INFJ",
		desc1:"Counsellor",
		desc2:"an Idealist",
		desc3:"Quietly forceful, original, and sensitive. Tend to stick to things until you are done. Extremely intuitive about people, and concerned for their feelings. Well-developed value systems which you strictly adhere to. Well-respected for your perseverance in doing the right thing. Likely to be individualistic, rather than leading or following.",
		match1:"ENTP",
		match2:"ENFP",
		match1desc:"Inventor",
		match2desc:"Champion",
		poppercent:"15% to 20% of population",
		imgSrc:"./img/infj.png",
		famous:"Famous INFJs include Mahatma Gandhi, Niels Bohr, Carl Gustav Jung, Thomas Jefferson, Agatha Christie, Adolf Hitler, Al Pacino, and Leo Tolstoy"
	},
	{
		type:"ENFP",
		desc1:"Champion",
		desc2:"an Idealist",
		desc3:"Enthusiastic, idealistic, and creative. Able to do almost anything that interests them. Great people skills. Need to live life in accordance with your inner values. Excited by new ideas, but bored with details. Open-minded and flexible, with a broad range of interests and abilities.",
		match1:"INTJ",
		match2:"INFJ",
		match1desc:"Mastermind",
		match2desc:"Counsellor",
		poppercent:"15% to 20% of population",
		imgSrc:"./img/enfp.png",
		famous:"Famous ENFPs include Walt Disney, Salman Rushdie, Anne Frank, Osho, Che Guevara, Robin Williams, Jennifer Aniston and Sandra Bullock"
	},
	{
		type:"INFP",
		desc1:"Healer",
		desc2:"an Idealist",
		desc3:"Quiet, reflective, and idealistic. Interested in serving humanity. Well-developed value system, which you strive to live in accordance with. Extremely loyal. Adaptable and laid-back unless a strongly-held value is threatened. Usually talented writers. Mentally quick, and able to see possibilities. Interested in understanding and helping people.",
		match1:"ENFJ",
		match2:"ESFJ",
		match1desc:"Teacher",
		match2desc:"Provider",
		poppercent:"15% to 20% of population",
		imgSrc:"./img/infp.png",
		famous:"Famous INFPs include John Kerry, Virginia Woolf,J.K. Rowling, William Shakespeare, Nicolas Cage, Johnny Depp and Jude Law"
	},
	{
		type:"ENTJ",
		desc1:"Fieldmarshal",
		desc2:"a Rationalist",
		desc3:"Assertive and outspoken, you are driven to lead. Excellent ability to understand difficult organizational problems and create solid solutions. Intelligent and well-informed, you usually excel at public speaking. You value knowledge and competence, and usually have little patience with inefficiency or disorganization.",
		match1:"INTP",
		match2:"ISTP",
		match1desc:"Architect",
		match2desc:"Crafter",
		poppercent:"5% to 10% of population",
		imgSrc:"./img/entj.png",
		famous:"Famous ENTJs include Napoleon Bonaparte, Julius Caesar, Margaret Thatcher, Aristotle, Bill Gates, Garry Kasparov, Joseph Stalin, George Clooney, Charlize Theron and Adele"
	},
	{
	type:"INTJ",
		desc1:"Mastermind",
		desc2:"a Rationalist",
		desc3:"Independent, original, analytical, and determined. Have an exceptional ability to turn theories into solid plans of action. Highly value knowledge, competence, and structure. Driven to derive meaning from your visions. Long-range thinkers. Have very high standards for your performance, and the performance of others. Natural leaders, but will follow if you trust existing leaders.",
		match1:"ENFP",
		match2:"ENTP",
		match1desc:"Champion",
		match2desc:"Inventor",
		poppercent:"5% to 10% of population",
		imgSrc:"./img/intj.png",
		famous:"Famous INTJs include Isaac Newton, Karl Marx, Mark Zuckerberg, Bobby Fischer, Nikola Tesla, Stephen Hawking, John Nash, Vladimir Lenin, Arnold Schwarzenegger and Jodie Foster"
	},
	{
		type:"ENTP",
		desc1:"Inventor",
		desc2:"a Rationalist",
		desc3:"Creative, resourceful, and intellectually quick. Good at a broad range of things. Enjoy debating issues, and may be into 'one-up-manship'. You get very excited about new ideas and projects, but may neglect the more routine aspects of life. Generally outspoken and assertive. You enjoy people and are stimulating company. Excellent ability to understand concepts and apply logic to find solutions.",
		match1:"INFJ",
		match2:"INTJ",
		match1desc:"Counselor",
		match2desc:"Mastermind",
		poppercent:"5% to 10% of population",
		imgSrc:"./img/entp.png",
		famous:"Famous ENTPs include Socrates, Leonardo da Vinci, Benjamin Franklin, Steve Wozniak, Barack Obama, Robert Downey Jr, Salma Hayek and Karl Lagerfeld"
	},
	{
		type:"INTP",
		desc1:"Architect",
		desc2:"a Rationalist",
		desc3:"Logical, original, creative thinkers. Can become very excited about theories and ideas. Exceptionally capable and driven to turn theories into clear understandings. Highly value knowledge, competence and logic. Quiet and reserved, hard to get to know well. Individualistic, having no interest in leading or following others.",
		match1:"ENTJ",
		match2:"ESTJ",
		match1desc:"Fieldmarshal",
		match2desc:"Supervisor",
		poppercent:"5% to 10% of population",
		imgSrc:"./img/intp.png",
		famous:"Famous INTPs include Abraham Lincoln, Albert Einstein, Charles Darwin, Marie Curie, Larry Page, Sergey Brin, David Cronenberg, Paul Allen and Jimmy Wales"
	}
];

var QuestionData = [
		{question:"Do new interactions or interactions with new people",	
		answers:["a) worry or drain you", "b) excite and energize you"],
		answer:-1,
		id:0},
		{question:"Are you more",	
		answers:["a) idealistic", "b) realistic"],
		answer:-1,
		id:2},
		{question:"Facts",	
		answers:["a) explain things or situations", "b) have obvious meanings"],
		answer:-1,
		id:2},
		{question:"If you must disappoint someone, are you usually",	
		answers:["a) warm and caring", "b) honest and straightforward"],
		answer:-1,
		id:4},
		{question:"Is it easier to influence you with",	
		answers:["a) a touching appeal", "b) convincing evidence"],
		answer:-1,	
		id:4},
		{question:"Do you prefer to work to",	
		answers:["a) just 'whenever'", "b) deadlines"],
		answer:-1,
		id:6},
		{question:"Do you mostly choose",	
		answers:["a) somewhat casually", "b) rather carefully"],
		answer:-1,
		id:6},
		{question:"At parties, do you generally",	
		answers:["a) leave early, with decreased energy", "b) stay late, with increasing energy"],
		answer:-1,
		id:0},
		{question:"Do you prefer writers who",	
		answers:["a) use analogies, metaphors and symbolism", "b) say what they mean"],
		answer:-1,
		id:2},
		{question:"Do you tend to be interested in the",	
		answers:["a) possible", "b) actual"],
		answer:-1,
		id:2},
		{question:"Which way is easier for you to understand people, using",	
		answers:["a) instincts", "b) reasoning"],
		answer:-1,
		id:4},
		{question:"You often approach or greet people",	
		answers:["a) personally and casually", "b) professionally and business-like"],
		answer:-1,
		id:4},
		{question:"Are you regularly",	
		answers:["a) late", "b) on time or early"],
		answer:-1,
		id:6},
		{question:"Which do you enjoy more",	
		answers:["a) working on a project", "b) finishing a project"],
		answer:-1,
		id:6},
		{question:"Do you usually",	
		answers:["a) get behind on other people's news", "b) stay up to date on other people's lives"],
		answer:-1,
		id:0},
		{question:"In doing common things, do you often do it",	
		answers:["a) your own way", "b) the usual ways like most others"],
		answer:-1,
		id:2},
		{question:"Are you more",	
		answers:["a) imaginative", "b) sensible"],
		answer:-1,
		id:2},
		{question:"Which is of greater value to you",	
		answers:["a) harmonious relationships", "b) consistent thinking"],
		answer:-1,
		id:4},
		{question:"Would you rather make decisions based on",	
		answers:["a) values or feelings", "b) evidence and logic"],
		answer:-1,
		id:4},
		{question:"Do you like things",	
		answers:["a) open to change", "b) finalized and certain"],
		answer:-1,
		id:6},
		{question:"Are you usually",	
		answers:["a) easy-going", "b) serious and determined"],
		answer:-1,
		id:6},
		{question:"Do you consider yourself a better",	
		answers:["a) listener", "b) conversationalist"],
		answer:-1,
		id:0},
		{question:"Which is worse",	
		answers:["a) tradition", "b) change"],
		answer:-1,
		id:2},
		{question:"Are visionaries and theorists",	
		answers:["a) rather fascinating", "b) somewhat annoying"],
		answer:-1,
		id:2},
		{question:"Do you tend to be a",	
		answers:["a) sympathetic person", "b) reasonable person"],
		answer:-1,
		id:4},
		{question:"Is it better to be",	
		answers:["a) forgiving and merciful", "b) fair and just"],
		answer:-1,
		id:4},
		{question:"Most of the time or on most issues, are you",	
		answers:["a) neutral or indifferent", "b) opinionated"],
		answer:-1,
		id:6},
		{question:"Anywhere you have your own space, is it mostly",	
		answers:["a) disorganized", "B) organized"],
		answer:-1,
		id:6},
		{question:"When standing in line, do you often",	
		answers:["a) mind your own business", "b) chat with others"],
		answer:-1,
		id:0},
		{question:"Common sense is",	
		answers:["a) often questionable", "b) rarely questionable"],
		answer:-1,
		id:2},
		{question:"Children do not",	
		answers:["a) use their imaginations enough", "b) make themselves useful enough"],
		answer:-1,
		id:2},
		{question:"In rating things, do you regularly use",	
		answers:["a) feelings", "b) standards"],
		answer:-1,
		id:4},
		{question:"With people, are you usually",	
		answers:["a) gentle", "b) firm"],
		answer:-1,
		id:4},
		{question:"Which is the greater ability",	
		answers:["a) to adapt and work with what you have", "b) to organize and be methodical"],
		answer:-1,
		id:6},
		{question:"Do you prefer to",	
		answers:["a) have decisions made for you", "b) make decisions"],
		answer:-1,
		id:6},
		{question:"Are you more of",	
		answers:["a) a private person", "b) an outgoing person"],
		answer:-1,
		id:0},
		{question:"Do you mostly live in, or think about, the",	
		answers:["a) future", "b) present or past"],
		answer:-1,
		id:2},
		{question:"Do you usually see how others",	
		answers:["a) see", "b) are useful"],
		answer:-1,
		id:2},
		{question:"Would you rather",	
		answers:["a) arrive at agreement on an issue", "b) discuss an issue in detail, whether agreeing or not"],
		answer:-1,
		id:4},
		{question:"Which dominates you, your",	
		answers:["a) feelings", "b) thoughts"],
		answer:-1,
		id:4},
		{question:"Do you prefer work, or to do work, which is",	
		answers:["a) agreed on with a handshake", "b) signed, sealed and delivered by contract"],
		answer:-1,
		id:6},
		{question:"Which is worse, being too",	
		answers:["a) critical", "b) indifferent or uncaring"],
		answer:-1,
		id:6},
		{question:"Do you have",	
		answers:["a) few friends with deep friendships", "b) many friends with little contact for most"],
		answer:-1,
		id:0},
		{question:"You often speak in",	
		answers:["a) generalities","b) specifics"],
		answer:-1,
		id:2},
		{question:"Would you rather do",	
		answers:["a) design and research","b) production and distribution"],
		answer:-1,
		id:2},
		{question:"Which is the greater compliment",	
		answers:["a) There is an emotional person","b) There is a logical person"],
		answer:-1,
		id:4},
		{question:"Which is stronger in you",	
		answers:["a) devotion","b) reasoning"],
		answer:-1,
		id:4},
		{question:"Is clutter something you generally",	
		answers:["a) ignore and put up with","b) take time to clean up"],
		answer:-1,
		id:6},
		{question:"Are you more comfortable",	
		answers:["a) before a decision made", "b) after a decision is made"],
		answer:-1,
		id:6},
		{question:"Are you generally",	
		answers:["a) introspective or inward looking", "b) observant of the world"],
		answer:-1,
		id:0},
		{question:"Which do you regularly trust over the other, your",	
		answers:["a) instinct", "b) experience"],
		answer:-1,
		id:2},
		{question:"Which trait is stronger in you",	
		answers:["a) cleverness", "b) practicality"],
		answer:-1,
		id:2},
		{question:"Do you regularly buy things you",	
		answers:["a) want", "b) can justify in having"],
		answer:-1,
		id:4},
		{question:"Are you generally",	
		answers:["a) soft-hearted", "b) fair-minded"],
		answer:-1,
		id:4},
		{question:"Is it better to",	
		answers:["a) just let things happen", "b) have things planned"],
		answer:-1,
		id:6},
		{question:"Do you live most of your life",	
		answers:["a) casually and easy-going", "b) in a hurry or rushed pace"],
		answer:-1,
		id:6},
		{question:"When the phone rings, do you",	
		answers:["a) hope someone else will answer", "a) try to get to it first"],
		answer:-1,
		id:0},
		{question:"Which is the greater quality to have",	
		answers:["a) a vivid imagination", "b) a strong sense of reality"],
		answer:-1,
		id:2},
		{question:"Which is more interesting to you",	
		answers:["a) concepts or ideas", "b) details"],
		answer:-1,
		id:2},
		{question:"Which is worse to be",	
		answers:["a) too logical", "b) too passionate"],
		answer:-1,
		id:4},
		{question:"Do you tend to volunteer for or donate to causes you",	
		answers:["a) sympathize with", "b) understand"],
		answer:-1,
		id:4},
		{question:"At work, do you like your day",	
		answers:["a) unscheduled", "A) scheduled"],
		answer:-1,
		id:6},
		{question:"How firmly should laws be enforced",	
		answers:["a) with room to change for circumstances involved", "a) as written"],
		answer:-1,
		id:6},
		{question:"Are you",	
		answers:["a) hard to approach and talk to", "b) easy to approach and talk to"],
		answer:-1,
		id:0},
		{question:"Do you often take what someone tells you",	
		answers:["a) figuratively or roughly", "b) literally or exactly"],
		answer:-1,
		id:2},
		{question:"Do you tend to see",	
		answers:["a) possibilities", "b) reality"],
		answer:-1,
		id:2},
		{question:"Which do you wish was stronger in you",	
		answers:["a) self-control","b) determination"],
		answer:-1,
		id:4},
		{question:"Would you rather watch movies with",	
		answers:["a) characters who are hard to understand", "b) plots or story lines that are hard to understand"],
		answer:-1,
		id:4},
		{question:"In life, are you more",	
		answers:["a) spontaneous and improvising", "b) deliberate and intentional"],
		answer:-1,
		id:6},
		{question:"Is your life relatively",	
		answers:["a) unstructured", "b) structured"],
		answer:-1,
		id:6},
		{question:"When you find something you like, do you tend to",	
		answers:["a) think of how good it'd be if you had it", "b) admire it"],
		answer:-1,
		id:0},
		{question:"Do you prefer stories and movies about",	
		answers:["a) fantasy and heroism", "b) action and adventure"],
		answer:-1,
		id:2},
		{question:"When you are in charge, are you mostly",	
		answers:["a) lenient and forgiving", "b) strict and firm"],
		answer:-1,
		id:4},
		{question:"At work, is it easier for you to",	
		answers:["a) try to please others", "b) point out mistakes"],
		answer:-1,
		id:6}
	];