import { DATABASE_ID, COLLECTION_ID } from "@/shared/constants/database";
import { CreateServiceDto } from "../schemas/create-service.schema";
import { tablesDB } from "@/shared/lib/appwrite";
import { ID, Query } from "react-native-appwrite";
import { RawService, RawServiceCategory } from "../types/services.types";
import { toast } from "react-native-sonner";
import { createServiceSlug } from "../utils/create-service-slug";

interface CreateServiceParams {
  data: CreateServiceDto;
  providerID: string;
}

export const servicesService = {
  create: async ({ data, providerID }: CreateServiceParams) => {
    const { category, description, excerpt, name, price, pricingUnit } = data;
    const categoryResult = await tablesDB.listRows<RawServiceCategory>({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.CATEGORY,
      queries: [Query.equal("name", category)],
    });

    const categoryRow = categoryResult.rows[0];

    if (!categoryRow) {
      toast.error("Category not found");
      return null;
    }

    const categoryID = categoryRow.$id;
    const slug = createServiceSlug(name);

    const newService = await tablesDB.createRow<RawService>({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.SERVICE,
      rowId: ID.unique(),
      data: {
        name,
        description,
        excerpt,
        price,
        pricing_unit: pricingUnit,
        category_id: categoryID,
        provider_id: providerID,
        slug,
      },
    });

    return newService;
  },
  getAll: async () => {},
  getById: async () => {},
  delete: async (id: string) => {},
};
