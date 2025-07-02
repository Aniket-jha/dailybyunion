export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21l4-4 4 4" />
        </svg>
      ),
      title: "Intentional Community",
      description:
        "Designed to foster meaningful connections, Union offers more than just a place to stay—it’s a shared ecosystem for growth, collaboration, and belonging.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Effortless Living",
      description:
        "Our tech-enabled ecosystem ensures a seamless experience—from digital access and fast Wi-Fi to automated services and responsive support.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Refined Design Philosophy",
      description:
        "Each space is thoughtfully curated to balance form and function, blending contemporary aesthetics with comfort and spatial intelligence.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Holistic Well-being",
      description:
        "We prioritize wellness with clean, balanced meals, mental health programs, and community-led experiences that nurture both body and mind.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 px-6 md:py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center lg:text-left">
              {/* Icon */}
              <div className="mb-6 flex justify-center lg:justify-start">{feature.icon}</div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
