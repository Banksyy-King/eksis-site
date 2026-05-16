import { statSync } from "fs";
import path from "path";

export const DOWNLOAD_FILE_NAME = "Eksis-Setup-v0.1.0-alpha.exe" as const;
export const DOWNLOAD_HREF = `/${DOWNLOAD_FILE_NAME}` as const;

export const ALPHA_WARNING =
  "Kapalı alfa sürümüdür. Kararsızlık ve beklenmedik hatalar içerebilir.";

export function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  if (mb >= 100) return `${Math.round(mb)} MB`;
  if (mb >= 10) return `${Math.round(mb)} MB`;
  return `${mb.toFixed(1)} MB`;
}

export type DownloadInfo = {
  href: string;
  fileName: string;
  sizeBytes: number;
  sizeLabel: string;
  available: boolean;
};

export function getDownloadInfo(): DownloadInfo {
  const filePath = path.join(process.cwd(), "public", DOWNLOAD_FILE_NAME);

  try {
    const { size } = statSync(filePath);
    return {
      href: DOWNLOAD_HREF,
      fileName: DOWNLOAD_FILE_NAME,
      sizeBytes: size,
      sizeLabel: formatFileSize(size),
      available: true,
    };
  } catch {
    return {
      href: DOWNLOAD_HREF,
      fileName: DOWNLOAD_FILE_NAME,
      sizeBytes: 0,
      sizeLabel: "—",
      available: false,
    };
  }
}
