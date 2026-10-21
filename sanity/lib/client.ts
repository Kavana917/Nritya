import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, hasSanityConfig } from "../env";

export const client = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
