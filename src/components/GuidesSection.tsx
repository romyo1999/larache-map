import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Globe } from "lucide-react";

interface GuidesSectionProps {
  language: string;
}

const GuidesSection = ({ language }: GuidesSectionProps) => {
  const content = {
    ar: {
      title: "أدلة سياحية للتحميل",
      subtitle: "حمل الأدلة السياحية المجانية لاستكشاف العرائش بأفضل طريقة",
      guides: [
        { title: "الدليل السياحي باللغة العربية", description: "دليل شامل للمعالم التاريخية والثقافية في العرائش", filename: "larache-guide-ar.pdf", flag: "🇲🇦", size: "2.1 MB" },
        { title: "Tourist Guide in English", description: "دليل شامل باللغة الإنجليزية", filename: "larache-guide-en.pdf", flag: "🇬🇧", size: "2.1 MB" },
        { title: "Guide Touristique en Français", description: "دليل شامل باللغة الفرنسية", filename: "larache-guide-fr.pdf", flag: "🇫🇷", size: "2.1 MB" },
        { title: "Guía Turística en Español", description: "دليل شامل باللغة الإسبانية", filename: "larache-guide-es.pdf", flag: "🇪🇸", size: "2.1 MB" }
      ]
    },
    en: {
      title: "Downloadable Tourist Guides",
      subtitle: "Download free tourist guides to explore Larache in the best way",
      guides: [
        { title: "الدليل السياحي باللغة العربية", description: "Complete guide in Arabic", filename: "larache-guide-ar.pdf", flag: "🇲🇦", size: "2.1 MB" },
        { title: "Tourist Guide in English", description: "Complete guide to Larache's historical and cultural landmarks", filename: "larache-guide-en.pdf", flag: "🇬🇧", size: "2.1 MB" },
        { title: "Guide Touristique en Français", description: "Complete guide in French", filename: "larache-guide-fr.pdf", flag: "🇫🇷", size: "2.1 MB" },
        { title: "Guía Turística en Español", description: "Complete guide in Spanish", filename: "larache-guide-es.pdf", flag: "🇪🇸", size: "2.1 MB" }
      ]
    },
    fr: {
      title: "Guides Touristiques Téléchargeables",
      subtitle: "Téléchargez des guides touristiques gratuits pour explorer Larache de la meilleure façon",
      guides: [
        { title: "الدليل السياحي باللغة العربية", description: "Guide complet en arabe", filename: "larache-guide-ar.pdf", flag: "🇲🇦", size: "2.1 MB" },
        { title: "Tourist Guide in English", description: "Guide complet en anglais", filename: "larache-guide-en.pdf", flag: "🇬🇧", size: "2.1 MB" },
        { title: "Guide Touristique en Français", description: "Guide complet en Français", filename: "larache-guide-fr.pdf", flag: "🇫🇷", size: "2.1 MB" },
        { title: "Guía Turística en Español", description: "Guide complet en espagnol", filename: "larache-guide-es.pdf", flag: "🇪🇸", size: "2.1 MB" }
      ]
    },
    es: {
      title: "Guías Turísticas Descargables",
      subtitle: "Descarga guías turísticas gratuitas para explorar Larache de la mejor manera",
      guides: [
        { title: "الدليل السياحي باللغة العربية", description: "Guía completa en árabe", filename: "larache-guide-ar.pdf", flag: "🇲🇦", size: "2.1 MB" },
        { title: "Tourist Guide in English", description: "Guía completa en inglés", filename: "larache-guide-en.pdf", flag: "🇬🇧", size: "2.1 MB" },
        { title: "Guide Touristique en Français", description: "Guía completa en francés", filename: "larache-guide-fr.pdf", flag: "🇫🇷", size: "2.1 MB" },
        { title: "Guía Turística en Español", description: "Guía completa en Español", filename: "larache-guide-es.pdf", flag: "🇪🇸", size: "2.1 MB" }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/guides/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-sand/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-sand rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{text.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{text.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {text.guides.map((guide, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-ocean/20">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{guide.flag}</div>
                <CardTitle className="text-lg group-hover:text-ocean transition-colors">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {guide.description}
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                  <Globe className="w-4 h-4 mr-1" />
                  PDF • {guide.size}
                </div>
                <Button
                  onClick={() => handleDownload(guide.filename)}
                  className="w-full bg-ocean hover:bg-ocean/90 text-white group-hover:scale-105 transition-transform"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'تحميل' : language === 'fr' ? 'Télécharger' : language === 'es' ? 'Descargar' : 'Download'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
