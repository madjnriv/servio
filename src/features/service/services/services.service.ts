import { DATABASE_ID, COLLECTION_ID } from "@/shared/constants/database";
import { CreateServiceDto } from "../schemas/create-service.schema";
import { tablesDB } from "@/shared/lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import {
  RawService,
  RawServiceCategory,
  Service,
} from "@/shared/types/services.types";
import { toast } from "react-native-sonner";
import { createServiceSlug } from "../utils/create-service-slug";

interface CreateServiceParams {
  data: CreateServiceDto;
  providerID: string | undefined;
}

export const servicesService = {
  create: async ({
    data,
    providerID,
  }: CreateServiceParams): Promise<Service | null> => {
    if (!providerID) {
      toast.error("You need a provider profile to create a service");
      return null;
    }
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

    const categoryName = categoryRow.name;
    const slug = createServiceSlug(name);
    const priceAsNum = Number(price);

    const newService = await tablesDB.createRow<RawService>({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.SERVICE,
      rowId: ID.unique(),
      data: {
        name,
        description,
        excerpt,
        price: priceAsNum,
        pricing_unit: pricingUnit,
        category: categoryName,
        provider_id: providerID,
        slug,
      },
      // permissions: [Permission.read(Role.any()), Permission.write(Role.any())],
    });

    return {
      id: newService.$id,
      name: newService.name,
      slug: newService.slug,
      excerpt: newService.excerpt,
      description: newService.description,
      pricingUnit: newService.pricing_unit,
      price: newService.price,
      category: newService.category_id,
      providerId: newService.provider_id,
      isActive: newService.is_active,
      createdAt: newService.$createdAt,
    };
  },
  getAll: async (): Promise<Service[] | null> => {
    const services = await tablesDB.listRows<RawService>({
      databaseId: DATABASE_ID,
      tableId: COLLECTION_ID.SERVICE,
    });

    if (!services.rows.length) return null;

    return services.rows.map((service) => ({
      id: service.$id,
      name: service.name,
      slug: service.slug,
      excerpt: service.excerpt,
      description: service.description,
      pricingUnit: service.pricing_unit,
      price: service.price,
      categoryId: service.category_id,
      providerId: service.provider_id,
      isActive: service.is_active,
      createdAt: service.$createdAt,
    }));
  },
  getById: async () => {},
  delete: async (id: string) => {},
};
