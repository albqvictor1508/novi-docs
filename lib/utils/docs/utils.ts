import docsItems from "./docs-items";
import { allContents } from '../../../.contentlayer/generated';

interface GroupedItem {
	title: string;
	description: string;
	url: string;
	slug: string;
	source_url: string;
	badge: {
		label: string;
		color: string;
	} | null;
}

interface GroupedData {
	title: string;
	slug: string;
	sourceFileDir: string;
	items: GroupedItem[];
}

export const getDoc = (category: string, slug: string) => {
  const items = docsItems.flatMap(d =>
		d.items.flatMap((i: any) => i?.items || i)
	);
	const ct: any = items.find((d: any) => d.url === `/${category}/${slug}`);
	const obj: any = allContents.find(
		d => d.url === `docs/${category}/${slug}`
	);
	if (!obj) return null;
	obj.item = ct;
	return obj;
}