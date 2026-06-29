type SceneAsset = {
  src: string;
  alt: string;
  className: string;
};

type HeroSceneProps = {
  slug: string;
};

const sceneAssets: Record<string, SceneAsset[]> = {
  arrival: [
    {
      src: "/scenes/plane.png",
      alt: "",
      className: "photo-scene-asset photo-scene-plane photo-scene-plane-landing",
    },
  ],
  "check-in": [
    {
      src: "/scenes/check-in-desk.png",
      alt: "",
      className: "photo-scene-asset photo-scene-checkin-desk",
    },
  ],
  "apartment-guide": [
    {
      src: "/scenes/guide-flag.png",
      alt: "",
      className: "photo-scene-asset photo-scene-guide-flag",
    },
  ],
  "house-rules": [
    {
      src: "/scenes/guide-flag.png",
      alt: "",
      className: "photo-scene-asset photo-scene-guide-flag",
    },
  ],
  "resort-guide": [
    {
      src: "/scenes/guide-flag.png",
      alt: "",
      className: "photo-scene-asset photo-scene-guide-flag",
    },
  ],
  "beach-guide": [
    {
      src: "/scenes/beach-umbrella.png",
      alt: "",
      className: "photo-scene-asset photo-scene-umbrella",
    },
    {
      src: "/scenes/fishing-boat.png",
      alt: "",
      className: "photo-scene-asset photo-scene-boat",
    },
  ],
  "explore-sharm": [
    {
      src: "/scenes/mountains.png",
      alt: "",
      className: "photo-scene-asset photo-scene-mountains",
    },
  ],
  restaurants: [
    {
      src: "/scenes/restaurant.png",
      alt: "",
      className: "photo-scene-asset photo-scene-restaurant",
    },
  ],
  "facilities-around-you": [
    {
      src: "/scenes/service-icons.png",
      alt: "",
      className: "photo-scene-asset photo-scene-icons-sheet",
    },
  ],
  transportation: [
    {
      src: "/scenes/taxi-car.png",
      alt: "",
      className: "photo-scene-asset photo-scene-taxi",
    },
  ],
  faq: [
    {
      src: "/scenes/faq-icon-transparent.png",
      alt: "",
      className: "photo-scene-asset photo-scene-module-icon",
    },
  ],
  checkout: [
    {
      src: "/scenes/checkout-icon-transparent.png",
      alt: "",
      className: "photo-scene-asset photo-scene-module-icon",
    },
  ],
  "airport-departure": [
    {
      src: "/scenes/plane.png",
      alt: "",
      className: "photo-scene-asset photo-scene-plane photo-scene-plane-takeoff",
    },
  ],
  "returning-guest-club": [
    {
      src: "/scenes/returning-guest-icon-transparent.png",
      alt: "",
      className: "photo-scene-asset photo-scene-module-icon",
    },
  ],
  contact: [
    {
      src: "/scenes/contact-icon-transparent.png",
      alt: "",
      className: "photo-scene-asset photo-scene-module-icon",
    },
  ],
};

export function HeroScene({ slug }: HeroSceneProps) {
  const assets = sceneAssets[slug] ?? sceneAssets["explore-sharm"];

  return (
    <div className="photo-hero-scene" aria-hidden="true">
      <div className="photo-scene-water photo-scene-water-one" />
      <div className="photo-scene-water photo-scene-water-two" />
      {assets.map((asset) => (
        <img
          key={`${asset.src}-${asset.className}`}
          src={asset.src}
          alt={asset.alt}
          className={asset.className}
          draggable={false}
        />
      ))}
    </div>
  );
}
