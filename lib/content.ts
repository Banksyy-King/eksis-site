export const features = [
  {
    title: "Gerçek zamanlı sohbet",
    description:
      "Anlık mesajlaşma ile topluluğunuzla kesintisiz iletişim kurun.",
    icon: "chat",
  },
  {
    title: "Ses odaları",
    description:
      "Kristal netliğinde ses kanallarında arkadaşlarınızla buluşun.",
    icon: "voice",
  },
  {
    title: "Topluluk sunucuları",
    description:
      "Kendi sunucunuzu oluşturun ve topluluğunuzu tek yerde yönetin.",
    icon: "server",
  },
  {
    title: "Modern arayüz",
    description:
      "Akıcı animasyonlar ve sezgisel tasarımla premium bir deneyim.",
    icon: "ui",
  },
] as const;

export const changelog = [
  "Sesli sohbet güvenliği önemli ölçüde güçlendirildi",
  "Mesaj gönderiminde çift-mesaj koruması (idempotency)",
  "Sunucu mesajları artık güvenli backend üzerinden",
  "Kapsamlı istek sınırlama (spam/kötüye kullanım koruması)",
  "Kimlik doğrulama ve gönderici bütünlüğü sıkılaştırıldı",
] as const;

export const changelogVersion = "Alpha 1.0.17";
