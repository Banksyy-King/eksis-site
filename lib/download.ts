export const DOWNLOAD_FILE_NAME = "Eksis-Setup-v1.0.18-alpha.exe" as const;
export const DOWNLOAD_HREF = `/${DOWNLOAD_FILE_NAME}` as const;
export const DOWNLOAD_SIZE_LABEL = "64 MB" as const;

export const ALPHA_WARNING =
  "Kapalı alfa sürümüdür. Kararsızlık ve beklenmedik hatalar içerebilir.";

export const downloadConfig = {
  href: DOWNLOAD_HREF,
  fileName: DOWNLOAD_FILE_NAME,
  sizeLabel: DOWNLOAD_SIZE_LABEL,
} as const;
