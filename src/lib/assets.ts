// asset/<slug>/ altındaki görselleri Vite ile derleyip URL'lerini döndürür.
// import.meta.glob (eager + ?url) → doğru (hash'li, base-path'li) URL üretir;
// GitHub Pages alt-yolunda da sorunsuz çalışır.

const galleryModules = import.meta.glob(
  '/asset/*/urun-*.{jpg,jpeg,png,webp}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

/** Bir sayfa için ürün galerisi görselleri (urun-1, urun-2, … sıralı). */
export function galleryFor(slug: string): string[] {
  return Object.entries(galleryModules)
    .filter(([path]) => path.includes(`/asset/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url)
}
