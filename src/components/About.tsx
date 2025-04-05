
import { Heart, Users, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-primary font-medium mb-3 animate-fade-in">OUR MISSION</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Service With a Social Purpose
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full animate-fade-in"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 md:p-10 rounded-2xl animate-fade-in">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              <strong>TheStaffCompany</strong> started as a social service project to help underserved blue collar workers get employment and earn a livelihood for their families. 
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
              Most of them aren't familar with technology and hence we help them get access to job opportunities with just a phone call or message.
              </p>
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
              There are about 400 Million+ unorganised workers in India and we envision to reach every last of them. Its a bold undertaking, right? but this journey will be worth it.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                icon: Heart,
                title: "Value-Aligned Matching",
                description: "We carefully match candidates with businesses that match the requirements and ensure a win-win hire."
              },
              {
                icon: Users,
                title: "Diverse Pool",
                description: "Our candidates network includes workers from all backgrounds."
              },
              {
                icon: Building,
                title: "Partner businesses",
                description: "We work with all small and big businesses to help them with staff requirements."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex gap-5 p-6 bg-white rounded-xl shadow-sm border border-border/50 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
