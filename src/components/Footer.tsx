import { Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Droplets className="w-6 h-6 text-primary" />
            <span className="font-heading font-bold text-lg">
              <span className="text-primary">WODO</span>
              <span className="text-foreground">MAT</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} WODOMAT. Чистая вода рядом с вашим домом.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Главная", to: "/" },
              { label: "Каталог", to: "/catalog" },
              { label: "Аренда", to: "/rental" },
              { label: "Контакты", to: "/contacts" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
