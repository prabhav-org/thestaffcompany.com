import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from 'lucide-react';

const BusinessForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    position: '',
    experience: '',
    availability: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files?.[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Received",
        description: "Thank you for your application. Our team will contact you within 24 hours to discuss placement opportunities.",
        duration: 5000,
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        position: '',
        experience: '',
        availability: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-custom">
        {/* left side */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-3">StaffChahiye for your business</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get your Staff Within 24-72 Hours!</h2>
            
            <p className="text-foreground/70 mb-8">
              Submit your request today and get your right staff at the right time within 24-72hours (seriously)!
            </p>
            
            <div className="space-y-5">
              {[
                "Services starting at just INR 5,̶0̶0̶0̶ 2,000 only",
                "Most diverse staff portfolio available",
                "We believe in quality over quantity",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Instagram Feed */}
          <div className="glass-card p-4 sm:p-8 rounded-2xl animate-fade-in">
            <div 
              className="instagram-embed-container h-[450px] md:h-[600px] w-full"
            >
              <iframe
                src="https://www.instagram.com/staffchahiye/embed"
                width="100%"
                height="100%"
                style={{ background: "transparent", border: "none" }}
                title="StaffChahiye Instagram Feed"
                loading="lazy"
                allowTransparency={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessForm;
