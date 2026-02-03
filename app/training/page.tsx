import { trainingPrograms, trainingBenefits } from "@/data/content";
import Link from "next/link";

export default function TrainingPage() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Training & <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Empower your teams, students, and faculty with cutting-edge skills in AI, 
            technology, entrepreneurship, and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#corporate-training"
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all btn-glow"
            >
              For Corporates
            </a>
            <a
              href="#college-training"
              className="px-8 py-4 bg-transparent hover:bg-dark-700 text-white border-2 border-primary-500 rounded-lg font-semibold transition-all"
            >
              For Colleges
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Training Programs
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Industry-leading training designed for real-world impact
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry-Aligned</h3>
              <p className="text-gray-300 text-sm">
                Curriculum designed with current industry needs and future trends
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all text-center">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Trainers</h3>
              <p className="text-gray-300 text-sm">
                Learn from practitioners with real-world experience building products
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Hands-On Learning</h3>
              <p className="text-gray-300 text-sm">
                Real projects, case studies, and practical exercises
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold text-white mb-2">Certified Programs</h3>
              <p className="text-gray-300 text-sm">
                Industry-recognized certifications to boost careers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training Programs */}
      <section id="corporate-training" className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Corporate Training Programs
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Upskill your teams with customized training programs tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {trainingPrograms.corporate.map((program) => (
              <div
                key={program.id}
                className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-primary-500 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                    {program.level}
                  </span>
                </div>
                <p className="text-gray-400 mb-2">Duration: {program.duration}</p>
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Topics:</h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-400 mr-2 mt-1">▸</span>
                        <span className="text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Learning Outcomes:</h4>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Corporate Training Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {trainingBenefits.corporate.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/contact?interest=training"
                className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
              >
                Request Corporate Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* College Training Programs */}
      <section id="college-training" className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              College & University Programs
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Bridge the gap between academia and industry with our comprehensive student training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {trainingPrograms.college.map((program) => (
              <div
                key={program.id}
                className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-accent-500 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                  {program.badge && (
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-semibold">
                      {program.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-2">Duration: {program.duration}</p>
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-400 mr-2 mt-1">▸</span>
                        <span className="text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Career Outcomes:</h4>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Student Program Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {trainingBenefits.college.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-accent-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-dark-700/50 rounded-lg p-6 border border-gray-700">
              <h4 className="font-bold text-white mb-3">🎓 Partnership Models for Colleges</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-primary-400 mb-2">Semester Integration</p>
                  <p>Full semester courses with credits</p>
                </div>
                <div>
                  <p className="font-semibold text-accent-400 mb-2">Workshop Series</p>
                  <p>Short-term intensive workshops</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-400 mb-2">Skills Bootcamps</p>
                  <p>Intensive skill-building programs</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/contact?interest=training"
                className="inline-block px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-semibold transition-colors btn-glow"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Development */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Faculty Development Programs
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Empower educators with modern teaching methodologies and industry insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.faculty.map((program) => (
              <div
                key={program.id}
                className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-primary-500 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 mb-4">Duration: {program.duration}</p>
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Program Coverage:</h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-400 mr-2 mt-1">▸</span>
                        <span className="text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-br from-primary-500/10 to-dark-700 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Faculty Training Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {trainingBenefits.faculty.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Success Story</h2>
              <p className="text-primary-400 font-semibold">Tech Institute of Excellence</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">1,200+</div>
                <p className="text-gray-300">Students Trained</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <p className="text-gray-300">Employment Success</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15</div>
                <p className="text-gray-300">Startups Launched</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <p className="text-gray-300">Satisfaction Rating</p>
              </div>
            </div>
            <p className="text-gray-300 text-center mt-8 max-w-3xl mx-auto">
              "The training programs transformed our students' capabilities and significantly improved their career outcomes. 
              The hands-on approach and industry-relevant curriculum made all the difference."
            </p>
            <p className="text-gray-400 text-center mt-4">
              - Dr. Sharma, Dean of Engineering
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team or Students?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our training programs can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?interest=training"
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all btn-glow"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/impact"
              className="px-8 py-4 bg-transparent hover:bg-dark-700 text-white border-2 border-primary-500 rounded-lg font-semibold transition-all"
            >
              View Our Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
