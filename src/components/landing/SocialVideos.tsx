import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videoIds = [
  "7666923876844195092",
  "7667637253425876245",
  "7670210158970064135",
  "7674928610142145799",
  "7680592809375829266",
];

const SocialVideos = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-4"
      >
        Мы в <span className="text-gradient-water">соцсетях</span>
      </motion.h2>

      <div className="flex items-center justify-center gap-3 mb-10">
        <a
          href="https://www.tiktok.com/@vodomatbelarus"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-foreground hover:text-primary transition-colors"
        >
          <TikTokIcon className="w-5 h-5" />
          <span className="font-heading text-sm font-semibold">TikTok</span>
        </a>
        <a
          href="https://www.instagram.com/vodomatbelarus"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-heading text-sm font-semibold">Instagram</span>
        </a>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto px-10">
        <CarouselContent>
          {videoIds.map((id, i) => (
            <CarouselItem key={id} className="sm:basis-1/2 lg:basis-1/3">
              <div className="glass-card overflow-hidden p-2">
                <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "9 / 16" }}>
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${id}?autoplay=1&muted=1&loop=1&controls=1&description=0&music_info=0&rel=0`}
                    title={`Видео ВОДОМАТ в TikTok №${i + 1}`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default SocialVideos;
