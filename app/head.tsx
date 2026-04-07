export default function Head() {
  return (
    <>
      <meta name="color-scheme" content="dark" />
      {/* Preconnect cho fonts - tăng tốc load */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Preload critical CSS */}
      <link rel="preload" href="/assets/css/assets/index-D8sq_bmz.css" as="style" />
      <link rel="stylesheet" href="/assets/css/assets/index-D8sq_bmz.css" />

      {/* Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </>
  );
}