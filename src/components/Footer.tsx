import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Centre for Cyberspace Studies</h3>
            <p className="text-base text-secondary-foreground/80">
              Nigeria's first Centre of Excellence in Cyberspace and Data Science research, development and innovations.
            </p>
            <p className="text-base text-secondary-foreground/80 mt-2">
              Nasarawa State University, Keffi
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li><a href="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="/programmes" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Academic Programmes</a></li>
              <li><a href="/services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Our Services</a></li>
              <li><a href="/staff" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Staff Directory</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:director-ccs@nsuk.edu.ng" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  director-ccs@nsuk.edu.ng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-secondary-foreground/80">+234 703 699 0145</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-secondary-foreground/80">+234 803 297 7816</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-base text-secondary-foreground/80">Follow us: @CCSSNSUK</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-base text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Centre for Cyberspace Studies, Nasarawa State University. All rights reserved.</p>
          <p className="mt-1">RC 1259811</p>
        </div>
      </div>
    </footer>
  );
};
