import { readFile } from "fs/promises";
import BeautifyMarkdown from "~/components/markdown";
import { useParams } from "react-router";

const PATH = `${process.cwd()}/public/docs` as const;

export default async function Page() {
  const { cid, sid } = useParams();
  const markdown = await readFile(`${PATH}/${cid}/${sid}.md`, "utf-8").catch(() => null);

  if (!markdown) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <h2 className="text-2xl font-bold mb-2">Document not found</h2>
        <p className="text-text-secondary">
          The document you are looking for does not exist or has been moved.
        </p>
      </div>
    );
  }

  return (
    <BeautifyMarkdown markdown={markdown} />
  );
}