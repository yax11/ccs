import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const galleryImages = [
  { id: 1, title: "CCS Main Building", url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80" },
  { id: 2, title: "Research Laboratory", url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" },
  { id: 3, title: "Cyber Security Workshop", url: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=800&q=80" },
  { id: 4, title: "Data Science Training", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { id: 5, title: "Conference Hall", url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" },
  { id: 6, title: "Hackathon Event", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" },
  { id: 7, title: "Student Learning Center", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" },
  { id: 8, title: "AI Research Lab", url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
  { id: 9, title: "Graduation Ceremony", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Explore moments and achievements from the Centre for Cyberspace Studies
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <Card 
                  key={image.id} 
                  className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl font-semibold">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
