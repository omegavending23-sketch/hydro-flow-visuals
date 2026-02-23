import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Droplets className="w-6 h-6 text-primary" />
            <span className="font-heading font-bold text-lg">
              <span className="text-primary">WODO</span>
              <span className="text-foreground">MAT</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} WODOMAT. Чистая вода рядом с вашим домом.
          </p>
          <div className="flex gap-6">
            {["Главная", "Каталог", "Аренда", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item === "Главная" ? "hero" : item === "Каталог" ? "catalog" : item === "Аренда" ? "rental" : "contacts"}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
