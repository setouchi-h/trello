import { createApi } from "unsplash-js";
import { formatWithOptions } from "util";

export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch: fetch,
});
