import React from 'react';

export const FacultySection: React.FC = () => {
  const facultyMembers = [
    {
      name: 'Dr. Emmanuel Adebayo',
      title: 'Chair of Systematic Theology',
      bio: 'Doctor of Theology (Aberdeen). 24 years of teaching Pauline epistles, covenant hermeneutics, and pastoral mentorship.',
      degree: 'ThD',
      degreeBg: 'bg-[#E06A26] text-white',
      degreeTitle: 'Doctor of Theology',
      metricIcon: 'menu_book',
      metricText: '4 Published Treatises',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA98CXUqmV17z0TMr27VhuS7oUPUkyZnbQFIHVRJ3Nlr5lDuylH5NnRqTMfY0X_HfWUxyIQgP2Np1dBNpVmyWXXFo3JUKNMOdGvx8P0aAykrTpX0v49uvrV3LsTWobPmnHhRj8ZnUUQUM-6ZR-ZBZsOJ8jX4mU9uduDQzfn-QA7SQCv1jN797qs7OziDyFMYCrD7ompDEl2pk4LB8AnWx6OgnqaJBobTCm2VCroY_g'
    },
    {
      name: 'Prof. Grace K. Mwangi',
      title: 'Director of Exegesis & Greek',
      bio: 'Ph.D. in Biblical Languages (Oxford). Specializes in Septuagint exegesis, Hellenistic grammar, and inductive study models.',
      degree: 'PhD',
      degreeBg: 'bg-[#EBB328] text-[#1A1A1A]',
      degreeTitle: 'PhD Biblical Languages',
      metricIcon: 'translate',
      metricText: 'Ancient Koine Specialist',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg1Wt2s5e7l60mZGXdLhoi6ETrC73c48Z17HB26N_KtMTFPGCkxm8_oG782jbk9d2r2BrGpGUrMI3ylSt7xr-bsMo4kCeslTNLxLapLf51G6Ru_0ve3WVB-zKZtnP9PWfN5va33YBvAkLN4dmFVvjBNWCzYDKC4JJ9RpJ1s6RfeFW3QTkl6kfDtC52ZoBGaS7WzctY7aOPGhQLgsW8s_y7gPLN6dNY0CrSED2PWdE'
    },
    {
      name: 'Rev. David C. Miller',
      title: 'Dean of Emerging Church Leadership',
      bio: 'D.Min. in Missional Strategy (Fuller). Leads international youth revivals, church planting accelerators, and digital ministry initiatives.',
      degree: 'DMin',
      degreeBg: 'bg-[#E06A26] text-white',
      degreeTitle: 'Doctor of Ministry',
      metricIcon: 'groups',
      metricText: 'Church Planting Network Director',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRREpQr5QK8lHRlZWN4hgJVwrWt47lzoTnaBniAJUHRMRYZHqimqlNsywhc_MW7iZUlq3aiix5PqsME82j6qUebgQEEskWoFYJ6bTaPyVZZM_qwvn7BbI-zZcFjii4jk-sR3UAg2QfnNfvwH3kkW67Daq1vhoYOyxt-XDDnLIr_DDb5V825AqQE5aBF2uH4PO4Qv0oqKN9wCiQj87sOVZZCaezDtU9trlEEFmzkkE'
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-[#E5E7EB]" id="faculty">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-1 text-center max-w-2xl mx-auto">
          <span className="font-label-code text-[#E06A26] uppercase font-bold tracking-wider">
            Faculty & Scholarship Advisory
          </span>
          <h2 className="font-headline-lg text-[#1A1A1A]">
            Led by Anointed Scholars & Global Shepherds
          </h2>
          <p className="font-body-md text-[#4B5563]">
            Our instructors combine earned doctoral credentials from premier global universities with active, multi-generational pastoral ministries.
          </p>
        </div>

        {/* 3-Column Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facultyMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-xs transition-all"
            >
              <div className="relative">
                <img
                  className="w-28 h-28 rounded-full object-cover shadow-xs border-2 border-white"
                  alt={member.name}
                  src={member.imageSrc}
                />
                <span
                  className={`absolute bottom-1 right-1 w-7 h-7 rounded-full flex items-center justify-center font-label-code text-xs font-bold shadow-xs ${member.degreeBg}`}
                  title={member.degreeTitle}
                >
                  {member.degree}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-[#1A1A1A]">
                  {member.name}
                </h3>
                <span className="font-label-code text-[#E06A26] uppercase font-semibold text-xs">
                  {member.title}
                </span>
                <p className="font-body-sm text-[#4B5563] pt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-auto pt-2 flex items-center gap-2 text-xs text-[#5C3317] font-label-code font-semibold">
                <span className="material-symbols-outlined text-sm">
                  {member.metricIcon}
                </span>
                <span>{member.metricText}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
