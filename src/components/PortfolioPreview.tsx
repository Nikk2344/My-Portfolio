'use client';

import { motion } from 'framer-motion';

const projects = [
	{
		title: 'College ERP System',
		icon: '🏫',
		description:
			'A fully functional ERP system built for academic institutions to manage students, courses, and performance.',
	},
	{
		title: 'OpenVPN User Manager',
		icon: '🔒',
		description:
			'A VPN tunnel-based system with UI that lets admins manage users and sync them with OpenVPN securely.',
	},
	{
		title: 'Spotify Clone',
		icon: '🎵',
		description:
			'A React &amp; Tailwind-based music UI with search, playlists, and mobile responsiveness.',
	},
];

export default function PortfolioPreview() {
	return (
		<section className="bg-[#0f0f0f] py-24 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-12">
					Featured Projects
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((proj, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.2 }}
							className="bg-white/5 border border-lime-400/20 rounded-2xl p-6 text-left hover:scale-105 hover:shadow-lime-400/30 transition-all duration-300 backdrop-blur-sm shadow"
						>
							<div className="text-4xl mb-4">{proj.icon}</div>
							<h3 className="text-xl font-semibold text-lime-300 mb-2">
								{proj.title}
							</h3>
							<p className="text-sm text-gray-300">
								{proj.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
// This component showcases a preview of featured projects with icons, titles, and descriptions.
// It uses Framer Motion for animations and Tailwind CSS for styling, ensuring a modern and responsive design.