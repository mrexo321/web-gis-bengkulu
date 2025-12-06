import { z } from "zod";

export const LayerSchema = z.object({
  name: z
    .string()
    .min(1, "Nama layer wajib diisi")
    .max(100, "Nama terlalu panjang"),

  description: z.string().optional(),

  geometryType: z.enum(["POINT", "LINE", "POLYGON"]).refine((v) => v, {
    message: "Tipe geometri wajib dipilih",
  }),

  color: z.string().regex(/^#([0-9A-F]{3}){1,2}$/i, "Format warna tidak valid"),

  iconUrl: z.string().optional(),
});

// Tipe otomatis untuk react-hook-form
export type LayerFormType = z.infer<typeof LayerSchema>;
