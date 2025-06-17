'use client';

import { motion } from 'framer-motion';

const skills = [
	{
		title: 'Cloud Architecture',
		icon: '☁️',
		description:
			'Deploying scalable, fault-tolerant apps using AWS, Docker, and CI/CD pipelines.',
	},
	{
		title: 'Network Security',
		icon: '🔐',
		description:
			'Implementing VPN, firewall, and endpoint security for enterprise networks.',
	},
	{
		title: 'DevOps & Automation',
		icon: '⚙️',
		description:
			'Infrastructure as Code (IaC) with Docker, Bash, GitHub Actions, and more.',
	},
	{
		title: 'Programming',
		icon: '💻',
		description:
			'Proficient in Python, JavaScript, React, Tailwind, and REST API development.',
	},
];

export default function Skills() {
	return (
		<section className="bg-black py-24 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-10">
					Skills &amp; Expertise
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{skills.map((skill, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.2 }}
							className="bg-white/5 border border-lime-400/20 rounded-2xl p-6 text-left shadow-md hover:shadow-lime-400/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
						>
							<div className="text-4xl mb-4">{skill.icon}</div>
							<h3 className="text-xl font-semibold text-lime-300 mb-2">
								{skill.title}
							</h3>
							<p className="text-sm text-gray-300 leading-relaxed">
								{skill.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
// This component displays a grid of skills with icons, titles, and descriptions.
// It uses Framer Motion for animations and Tailwind CSS for styling, ensuring a modern and responsive design.