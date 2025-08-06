import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
						<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/stotomasisabela.jpg`} alt={`Project`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Sto. Tomas, Isabela Government Website</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">The stotomasisabela.gov.ph website is the official online portal of the Municipality of Sto. Tomas, Isabela. Built with WordPress, it features a clean, responsive design that provides easy access to government services, public announcements, downloadable forms, and local news. The site is optimized for both desktop and mobile, with a focus on accessibility, performance, and security.</p>
								<div className="flex gap-2">
									<a href="https://stotomasisabela.gov.ph/" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
						<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/propertytaxsystem.png`} alt={`Project`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Real Property Tax System of Municipality of Sto. Tomas, Isabela</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">The Real Property Tax system is a web-based application built with Angular that streamlines the assessment, billing, and payment tracking of property taxes. It allows users to manage property records, generate tax assessments, and monitor payments efficiently through a secure and user-friendly interface.</p>
								<div className="flex gap-2">
									<a href="https://github.com/Binrooo/RPT_SYSTEM" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
						<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/spupalumnisystem.jpg`} alt={`Project`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">St. Paul University Alumni Association System</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">The St. Paul University Philippines Alumni System is a web-based platform designed to manage and connect alumni. It allows graduates to register, update their profiles, and stay informed about university events and announcements. The system supports efficient data management and strengthens alumni engagement through a secure and organized interface.</p>
								<div className="flex gap-2">
									<a href="https://alumni.spup-ict.com/" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
						<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/bcms.jpg`} alt={`Project`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Barangay Complaint Management System of Brgy. Santa Maria, Buguey</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">The Barangay Complaint Management System is a web-based platform designed to streamline the reporting, tracking, and resolution of community complaints. It allows residents to file concerns online, while barangay officials can manage, update, and respond to cases efficiently through a secure and organized dashboard.</p>
								<div className="flex gap-2">
									<a href="https://alumni.spup-ict.com/" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
				</div>
			</div>
		</section>
	);
}
